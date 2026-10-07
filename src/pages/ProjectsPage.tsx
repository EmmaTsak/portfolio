import {
  useMemo,
  useState,
} from 'react';
import { SearchX } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import {
  projects,
  type ProjectCategory,
} from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';

const filters: Array<'All' | ProjectCategory> = [
  'All',
  'Full Stack',
  'Backend',
  'Mobile',
  'Systems',
  'Automation',
  'QA / Testing',
  'UI/UX',
];

const filterTranslationKeys: Record<
  (typeof filters)[number],
  string
> = {
  All: 'all',
  'Full Stack': 'fullStack',
  Backend: 'backend',
  Mobile: 'mobile',
  Systems: 'systems',
  Automation: 'automation',
  'QA / Testing': 'qaTesting',
  'UI/UX': 'uiux',
};

export function ProjectsPage() {
  const { t } = useTranslation();

  usePageMeta({
    title: t('projects.page.metaTitle'),
    description: t(
      'projects.page.metaDescription'
    ),
    path: '/projects',
  });

  const [filter, setFilter] =
    useState<(typeof filters)[number]>('All');

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) =>
            project.categories.includes(filter)
          ),
    [filter]
  );

  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeading
          eyebrow={t('projects.page.eyebrow')}
          title={t('projects.page.title')}
          description={t(
            'projects.page.description'
          )}
        />

        <div
          className="filter-bar"
          role="group"
          aria-label={t(
            'projects.page.filterLabel'
          )}
        >
          {filters.map((item) => {
            const translationKey =
              filterTranslationKeys[item];

            return (
              <button
                className={
                  filter === item
                    ? 'is-active'
                    : ''
                }
                aria-pressed={
                  filter === item
                }
                key={item}
                onClick={() =>
                  setFilter(item)
                }
              >
                {t(
                  `projects.page.filters.${translationKey}`
                )}
              </button>
            );
          })}
        </div>

        {visible.length ? (
          <div className="project-grid">
            {visible.map((project) => (
              <ProjectCard
                project={project}
                key={project.slug}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <SearchX />

            <h2>
              {t(
                'projects.page.emptyTitle'
              )}
            </h2>

            <p>
              {t(
                'projects.page.emptyDescription'
              )}
            </p>

            <button
              className="button button--ghost"
              onClick={() =>
                setFilter('All')
              }
            >
              {t('projects.page.showAll')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}