import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { AcademicCourse } from '../data/coursework';
import { CourseDetailModal } from './CourseDetailModal';
import { CourseFlipCard } from './CourseFlipCard';

interface AcademicCourseCardProps {
  course: AcademicCourse;
}

const courseTranslationKeys: Record<string, string> = {
  'Advanced Programming': 'advancedProgramming',
  'Advanced Databases': 'advancedDatabases',
  'Operating Systems & Network Programming':
    'operatingSystems',
  'Mobile Programming': 'mobileProgramming',
  'Object-Oriented Programming': 'oop',
  'Computer Networks & Security':
    'networksSecurity',
  'Software Engineering': 'softwareEngineering',
  'Web Application Programming':
    'webProgramming',
  'Human-Computer Interaction': 'hci',
};

export function AcademicCourseCard({
  course,
}: AcademicCourseCardProps) {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <CourseFlipCard
        title={name}
        area={area}
        description={description}
        topics={course.topics}
        onOpen={() => setIsOpen(true)}
        hint={t(
          'home.coursework.viewCourseDetails',
          {
            defaultValue:
              'Click to view full course details',
          }
        )}
        detailsLabel={t(
          'home.coursework.technologiesConcepts',
          {
            defaultValue:
              'Technologies & concepts',
          }
        )}
        openLabel={t(
          'home.coursework.viewAllDetails',
          {
            defaultValue:
              'Click to view all details',
          }
        )}
        moreLabel={(count) =>
          t('home.coursework.more', {
            count,
            defaultValue: `+${count} more`,
          })
        }
      />

      <CourseDetailModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={name}
        area={area}
        description={description}
        topics={course.topics}
        academicWork={academicWork}
        academicWorkLabel={t(
          'home.coursework.academicWorkLabel'
        )}
        technologiesLabel={t(
          'home.coursework.technologiesConcepts',
          {
            defaultValue:
              'Technologies & concepts',
          }
        )}
      />
    </>
  );
}