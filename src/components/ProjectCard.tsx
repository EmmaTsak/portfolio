import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { Project } from '../data/projects';
import { SafeImage } from './SafeImage';

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const { t } = useTranslation();

  const translationBase =
    `projects.items.${project.slug}`;

  const description = t(
    `${translationBase}.description`,
    {
      defaultValue: project.description,
    }
  );

  const visualAlt = t(
    `${translationBase}.visualAlt`,
    { defaultValue: project.visualAlt }
  );

  const visualLabel = t(
    `${translationBase}.visualLabel`,
    { defaultValue: project.visualLabel }
  );

  const status = project.status
    ? t(`${translationBase}.status`, {
        defaultValue: project.status,
      })
    : undefined;

  return (
    <article
          className="project-card project-card--mini project-card--interactive"
    >
      <Link
        className="project-card__mini-link"
        to={`/projects/${project.slug}`}
        aria-label={t(
          'projects.card.openCaseStudy',
          {
            name: project.name,
          }
        )}
      >
        <div className="project-card__preview">
          <SafeImage
            src={`${import.meta.env.BASE_URL}${project.visual}`}
            alt={visualAlt}
          />

          <span className="project-card__preview-label">
            {visualLabel}
          </span>
        </div>
        <div className="project-card__mini-content">
          <span className="project-card__category">
            {project.categories[0]}
          </span>

          <h3>{project.name}</h3>

          <p>{description}</p>

          <div className="project-card__mini-tech">
            {project.tech
              .slice(0, 4)
              .map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
          </div>
        </div>

        <div className="project-card__mini-footer">
          <span>
            {status ??
              project.categories[0]}
          </span>

          <span className="project-card__view">
            {t('projects.card.view')}
            <ArrowRight />
          </span>
        </div>
      </Link>
    </article>
  );
}