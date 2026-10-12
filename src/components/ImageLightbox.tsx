import {
  type PointerEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { Maximize2, X } from 'lucide-react';

interface ImageLightboxProps {
  src: string;
  alt: string;
}

export function ImageLightbox({
  src,
  alt,
}: ImageLightboxProps) {
    const [isOpen, setIsOpen] = useState(false);
    const titleId = useId();
    const closeRef = useRef<HTMLButtonElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const viewRef = useRef({
    scale: 1,
    x: 0,
    y: 0,
    });

    const dragRef = useRef<{
        pointerId: number;
        startX: number;
        startY: number;
        originX: number;
        originY: number;
        moved: boolean;
        } | null>(null);

    const skipClickRef = useRef(false);

    const touchRef = useRef<{
        x: number;
        y: number;
        distance: number;
    } | null>(null);

    const clampPan = useCallback((
        nextX: number,
        nextY: number,
        scale: number
        ) => {
        if (scale <= 1) {
            return { x: 0, y: 0 };
        }

        const image = imageRef.current;
        const overlay = overlayRef.current;

        if (!image || !overlay) {
            return { x: nextX, y: nextY };
        }

        const rect = image.getBoundingClientRect();
        const viewport = overlay.getBoundingClientRect();
        const current = viewRef.current;

        const centerX =
            rect.left + rect.width / 2 - current.x;

        const centerY =
            rect.top + rect.height / 2 - current.y;

        const width = rect.width * scale / current.scale;
        const height = rect.height * scale / current.scale;

        const clampAxis = (
            position: number,
            center: number,
            size: number,
            start: number,
            end: number
        ) => {
            const minimum = end - size / 2 - center;
            const maximum = start + size / 2 - center;

            if (minimum > maximum) {
            return (start + end) / 2 - center;
            }

            return Math.max(
            minimum,
            Math.min(maximum, position)
            );
        };

        return {
            x: clampAxis(
            nextX, centerX, width,
            viewport.left, viewport.right
            ),
            y: clampAxis(
            nextY, centerY, height,
            viewport.top, viewport.bottom
            ),
        };
    }, []);

    const zoomAtPoint = useCallback((
        requestedScale: number,
        mouseX: number,
        mouseY: number
        ) => {
        const image = imageRef.current;
        const dialog = image?.parentElement;

        if (!image || !dialog) return;

        const previous = viewRef.current;

        const scale = Math.max(
            1,
            Math.min(4, requestedScale)
        );

        if (scale === previous.scale) return;

        const rect = dialog.getBoundingClientRect();
        const ratio = scale / previous.scale;

        const centerX =
            rect.left + rect.width / 2 + previous.x;

        const centerY =
            rect.top + rect.height / 2 + previous.y;

        const x = scale === 1
            ? 0
            : previous.x + (mouseX - centerX) * (1 - ratio);

        const y = scale === 1
            ? 0
            : previous.y + (mouseY - centerY) * (1 - ratio);

        const bounded = clampPan(x, y, scale);

            viewRef.current = {
            scale,
            x: bounded.x,
            y: bounded.y,
            };

        image.style.transform =
            `translate(${bounded.x}px, ${bounded.y}px) scale(${scale})`;

        image.style.cursor =
            scale > 1 ? 'zoom-out' : 'zoom-in';
        },[clampPan]);
  
    useEffect(() => {
    if (!isOpen) return;

  const previousOverflow =
    document.body.style.overflow;

  document.body.style.overflow = 'hidden';
  closeRef.current?.focus();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleWheel = (event: WheelEvent) => {
    if (event.target !== imageRef.current) return;

    event.preventDefault();

    const delta = event.deltaY * (
      event.deltaMode === 1
        ? 16
        : event.deltaMode === 2
          ? window.innerHeight
          : 1
    );

    const nextScale =
      viewRef.current.scale *
      Math.exp(-delta * 0.0015);

    zoomAtPoint(
      nextScale,
      event.clientX,
      event.clientY
    );
  };

  const overlay = overlayRef.current;

  document.addEventListener('keydown', handleKeyDown);

  overlay?.addEventListener('wheel', handleWheel, {
    passive: false,
  });

  return () => {
    document.body.style.overflow = previousOverflow;

    document.removeEventListener(
      'keydown',
      handleKeyDown
    );

    overlay?.removeEventListener(
      'wheel',
      handleWheel
    );

    triggerRef.current?.focus();
  };
}, [isOpen, zoomAtPoint]);

const stopDragging = (
  event: PointerEvent<HTMLImageElement>
) => {
  const drag = dragRef.current;

  if (!drag || drag.pointerId !== event.pointerId) {
    return;
  }

  skipClickRef.current = drag.moved;
  dragRef.current = null;

  const image = event.currentTarget;

  image.style.transition = 'transform 90ms ease-out';
  image.style.cursor = 'zoom-out';

  if (image.hasPointerCapture(event.pointerId)) {
    image.releasePointerCapture(event.pointerId);
  }
};

const getTouchPosition = (
  touches: React.TouchList
) => {
  const first = touches[0];
  const second = touches[1];

  if (!first) return null;

  if (!second) {
    return {
      x: first.clientX,
      y: first.clientY,
      distance: 0,
    };
  }

  return {
    x: (first.clientX + second.clientX) / 2,
    y: (first.clientY + second.clientY) / 2,
    distance: Math.hypot(
      second.clientX - first.clientX,
      second.clientY - first.clientY
    ),
  };
};

const handleTouchStart = (
  event: React.TouchEvent<HTMLImageElement>
) => {
  if (event.touches.length === 1) {
    skipClickRef.current = false;
  } else {
    skipClickRef.current = true;
  }

  touchRef.current = getTouchPosition(
    event.touches
  );

  event.currentTarget.style.transition = 'none';
};

const handleTouchMove = (
  event: React.TouchEvent<HTMLImageElement>
) => {
  const previous = touchRef.current;
  const current = getTouchPosition(event.touches);

  if (!previous || !current) return;

  const image = event.currentTarget;

  const dx = current.x - previous.x;
  const dy = current.y - previous.y;

  if (
    current.distance > 0 &&
    previous.distance > 0
  ) {
    zoomAtPoint(
      viewRef.current.scale *
        (current.distance / previous.distance),
      current.x,
      current.y
    );
  }

  if (
    viewRef.current.scale > 1 &&
    (
      (current.distance === 0 &&
        previous.distance === 0) ||
      (current.distance > 0 &&
        previous.distance > 0)
    )
  ) {
   const bounded = clampPan(
        viewRef.current.x + dx,
        viewRef.current.y + dy,
        viewRef.current.scale
    );

    viewRef.current.x = bounded.x;
    viewRef.current.y = bounded.y;

    const { scale, x, y } = viewRef.current;

    image.style.transform =
      `translate(${x}px, ${y}px) scale(${scale})`;
  }

  if (
    current.distance > 0 ||
    Math.hypot(dx, dy) > 3
  ) {
    skipClickRef.current = true;
  }

  touchRef.current = current;
};

const handleTouchEnd = (
  event: React.TouchEvent<HTMLImageElement>
) => {
  touchRef.current = getTouchPosition(
    event.touches
  );

  if (event.touches.length === 0) {
    event.currentTarget.style.transition =
      'transform 90ms ease-out';
  }
};
  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="image-lightbox__trigger"
        onClick={() => {
            viewRef.current = { scale: 1, x: 0, y: 0 };
            setIsOpen(true);
            }}
        aria-label={`Enlarge image: ${alt}`}
      >
        <img src={src} alt={alt} />

        <Maximize2
          className="image-lightbox__expand"
          aria-hidden="true"
        />
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={overlayRef}
            className="image-lightbox"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsOpen(false);
              }
            }}
          >
            <div
              className="image-lightbox__dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
            >
              <span
                id={titleId}
                className="image-lightbox__sr-only"
              >
                Enlarged project image
              </span>

              <button
                ref={closeRef}
                type="button"
                className="image-lightbox__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close enlarged image"
              >
                <X aria-hidden="true" />
              </button>

              <img
                ref={imageRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd}
                src={src}
                alt={alt}
                draggable={false}
                onPointerDown={(event) => {
                    if (
                    event.pointerType !== 'mouse' ||
                    event.button !== 0 ||
                    viewRef.current.scale <= 1
                    ) {
                    return;
                    }

                    skipClickRef.current = false;

                    dragRef.current = {
                    pointerId: event.pointerId,
                    startX: event.clientX,
                    startY: event.clientY,
                    originX: viewRef.current.x,
                    originY: viewRef.current.y,
                    moved: false,
                    };

                    event.currentTarget.setPointerCapture(
                    event.pointerId
                    );

                    event.currentTarget.style.transition = 'none';
                }}
                onPointerMove={(event) => {
                    const drag = dragRef.current;

                    if (!drag || drag.pointerId !== event.pointerId) {
                    return;
                    }

                    const dx = event.clientX - drag.startX;
                    const dy = event.clientY - drag.startY;

                    if (!drag.moved && Math.hypot(dx, dy) < 5) {
                    return;
                    }

                    drag.moved = true;

                    const bounded = clampPan(
                        drag.originX + dx,
                        drag.originY + dy,
                        viewRef.current.scale
                    );

                    viewRef.current.x = bounded.x;
                    viewRef.current.y = bounded.y;

                    const { scale, x, y } = viewRef.current;

                    event.currentTarget.style.transform =
                    `translate(${x}px, ${y}px) scale(${scale})`;

                    event.currentTarget.style.cursor = 'grabbing';
                }}
                onPointerUp={stopDragging}
                onPointerCancel={stopDragging}
                onClick={(event) => {
                    if (skipClickRef.current) {
                    skipClickRef.current = false;
                    return;
                    }

                    const nextScale =
                    viewRef.current.scale > 1 ? 1 : 2;

                    zoomAtPoint(
                    nextScale,
                    event.clientX,
                    event.clientY
                    );
                }}
                style={{
                    cursor: 'zoom-in',
                    transformOrigin: 'center center',
                    transition: 'transform 90ms ease-out',
                    touchAction: 'none',
                }}
                />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}