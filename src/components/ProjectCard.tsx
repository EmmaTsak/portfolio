import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  type MouseEvent,
  useRef,
} from 'react';

import type { Project } from '../data/projects';

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

  const status = project.status
    ? t(`${translationBase}.status`, {
        defaultValue: project.status,
      })
    : undefined;

  const cardRef =
  useRef<HTMLElement>(null);

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>
  ) => {
    const card = cardRef.current;

    if (!card) return;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const rotateX =
      ((y / rect.height) - 0.5) * -3;

    const rotateY =
      ((x / rect.width) - 0.5) * 3;

    card.style.setProperty(
      '--mouse-x',
      `${x}px`
    );

    card.style.setProperty(
      '--mouse-y',
      `${y}px`
    );

    card.style.setProperty(
      '--rotate-x',
      `${rotateX}deg`
    );

    card.style.setProperty(
      '--rotate-y',
      `${rotateY}deg`
    );
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty(
      '--rotate-x',
      '0deg'
    );

    card.style.setProperty(
      '--rotate-y',
      '0deg'
    );
  };

  return (
    <article
      ref={cardRef}
      className="project-card project-card--mini project-card--interactive"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
            View
            <ArrowRight />
          </span>
        </div>
      </Link>
    </article>
  );
}