import { useTranslation } from 'react-i18next';

import { AcademicCourseCard } from '../components/AcademicCourseCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

import { academicCourses } from '../data/coursework';
import { usePageMeta } from '../hooks/usePageMeta';

export function EducationPage() {
  const { t } = useTranslation();

  usePageMeta({
    title: `${t('home.education.title')} - ${t(
      'names.fullName'
    )}`,
    description: t(
      'home.coursework.description'
    ),
    path: '/education',
  });

  return (
    <>
      <section className="section page-top education-page__hero">
        <div className="container">
            <div className="education-page__intro">
                <div>
                    <p className="eyebrow">
                    {t('home.education.eyebrow')}
                    </p>

                    <h1>
                    {t('home.education.title')}
                    </h1>

                    <p className="education-page__lead">
                        {t('educationPage.lead')}
                    </p>
                </div>

                <div className="education-page__grade">
                    <span>{t('educationPage.degreeResult')}</span>

                    <strong>
                    {t('home.education.essex.grade')}
                    </strong>

                    <small>
                    {t('home.education.essex.usEquivalent')}
                    </small>
                </div>
            </div>
            <div className="education-page__stats">
                <div>
                    <strong>73%</strong>

                    <span>
                    {t('educationPage.overallGrade', {
                        defaultValue: 'Overall grade',
                    })}
                    </span>
                </div>

                <div>
                    <strong>
                    {academicCourses.length}
                    </strong>

                    <span>
                    {t('educationPage.technicalCourses', {
                        defaultValue: 'Technical courses',
                    })}
                    </span>
                </div>

                <div>
                    <strong>
                    First-Class
                    </strong>

                    <span>
                    {t('educationPage.classification', {
                        defaultValue: 'UK classification',
                    })}
                    </span>
                </div>
                </div>
            <div className="education-grid education-page__degrees">
            <Reveal>
                <article>
                <span>
                    {t('home.education.essex.period')}
                </span>

                <h3>
                    {t('home.education.essex.title')}
                </h3>

                <strong>
                    {t('home.education.essex.institution')}
                </strong>

                <p>
                    {t('home.education.essex.description')}
                </p>
                </article>
            </Reveal>

            <Reveal>
                <article>
                <span>
                    {t('home.education.omiros.period')}
                </span>

                <h3>
                    {t('home.education.omiros.title')}
                </h3>

                <strong>
                    {t('home.education.omiros.institution')}
                </strong>

                <p>
                    {t('home.education.omiros.description')}
                </p>
                </article>
            </Reveal>
            </div>
        </div>
        </section>

      <section
        className="section section--soft"
        id="coursework"
        >
        <div className="container">
          <SectionHeading
            eyebrow={t(
              'home.coursework.eyebrow'
            )}
            title={t(
              'home.coursework.title'
            )}
            description={t(
              'home.coursework.description'
            )}
          />

          <div className="course-grid">
            {academicCourses.map((course) => (
              <Reveal key={course.name}>
                <AcademicCourseCard
                  course={course}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}