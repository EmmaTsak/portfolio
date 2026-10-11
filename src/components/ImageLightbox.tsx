import {
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

      if (event.key === 'Tab') {
        // The close button is the only focusable
        // control inside this dialog.
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        'keydown',
        handleKeyDown
      );

      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="image-lightbox__trigger"
        onClick={() => setIsOpen(true)}
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

              <img src={src} alt={alt} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}