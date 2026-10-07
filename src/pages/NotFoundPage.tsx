import {
  FileQuestion,
  Github,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { profile } from '../data/profile';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFoundProject() {
  const { t } = useTranslation();

  return (
    <section className="state-page">
      <div className="state-card">
        <FileQuestion />

        <p className="eyebrow">
          {t(
            'notFound.project.eyebrow'
          )}
        </p>

        <h1>
          {t(
            'notFound.project.title'
          )}
        </h1>

        <p>
          {t(
            'notFound.project.description'
          )}
        </p>

        <div className="button-row">
          <Link
            className="button button--primary"
            to="/projects"
          >
            {t(
              'notFound.project.viewProjects'
            )}
          </Link>

          <Link
            className="button button--ghost"
            to="/"
          >
            {t(
              'notFound.project.backHome'
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function NotFoundPage() {
  const { t } = useTranslation();

  usePageMeta({
    title: t(
      'notFound.page.metaTitle'
    ),
    description: t(
      'notFound.page.metaDescription'
    ),
    path: '/404',
  });

  return (
    <section className="state-page">
      <div className="state-card">
        <FileQuestion />

        <p className="eyebrow">
          {t(
            'notFound.page.eyebrow'
          )}
        </p>

        <h1>
          {t(
            'notFound.page.title'
          )}
        </h1>

        <p>
          {t(
            'notFound.page.description'
          )}
        </p>

        <div className="button-row">
          <Link
            className="button button--primary"
            to="/"
          >
            {t(
              'notFound.page.backHome'
            )}
          </Link>

          <Link
            className="button button--ghost"
            to="/projects"
          >
            {t(
              'notFound.page.viewProjects'
            )}
          </Link>

          <a
            className="button button--ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github />
            GitHub
          </a>
        </div>

        <code className="route-code">
          GET {window.location.pathname} → 404
        </code>
      </div>
    </section>
  );
}