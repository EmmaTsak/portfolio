
import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Code2,
  FlaskConical,
  Rocket,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { projects } from '../data/projects';

const stages = [
  {
    id: 'build',
    label: 'Build',
    icon: Code2,
    slug: 'pricewise',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'test',
    label: 'Test',
    icon: FlaskConical,
    slug: 'jenkins-ci-reliability-lab',
    tech: ['Jest', 'pytest', 'Ruff'],
  },
  {
    id: 'deploy',
    label: 'Deploy',
    icon: Rocket,
    slug: 'pricewise',
    tech: ['Railway', 'Jenkins', 'Build artifacts'],
  },
  {
    id: 'monitor',
    label: 'Monitor',
    icon: Activity,
    slug: 'jenkins-ci-reliability-lab',
    tech: ['Jenkins REST API', 'Python', 'CI monitoring'],
  },
] as const;

export function EngineeringWorkflow() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const active = stages[activeIndex] ?? stages[0];
  const ActiveIcon = active.icon;

  const project = projects.find(
    (item) => item.slug === active.slug
  );

  return (
    <div className="engineering-workflow">
      <div className="engineering-workflow__stages">
        {stages.map((stage, index) => {
          const Icon = stage.icon;

          return (
            <button
              key={stage.id}
              type="button"
              className={
                index === activeIndex
                  ? 'engineering-workflow__stage is-active'
                  : 'engineering-workflow__stage'
              }
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
            >
              <span className="engineering-workflow__number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <Icon size={24} aria-hidden="true" />

              <strong>{stage.label}</strong>
            </button>
          );
        })}
      </div>

      <div
        className="engineering-workflow__progress"
        aria-hidden="true"
      >
        <span
          style={{
            width: `${((activeIndex + 1) / stages.length) * 100}%`,
          }}
        />
      </div>

      <div
        className="engineering-workflow__panel"
        key={active.id}
      >
        <div className="engineering-workflow__copy">
          <span className="engineering-workflow__eyebrow">
            {active.label}
            {' · '}
            {String(activeIndex + 1).padStart(2, '0')}
          </span>

          <h3>
            {t(`home.workflow.stages.${active.id}.title`)}
          </h3>

          <p>
            {t(`home.workflow.stages.${active.id}.description`)}
          </p>

          <div className="engineering-workflow__tech">
            {active.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="engineering-workflow__evidence">
          <div className="engineering-workflow__evidence-icon">
            <ActiveIcon size={36} strokeWidth={1.5} />
          </div>

          <span className="engineering-workflow__evidence-label">
            {t('home.workflow.evidence')}
          </span>

          <strong>{project?.name ?? active.label}</strong>

          <Link
            to={`/projects/${active.slug}`}
            className="engineering-workflow__link"
          >
            {t('home.workflow.viewProject')}
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
