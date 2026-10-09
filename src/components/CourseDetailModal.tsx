import { useEffect } from 'react';
import { X } from 'lucide-react';

interface CourseDetailModalProps {
  open: boolean;
  onClose: () => void;

  title: string;
  area: string;
  description: string;
  topics: string[];

  academicWork?: string;

  academicWorkLabel?: string;
  technologiesLabel?: string;
}

export function CourseDetailModal({
  open,
  onClose,
  title,
  area,
  description,
  topics,
  academicWork,
  academicWorkLabel = 'Academic work',
  technologiesLabel = 'Technologies & concepts',
}: CourseDetailModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener(
      'keydown',
      handleKeyDown
    );

    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown
      );

      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="course-modal"
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        className="course-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <button
            type="button"
            className="course-modal__close"
            onClick={onClose}
            aria-label="Close course details"
            >
            <X
                size={24}
                strokeWidth={2.2}
                aria-hidden="true"
            />
        </button>

        <div className="course-modal__scroll">
            <span className="course-modal__area">
            {area}
            </span>

            <h2 id="course-modal-title">
            {title}
            </h2>

            <p className="course-modal__description">
            {description}
            </p>

            {academicWork && (
            <div className="course-modal__section">
                <h3>{academicWorkLabel}</h3>
                <p>{academicWork}</p>
            </div>
            )}

            <div className="course-modal__section">
            <h3>{technologiesLabel}</h3>

            <div className="course-modal__topics">
                {topics.map((topic) => (
                <span
                    className="tag"
                    key={topic}
                >
                    {topic}
                </span>
                ))}
            </div>
            </div>
        </div>
    </div>
</div>
  );
}