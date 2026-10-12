
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { SafeImage } from './SafeImage';
import { featuredProjects } from '../data/projects';

export function FeaturedProjectSpotlight() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const project = featuredProjects[activeIndex];

  if (!project) return null;

  const translationBase = `projects.items.${project.slug}`;

  return (
    <section
      className="featured-spotlight"
      aria-label={t('home.selectedWork.title')}
    >
      <div className="featured-spotlight__header">
        <span className="eyebrow">
          {t('home.selectedWork.eyebrow')}
        </span>

        <span className="featured-spotlight__counter">
          {String(activeIndex + 1).padStart(2, '0')}
          {' / '}
          {String(featuredProjects.length).padStart(2, '0')}
        </span>
      </div>

      <div className="featured-spotlight__tabs">
        {featuredProjects.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            className={
              index === activeIndex
                ? 'featured-spotlight__tab is-active'
                : 'featured-spotlight__tab'
            }
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>
              {String(index + 1).padStart(2, '0')}
            </span>
            {item.name}
          </button>
        ))}
      </div>

      <div
        className="featured-spotlight__body"
        key={project.slug}
      >
        <div className="featured-spotlight__content">
          <span className="project-card__category">
            {project.categories[0]}
          </span>

          <h3>{project.name}</h3>

          <p>
            {t(`${translationBase}.description`, {
              defaultValue: project.description,
            })}
          </p>

          <div className="project-card__mini-tech">
            {project.tech.slice(0, 5).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <Link
            className="button button--primary"
            to={`/projects/${project.slug}`}
          >
            {t('projects.card.view')}
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="featured-spotlight__visual">
          <SafeImage
            src={`${import.meta.env.BASE_URL}${project.visual}`}
            alt={t(`${translationBase}.visualAlt`, {
              defaultValue: project.visualAlt,
            })}
          />

          <span className="featured-spotlight__visual-label">
            {t(`${translationBase}.visualLabel`, {
              defaultValue: project.visualLabel,
            })}
          </span>
        </div>
      </div>
    </section>
  );
}
