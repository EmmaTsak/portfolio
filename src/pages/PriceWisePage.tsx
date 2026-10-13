import {
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Github,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ImageLightbox } from '../components/ImageLightbox';
import { usePageMeta } from '../hooks/usePageMeta';

const collectionStages = ['sources', 'scrapers', 'grouping', 'database', 'interface'] as const;
const refreshStages = ['cron', 'collection', 'cache', 'socket', 'refresh'] as const;

export function PriceWisePage() {
  const { t } = useTranslation();
  const s = (key: string) => t(`priceWisePage.scan.${key}`);

  usePageMeta({
    title: `PriceWise - ${t('names.fullName')}`,
    description: s('summary'),
    path: '/projects/pricewise',
  });

  return (
    <div id="top" className="pw-scan">
      <section className="section page-top pw-scan__hero">
        <div className="container">
          <Link to="/projects" className="back-link">
            <ArrowLeft size={17} />
            {t('projects.detail.allProjects')}
          </Link>

          <div className="pw-scan__hero-layout">
            <div>
              <p className="eyebrow">{s('eyebrow')}</p>
              <h1>PriceWise</h1>
              <p className="pw-scan__lead">{s('summary')}</p>
              <div className="pw-scan__research">
                <strong>39</strong><span>{s('participants')}</span>
                <strong>79.5%</strong><span>{s('comparison')}</span>
              </div>
              <div className="button-row">
                <a className="button button--primary"
                  href="https://pricewise-web-production.up.railway.app"
                  target="_blank" rel="noreferrer">
                  {s('demo')} <ArrowUpRight size={17} />
                </a>
                <a className="button button--ghost"
                  href="https://github.com/EmmaTsak/pricewise-app"
                  target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
                <Link className="button button--ghost"
                  to="/projects/pricewise/thesis">
                  <FileText size={17} /> {s('thesis')}
                </Link>
              </div>
            </div>
            <div className="pw-scan__hero-image">
              <ImageLightbox
                src={`${import.meta.env.BASE_URL}assets/pricewise-app-home.webp`}
                alt={s('homeAlt')}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section pw-scan__screens">
        <div className="container">
          <div className="pw-scan__heading">
            <h2>{s('screensTitle')}</h2>
            <p>{s('screensIntro')}</p>
          </div>
          <div className="pw-scan__gallery">
            {(['results', 'compare', 'mobile'] as const).map((kind) => (
              <figure key={kind}>
                <ImageLightbox
                  src={`${import.meta.env.BASE_URL}assets/pricewise-app-${kind === 'mobile' ? 'mobile-list' : kind}.webp`}
                  alt={s(`${kind}Alt`)}
                />
                <figcaption>{s(`${kind}Label`)}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft pw-scan__engineering">
        <div className="container">
          <div className="pw-scan__heading">
            <h2>{s('architectureTitle')}</h2>
            <p>{s('architectureIntro')}</p>
          </div>

          <figure className="pw-scan__diagram">
            <figcaption>{s('collectionTitle')}</figcaption>
            <ol className="pw-scan__pipeline">
              {collectionStages.map((stage, i) => (
                <li key={stage}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <strong>{s(`collection.${stage}`)}</strong>
                </li>
              ))}
            </ol>
          </figure>

          <figure className="pw-scan__diagram">
            <figcaption>{s('refreshTitle')}</figcaption>
            <ol className="pw-scan__pipeline">
              {refreshStages.map((stage, i) => (
                <li key={stage}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <strong>{s(`refresh.${stage}`)}</strong>
                </li>
              ))}
            </ol>
            <p className="pw-scan__note">{s('refreshNote')}</p>
          </figure>
        </div>
      </section>

      <section className="section pw-scan__takeaway">
        <div className="container pw-scan__takeaway-grid">
          <div>
            <p className="eyebrow">{s('decisionEyebrow')}</p>
            <h2>{s('decisionTitle')}</h2>
            <p>{s('decision')}</p>
          </div>
          <div>
            <p className="eyebrow">{s('testingEyebrow')}</p>
            <h2>{s('testingTitle')}</h2>
            <p>{s('testing')}</p>
          </div>
        </div>
      </section>

      <nav className="container pw-scan__footer" aria-label={s('pageNavigation')}>
        <Link className="button button--ghost" to="/projects">
          <ArrowLeft size={17} /> {t('projects.detail.allProjects')}
        </Link>
        <a className="button button--ghost" href="#top">
          {s('backToTop')} ↑
        </a>
      </nav>
    </div>
  );
}
