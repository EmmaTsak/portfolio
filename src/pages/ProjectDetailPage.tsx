import {
  ArrowLeft,
  ExternalLink,
  Github,
} from 'lucide-react';
import {
  Link,
  useParams,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { projects } from '../data/projects';
import { ImageLightbox } from '../components/ImageLightbox';
import { NotFoundProject } from './NotFoundPage';
import { usePageMeta } from '../hooks/usePageMeta';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const project = projects.find(
    (item) => item.slug === slug
  );

  const translationBase = project
    ? `projects.items.${project.slug}`
    : '';

  const description = project
    ? t(`${translationBase}.description`, {
        defaultValue: project.description,
      })
    : t(
        'projects.detail.notFoundDescription'
      );

  const eyebrow = project
    ? t(`${translationBase}.eyebrow`, {
        defaultValue: project.eyebrow,
      })
    : '';

  const role = project
    ? t(`${translationBase}.role`, {
        defaultValue: project.role,
      })
    : '';

  const visualAlt = project
    ? t(`${translationBase}.visualAlt`, {
        defaultValue: project.visualAlt,
      })
    : '';

  usePageMeta({
    title: project
      ? `${project.name} — ${t(
          'names.fullName'
        )}`
      : t(
          'projects.detail.notFoundTitle',
          {
            name: t('names.fullName'),
          }
        ),
    description,
    path: project
      ? `/projects/${project.slug}`
      : '/projects/missing',
  });

  if (!project) {
    return <NotFoundProject />;
  }

  const isPriceWise = project.slug === 'pricewise';

  return (
    <div
      id="top"
      className={`project-detail-page ${
        isPriceWise ? 'project-detail-page--pricewise' : ''
      }`}
    >
      <section className="case-hero section page-top">
        <div className="container">
          <Link
            className="back-link"
            to="/projects"
          >
            <ArrowLeft />
            {t(
              'projects.detail.allProjects'
            )}
          </Link>

          <div className="project-detail-hero">
            <div className="project-detail-copy">
              <p className="eyebrow">
                {eyebrow}
              </p>

              <h1>{project.name}</h1>

              <p className="case-lead">
                {description}
              </p>

              <p className="project-role">
                <strong>
                  {t(
                    'projects.detail.role'
                  )}
                </strong>{' '}
                {role}
              </p>

              <div className="tag-row">
                {project.tech.map(
                  (item) => (
                    <span
                      className="tag"
                      key={item}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="button-row">
                {isPriceWise && project.liveDemo && (
                  <a
                    className="button button--primary"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink />
                    {t('projects.detail.tryLivePrototype')}
                  </a>
                )}

                <a
                  className={`button ${
                    isPriceWise ? 'button--ghost' : 'button--primary'
                  }`}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                  {t('projects.detail.viewRepository')}
                </a>
              </div>
            </div>

            <div
              className={`case-visual project-detail-visual ${
                isPriceWise ? 'pricewise-browser' : ''
              }`}
            >
              {isPriceWise && (
                <div
                  className="pricewise-browser__bar"
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />

                  <span className="pricewise-browser__name">
                    {project.name}
                  </span>
                </div>
              )}

              <ImageLightbox
                src={`${import.meta.env.BASE_URL}${project.visual}`}
                alt={visualAlt}
              />
            </div>
          </div>
        </div>
      </section>

      
      {isPriceWise && (
        <section className="section pricewise-story">
          <div className="container pricewise-story__layout">
            <div className="pricewise-story__copy">
              <p className="eyebrow">
                {t('projects.detail.pricewiseStory.eyebrow')}
              </p>

              <h2>
                {t('projects.detail.pricewiseStory.title')}
              </h2>

              <p>
                {t('projects.detail.pricewiseStory.description')}
              </p>

              <ol className="pricewise-story__steps">
                {(['search', 'compare', 'list'] as const).map(
                  (step, index) => (
                    <li key={step}>
                      <strong>
                        {String(index + 1).padStart(2, '0')}
                      </strong>

                      <span>
                        {t(`projects.detail.pricewiseStory.${step}`)}
                      </span>
                    </li>
                  )
                )}
              </ol>
            </div>

            <div className="pricewise-story__visuals">
              <div className="pricewise-story__desktop">
                <ImageLightbox
                  src={`${import.meta.env.BASE_URL}assets/pricewise-app-results.webp`}
                  alt={t('projects.detail.pricewiseStory.resultsAlt')}
                />
              </div>

              <div className="pricewise-story__mobile">
                <ImageLightbox
                  src={`${import.meta.env.BASE_URL}assets/pricewise-app-mobile-list.webp`}
                  alt={t('projects.detail.pricewiseStory.listAlt')}
                />
              </div>
            </div>
          </div>
        </section>
      )}


      <section className="section">
        <div className="container detail-grid">
          <article>
            <p className="eyebrow">
              {t(
                'projects.detail.demonstratesEyebrow'
              )}
            </p>

            <h2>
              {t(
                'projects.detail.evidenceTitle'
              )}
            </h2>

            <ul className="bullet-list">
              {project.highlights.map(
                (highlight, index) => (
                  <li key={highlight}>
                    {t(
                      `${translationBase}.highlights.${index}`,
                      {
                        defaultValue:
                          highlight,
                      }
                    )}
                  </li>
                )
              )}
            </ul>
          </article>

          <article>
            <p className="eyebrow">
              {t(
                'projects.detail.architectureEyebrow'
              )}
            </p>

            <h2>
              {t(
                'projects.detail.structureTitle'
              )}
            </h2>

            {project.architecture ? (
              <ul className="bullet-list">
                {project.architecture.map(
                  (item, index) => (
                    <li key={item}>
                      {t(
                        `${translationBase}.architecture.${index}`,
                        {
                          defaultValue:
                            item,
                        }
                      )}
                    </li>
                  )
                )}
              </ul>
            ) : project.testing ? (
              <ul className="bullet-list">
                {project.testing.map(
                  (item, index) => (
                    <li key={item}>
                      {t(
                        `${translationBase}.testing.${index}`,
                        {
                          defaultValue:
                            item,
                        }
                      )}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p>
                {t(
                  'projects.detail.fallback'
                )}
              </p>
            )}
          </article>
        </div>
      </section>
      <section className="section project-detail-page__footer">
        <div className="container project-detail-page__footer-inner">
          <Link
            className="button button--ghost"
            to="/projects"
          >
            <ArrowLeft />
            {t('projects.detail.allProjects')}
          </Link>

          <a
            className="text-link"
            href="#top"
          >
            {t('projects.detail.backToTop', {
              defaultValue: 'Back to top',
            })}
          </a>
        </div>
      </section>
     </div>
  );
}