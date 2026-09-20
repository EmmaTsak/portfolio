import type { AcademicCourse } from '../data/coursework';

interface AcademicCourseCardProps {
  course: AcademicCourse;
}

const MAX_VISIBLE_TOPICS = 8;

export function AcademicCourseCard({
  course,
}: AcademicCourseCardProps) {
  const visibleTopics = course.topics.slice(0, MAX_VISIBLE_TOPICS);
  const remainingTopics = course.topics.slice(MAX_VISIBLE_TOPICS);

  return (
    <article className="course-card">
      <span className="course-card__area">{course.area}</span>

      <h3>{course.name}</h3>

      <p className="course-card__description">
        {course.description}
      </p>

      {course.academicWork && (
        <p className="course-card__work">
          <strong>Academic work:</strong> {course.academicWork}
        </p>
      )}

      <div
        className="tag-row course-card__topics"
        aria-label={`${course.name} key topics`}
      >
        {visibleTopics.map((topic) => (
          <span className="tag" key={topic}>
            {topic}
          </span>
        ))}

        {remainingTopics.length > 0 && (
          <span
            className="tag course-card__more"
            title={remainingTopics.join(', ')}
            aria-label={`Additional topics: ${remainingTopics.join(', ')}`}
          >
            +{remainingTopics.length} more
          </span>
        )}
      </div>
    </article>
  );
}