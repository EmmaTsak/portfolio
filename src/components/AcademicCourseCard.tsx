import { useTranslation } from 'react-i18next';

import type { AcademicCourse } from '../data/coursework';

interface AcademicCourseCardProps {
  course: AcademicCourse;
}

const MAX_VISIBLE_TOPICS = 8;

const courseTranslationKeys: Record<string, string> = {
  'Advanced Programming': 'advancedProgramming',
  'Advanced Databases': 'advancedDatabases',
  'Operating Systems & Network Programming': 'operatingSystems',
  'Mobile Programming': 'mobileProgramming',
  'Object-Oriented Programming': 'oop',
  'Computer Networks & Security': 'networksSecurity',
  'Software Engineering': 'softwareEngineering',
  'Web Application Programming': 'webProgramming',
  'Human-Computer Interaction': 'hci',
};

export function AcademicCourseCard({
  course,
}: AcademicCourseCardProps) {
  const { t } = useTranslation();

  const translationKey =
    courseTranslationKeys[course.name];

  const translationBase =
    `home.coursework.courses.${translationKey}`;

  const name = t(`${translationBase}.name`, {
    defaultValue: course.name,
  });

  const area = t(`${translationBase}.area`, {
    defaultValue: course.area,
  });

  const description = t(
    `${translationBase}.description`,
    {
      defaultValue: course.description,
    }
  );

  const academicWork = course.academicWork
    ? t(`${translationBase}.academicWork`, {
        defaultValue: course.academicWork,
      })
    : undefined;

  const visibleTopics = course.topics.slice(
    0,
    MAX_VISIBLE_TOPICS
  );

  const remainingTopics = course.topics.slice(
    MAX_VISIBLE_TOPICS
  );

  return (
    <article className="course-card">
      <span className="course-card__area">
        {area}
      </span>

      <h3>{name}</h3>

      <p className="course-card__description">
        {description}
      </p>

      {academicWork && (
        <p className="course-card__work">
          <strong>
            {t(
              'home.coursework.academicWorkLabel'
            )}
          </strong>{' '}
          {academicWork}
        </p>
      )}

      <div
        className="tag-row course-card__topics"
        aria-label={t(
          'home.coursework.keyTopics',
          { name }
        )}
      >
        {visibleTopics.map((topic) => (
          <span
            className="tag"
            key={topic}
          >
            {topic}
          </span>
        ))}

        {remainingTopics.length > 0 && (
          <span
            className="tag course-card__more"
            title={remainingTopics.join(', ')}
            aria-label={t(
              'home.coursework.additionalTopics',
              {
                topics:
                  remainingTopics.join(', '),
              }
            )}
          >
            {t('home.coursework.more', {
              count: remainingTopics.length,
            })}
          </span>
        )}
      </div>
    </article>
  );
}