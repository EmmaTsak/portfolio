import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { Project } from '../data/projects';
import { SafeImage } from './SafeImage';

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();

  const translationBase = `projects.items.${project.slug}`;

  const eyebrow = t(`${translationBase}.eyebrow`, {
    defaultValue: project.eyebrow,
  });

  const description = t(`${translationBase}.description`, {
    defaultValue: project.description,
  });

  const visualAlt = t(`${translationBase}.visualAlt`, {
    defaultValue: project.visualAlt,
  });

  const visualLabel = t(`${translationBase}.visualLabel`, {
    defaultValue: project.visualLabel,
  });

  const status = project.status
    ? t(`${translationBase}.status`, {
        defaultValue: project.status,
      })
    : undefined;

  return (
    <article className="project-card">
      <Link
        className="project-card__overlay-link"
        to={`/projects/${project.slug}`}
        aria-label={t('projects.card.openCaseStudy', {
          name: project.name,
        })}
      />

      <div className="project-card__visual">
        <SafeImage
          src={`${import.meta.env.BASE_URL}${project.visual}`}
          alt={visualAlt}
        />

        <span className="visual-label">
          {visualLabel}
        </span>
      </div>

      <div className="project-card__body">
        <div className="project-meta">
          <span>{eyebrow}</span>

          {status && (
            <span className="status-pill">
              {status}
            </span>
          )}
        </div>

        <h3>{project.name}</h3>

        <p>{description}</p>

        <div
          className="tag-row"
          aria-label={t('projects.card.technologies')}
        >
          {project.tech.slice(0, 5).map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {(project.liveDemo || project.github) && (
          <div className="project-card__actions">
            <div className="project-card__links">
              {project.liveDemo && (
                <a
                  className="text-link project-card__external-link"
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('projects.card.liveDemo')}
                  <ExternalLink />
                </a>
              )}
            </div>

            <a
              className="icon-link project-card__external-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={t('projects.card.github', {
                name: project.name,
              })}
            >
              <Github />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}