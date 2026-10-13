
import { useState } from 'react';
import {
  ArrowRight,
  Bug,
  Code2,
  FlaskConical,
  Smartphone,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const highlights = [
  {
    label: 'Agile',
    icon: Code2,
    point: 'point1',
  },
  {
    label: 'Jest',
    icon: FlaskConical,
    point: 'point2',
  },
  {
    label: 'Debugging',
    icon: Bug,
    point: 'point3',
  },
  {
    label: 'React Native',
    icon: Smartphone,
    point: 'point4',
  },
] as const;

export function ExperienceExplorer() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const active = highlights[activeIndex] ?? highlights[0];

  return (
    <div className="experience-explorer">
      <div className="experience-explorer__profile">
        <span className="experience-explorer__period">
          {t('home.experience.period')}
        </span>

        <h3>{t('home.experience.role')}</h3>

        <p className="experience-explorer__company">
          {t('home.experience.company')}
        </p>

        <div
          className="experience-explorer__track"
          aria-hidden="true"
        >
          <span>01</span>
          <div />
          <span>04</span>
        </div>

        <a
          className="experience-explorer__recommendation"
          href="#recommendation"
        >
          {t('home.recommendation.eyebrow')}
          <ArrowRight size={17} />
        </a>
      </div>

      <div className="experience-explorer__details">
        <div className="experience-explorer__selector">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <button
                key={highlight.point}
                type="button"
                className={
                  index === activeIndex
                    ? 'experience-explorer__option is-active'
                    : 'experience-explorer__option'
                }
                onClick={() => setActiveIndex(index)}
                aria-pressed={index === activeIndex}
              >
                <Icon size={21} aria-hidden="true" />

                <span>{highlight.label}</span>

                <small>
                  {String(index + 1).padStart(2, '0')}
                </small>
              </button>
            );
          })}
        </div>

        <div
          className="experience-explorer__panel"
          key={active.point}
        >
          <span className="experience-explorer__panel-count">
            {String(activeIndex + 1).padStart(2, '0')}
            {' / '}
            {String(highlights.length).padStart(2, '0')}
          </span>

          <h4>{active.label}</h4>

          <p>
            {t(`home.experience.${active.point}`)}
          </p>
        </div>
      </div>
    </div>
  );
}
