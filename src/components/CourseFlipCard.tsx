interface CourseFlipCardProps {
  title: string;
  area: string;
  description: string;
  topics: string[];
  onOpen: () => void;

  hint?: string;
  detailsLabel?: string;
  openLabel?: string;
  moreLabel?: (count: number) => string;
}

const MAX_PREVIEW_TOPICS = 6;

export function CourseFlipCard({
  title,
  area,
  description,
  topics,
  onOpen,
  hint = 'Click to view full course details',
  detailsLabel = 'Technologies & concepts',
  openLabel = 'Click to view all details',
  moreLabel = (count) => `+${count} more`,
}: CourseFlipCardProps) {
  const previewTopics = topics.slice(
    0,
    MAX_PREVIEW_TOPICS
  );

  const remainingTopics =
    topics.length - previewTopics.length;

  return (
    <button
      type="button"
      className="course-flip-card"
      onClick={onOpen}
      aria-haspopup="dialog"
    >
      <span className="course-flip-card__inner">
        <span className="course-flip-card__face course-flip-card__front">
          <span className="course-flip-card__area">
            {area}
          </span>

          <strong>{title}</strong>

          <span className="course-flip-card__description">
            {description}
          </span>

          <span className="course-flip-card__hint">
            {hint}
          </span>
        </span>

        <span className="course-flip-card__face course-flip-card__back">
          <span className="course-flip-card__area">
            {area}
          </span>

          <strong>{title}</strong>

          <span className="course-flip-card__label">
            {detailsLabel}
          </span>

          <span className="course-flip-card__topics">
            {previewTopics.map((topic) => (
              <span
                className="tag"
                key={topic}
              >
                {topic}
              </span>
            ))}

            {remainingTopics > 0 && (
              <span className="tag">
                {moreLabel(remainingTopics)}
              </span>
            )}
          </span>

          <span className="course-flip-card__hint">
            {openLabel}
          </span>
        </span>
      </span>
    </button>
  );
}