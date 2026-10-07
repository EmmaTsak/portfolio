import {
  ArrowLeft,
  FileText,
  ExternalLink,
  Github,
  Layers3,
  Mail,
  Search,
  ShieldCheck,
  ShoppingCart,
  TestTube2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { SafeImage } from '../components/SafeImage';
import { usePageMeta } from '../hooks/usePageMeta';

export function PriceWisePage() {
  const { t } = useTranslation();

  const name = t('names.fullName');

  usePageMeta({
    title: t('priceWisePage.metaTitle', {
      name,
    }),
    description: t(
      'priceWisePage.metaDescription'
    ),
    path: '/projects/pricewise',
  });

  const research = [
    {
      value: '39',
      label: t(
        'priceWisePage.research.participantLabel'
      ),
    },
    {
      value: '79.5%',
      label: t(
        'priceWisePage.research.comparisonLabel'
      ),
    },
    {
      value: '84.6%',
      label: t(
        'priceWisePage.research.uiLabel'
      ),
    },
    {
      value: '64.1%',
      label: t(
        'priceWisePage.research.accuracyLabel'
      ),
    },
  ];

  const processSteps = [
    t('priceWisePage.ux.steps.research'),
    t('priceWisePage.ux.steps.requirements'),
    t('priceWisePage.ux.steps.personas'),
    t('priceWisePage.ux.steps.journey'),
    t('priceWisePage.ux.steps.figma'),
    t('priceWisePage.ux.steps.implementation'),
    t('priceWisePage.ux.steps.evaluation'),
    t('priceWisePage.ux.steps.iteration'),
  ];

  const challengeItems = [
    t('priceWisePage.challenges.items.0'),
    t('priceWisePage.challenges.items.1'),
    t('priceWisePage.challenges.items.2'),
    t('priceWisePage.challenges.items.3'),
    t('priceWisePage.challenges.items.4'),
  ];

  const nextIterationItems = [
    t('priceWisePage.nextIterations.items.0'),
    t('priceWisePage.nextIterations.items.1'),
    t('priceWisePage.nextIterations.items.2'),
    t('priceWisePage.nextIterations.items.3'),
    t('priceWisePage.nextIterations.items.4'),
  ];

  return (
    <>
      <section className="case-hero section page-top">
        <div className="container">
          <Link
            className="back-link"
            to="/projects"
          >
            <ArrowLeft />
            {t('priceWisePage.back')}
          </Link>

          <div className="case-hero-grid">
            <div>
              <p className="eyebrow">
                {t(
                  'priceWisePage.hero.eyebrow'
                )}
              </p>

              <h1>PriceWise</h1>

              <p className="case-lead">
                {t(
                  'priceWisePage.hero.description'
                )}
              </p>

              <div className="tag-row">
                <span className="tag">
                  Full Stack
                </span>
                <span className="tag">
                  Research
                </span>
                <span className="tag">
                  UI/UX
                </span>
                <span className="tag">
                  Manual Testing
                </span>
              </div>

              <div className="button-row">
                <a
                  className="button button--primary"
                  href="https://pricewise-web-production.up.railway.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink />
                  {t(
                    'priceWisePage.hero.liveDemo'
                  )}
                </a>

                <a
                  className="button button--ghost"
                  href="https://github.com/EmmaTsak/pricewise-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                  {t(
                    'priceWisePage.hero.repository'
                  )}
                </a>

                <Link
                  className="button button--ghost"
                  to="/projects/pricewise/thesis"
                >
                  <FileText />
                  {t(
                    'priceWisePage.hero.thesis'
                  )}
                </Link>
              </div>
            </div>

            <div className="case-visual">
              <SafeImage
                src={`${import.meta.env.BASE_URL}assets/pricewise-app-home.webp`}
                alt={t(
                  'priceWisePage.hero.visualAlt'
                )}
              />

              <span className="visual-label">
                {t(
                  'priceWisePage.hero.visualLabel'
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="case-section-head">
            <p className="eyebrow">
              {t(
                'priceWisePage.research.eyebrow'
              )}
            </p>

            <h2>
              {t(
                'priceWisePage.research.title'
              )}
            </h2>

            <p>
              {t(
                'priceWisePage.research.description'
              )}
            </p>
          </div>

          <div className="research-grid">
            {research.map((item) => (
              <div
                className="stat-card"
                key={item.value}
              >
                <strong>
                  {item.value}
                </strong>

                <span>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="case-section-head">
            <p className="eyebrow">
              {t(
                'priceWisePage.ux.eyebrow'
              )}
            </p>

            <h2>
              {t('priceWisePage.ux.title')}
            </h2>

            <p>
              {t(
                'priceWisePage.ux.description'
              )}
            </p>
          </div>

          <div
            className="process-flow"
            aria-label={t(
              'priceWisePage.ux.processLabel'
            )}
          >
            {processSteps.map(
              (step, index) => (
                <div key={step}>
                  <span>
                    {String(
                      index + 1
                    ).padStart(2, '0')}
                  </span>

                  <strong>
                    {step}
                  </strong>
                </div>
              )
            )}
          </div>

          <div className="persona-grid">
            <article>
              <span>
                {t(
                  'priceWisePage.ux.personas.giorgosLabel'
                )}
              </span>

              <h3>
                {t(
                  'priceWisePage.ux.personas.giorgosTitle'
                )}
              </h3>

              <p>
                {t(
                  'priceWisePage.ux.personas.giorgosDescription'
                )}
              </p>
            </article>

            <article>
              <span>
                {t(
                  'priceWisePage.ux.personas.mariaLabel'
                )}
              </span>

              <h3>
                {t(
                  'priceWisePage.ux.personas.mariaTitle'
                )}
              </h3>

              <p>
                {t(
                  'priceWisePage.ux.personas.mariaDescription'
                )}
              </p>
            </article>

            <article>
              <span>
                {t(
                  'priceWisePage.ux.personas.nikosLabel'
                )}
              </span>

              <h3>
                {t(
                  'priceWisePage.ux.personas.nikosTitle'
                )}
              </h3>

              <p>
                {t(
                  'priceWisePage.ux.personas.nikosDescription'
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="case-section-head">
            <p className="eyebrow">
              {t(
                'priceWisePage.implementation.eyebrow'
              )}
            </p>

            <h2>
              {t(
                'priceWisePage.implementation.title'
              )}
            </h2>

            <p>
              {t(
                'priceWisePage.implementation.description'
              )}
            </p>
          </div>

          <div className="implementation-gallery">
            <figure>
              <SafeImage
                src={`${import.meta.env.BASE_URL}assets/pricewise-app-home.webp`}
                alt={t(
                  'priceWisePage.implementation.homeAlt'
                )}
              />

              <figcaption>
                {t(
                  'priceWisePage.implementation.homeCaption'
                )}
              </figcaption>
            </figure>

            <figure>
              <SafeImage
                src={`${import.meta.env.BASE_URL}assets/pricewise-app-results.webp`}
                alt={t(
                  'priceWisePage.implementation.resultsAlt'
                )}
              />

              <figcaption>
                {t(
                  'priceWisePage.implementation.resultsCaption'
                )}
              </figcaption>
            </figure>

            <figure>
              <SafeImage
                src={`${import.meta.env.BASE_URL}assets/pricewise-app-compare.webp`}
                alt={t(
                  'priceWisePage.implementation.compareAlt'
                )}
              />

              <figcaption>
                {t(
                  'priceWisePage.implementation.compareCaption'
                )}
              </figcaption>
            </figure>

            <figure>
              <SafeImage
                src={`${import.meta.env.BASE_URL}assets/pricewise-app-list.webp`}
                alt={t(
                  'priceWisePage.implementation.listAlt'
                )}
              />

              <figcaption>
                {t(
                  'priceWisePage.implementation.listCaption'
                )}
              </figcaption>
            </figure>

            <figure className="implementation-gallery__mobile">
              <SafeImage
                src={`${import.meta.env.BASE_URL}assets/pricewise-app-mobile-list.webp`}
                alt={t(
                  'priceWisePage.implementation.mobileAlt'
                )}
              />

              <figcaption>
                {t(
                  'priceWisePage.implementation.mobileCaption'
                )}
              </figcaption>
            </figure>

            <figure>
              <SafeImage
                src={`${import.meta.env.BASE_URL}assets/pricewise-app-privacy.webp`}
                alt={t(
                  'priceWisePage.implementation.privacyAlt'
                )}
              />

              <figcaption>
                {t(
                  'priceWisePage.implementation.privacyCaption'
                )}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="case-section-head">
            <p className="eyebrow">
              {t(
                'priceWisePage.designEvolution.eyebrow'
              )}
            </p>

            <h2>
              {t(
                'priceWisePage.designEvolution.title'
              )}
            </h2>

            <p>
              {t(
                'priceWisePage.designEvolution.description'
              )}
            </p>
          </div>

          <div className="mockup-gallery">
            <figure>
              <SafeImage
                src={`${import.meta.env.BASE_URL}assets/pricewise-home.webp`}
                alt={t(
                  'priceWisePage.designEvolution.homeAlt'
                )}
              />

              <figcaption>
                {t(
                  'priceWisePage.designEvolution.homeCaption'
                )}
              </figcaption>
            </figure>

            <figure>
              <SafeImage
                src={`${import.meta.env.BASE_URL}assets/pricewise-search.webp`}
                alt={t(
                  'priceWisePage.designEvolution.searchAlt'
                )}
              />

              <figcaption>
                {t(
                  'priceWisePage.designEvolution.searchCaption'
                )}
              </figcaption>
            </figure>

            <figure>
              <SafeImage
                src={`${import.meta.env.BASE_URL}assets/pricewise-list.webp`}
                alt={t(
                  'priceWisePage.designEvolution.listAlt'
                )}
              />

              <figcaption>
                {t(
                  'priceWisePage.designEvolution.listCaption'
                )}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="case-section-head">
            <p className="eyebrow">
              {t(
                'priceWisePage.architecture.eyebrow'
              )}
            </p>

            <h2>
              {t(
                'priceWisePage.architecture.title'
              )}
            </h2>
          </div>

          <div className="architecture">
            <div>
              <span>
                {t(
                  'priceWisePage.architecture.client'
                )}
              </span>

              <strong>
                React + TypeScript + Vite
              </strong>

              <small>
                {t(
                  'priceWisePage.architecture.clientDetails'
                )}
              </small>
            </div>

            <b>→</b>

            <div>
              <span>
                {t(
                  'priceWisePage.architecture.api'
                )}
              </span>

              <strong>
                Node.js + Express + TypeScript
              </strong>

              <small>
                {t(
                  'priceWisePage.architecture.apiDetails'
                )}
              </small>
            </div>

            <b>→</b>

            <div>
              <span>
                {t(
                  'priceWisePage.architecture.data'
                )}
              </span>

              <strong>
                PostgreSQL + Prisma
              </strong>

              <small>
                {t(
                  'priceWisePage.architecture.dataDetails'
                )}
              </small>
            </div>
          </div>

          <div className="architecture secondary">
            <div>
              <span>
                {t(
                  'priceWisePage.architecture.collection'
                )}
              </span>

              <strong>
                Playwright · Cheerio · Axios
              </strong>

              <small>
                {t(
                  'priceWisePage.architecture.collectionDetails'
                )}
              </small>
            </div>

            <b>→</b>

            <div>
              <span>
                {t(
                  'priceWisePage.architecture.schedule'
                )}
              </span>

              <strong>
                node-cron
              </strong>

              <small>
                {t(
                  'priceWisePage.architecture.scheduleDetails'
                )}
              </small>
            </div>

            <b>→</b>

            <div>
              <span>
                {t(
                  'priceWisePage.architecture.uiRefresh'
                )}
              </span>

              <strong>
                Socket.IO events
              </strong>

              <small>
                {t(
                  'priceWisePage.architecture.uiRefreshDetails'
                )}
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="case-section-head">
            <p className="eyebrow">
              {t(
                'priceWisePage.features.eyebrow'
              )}
            </p>

            <h2>
              {t(
                'priceWisePage.features.title'
              )}
            </h2>
          </div>

          <div className="feature-grid">
            <article>
              <Search />

              <h3>
                {t(
                  'priceWisePage.features.searchTitle'
                )}
              </h3>

              <p>
                {t(
                  'priceWisePage.features.searchDescription'
                )}
              </p>
            </article>

            <article>
              <ShoppingCart />

              <h3>
                {t(
                  'priceWisePage.features.listTitle'
                )}
              </h3>

              <p>
                {t(
                  'priceWisePage.features.listDescription'
                )}
              </p>
            </article>

            <article>
              <Layers3 />

              <h3>
                {t(
                  'priceWisePage.features.collectionTitle'
                )}
              </h3>

              <p>
                {t(
                  'priceWisePage.features.collectionDescription'
                )}
              </p>
            </article>

            <article>
              <ShieldCheck />

              <h3>
                {t(
                  'priceWisePage.features.privacyTitle'
                )}
              </h3>

              <p>
                {t(
                  'priceWisePage.features.privacyDescription'
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column-case">
          <div>
            <p className="eyebrow">
              {t(
                'priceWisePage.quality.eyebrow'
              )}
            </p>

            <h2>
              {t(
                'priceWisePage.quality.title'
              )}
            </h2>

            <p>
              {t(
                'priceWisePage.quality.description'
              )}
            </p>

            <ul className="check-list">
              <li>
                <TestTube2 />
                {t(
                  'priceWisePage.quality.checks.frontend'
                )}
              </li>

              <li>
                <TestTube2 />
                {t(
                  'priceWisePage.quality.checks.list'
                )}
              </li>

              <li>
                <TestTube2 />
                {t(
                  'priceWisePage.quality.checks.email'
                )}
              </li>

              <li>
                <TestTube2 />
                {t(
                  'priceWisePage.quality.checks.filtering'
                )}
              </li>

              <li>
                <TestTube2 />
                {t(
                  'priceWisePage.quality.checks.backend'
                )}
              </li>

              <li>
                <TestTube2 />
                {t(
                  'priceWisePage.quality.checks.errors'
                )}
              </li>
            </ul>
          </div>

          <div className="callout-card">
            <span>
              {t(
                'priceWisePage.quality.futureLabel'
              )}
            </span>

            <h3>
              {t(
                'priceWisePage.quality.futureTitle'
              )}
            </h3>

            <p>
              {t(
                'priceWisePage.quality.futureDescription'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container two-column-case">
          <div>
            <p className="eyebrow">
              {t(
                'priceWisePage.challenges.eyebrow'
              )}
            </p>

            <h2>
              {t(
                'priceWisePage.challenges.title'
              )}
            </h2>

            <ul className="bullet-list">
              {challengeItems.map(
                (item) => (
                  <li key={item}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="eyebrow">
              {t(
                'priceWisePage.nextIterations.eyebrow'
              )}
            </p>

            <h2>
              {t(
                'priceWisePage.nextIterations.title'
              )}
            </h2>

            <ul className="bullet-list">
              {nextIterationItems.map(
                (item) => (
                  <li key={item}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container two-column-case">
          <div>
            <p className="eyebrow">
              {t(
                'priceWisePage.thesis.eyebrow'
              )}
            </p>

            <h2>
              {t(
                'priceWisePage.thesis.title'
              )}
            </h2>

            <p>
              {t(
                'priceWisePage.thesis.description'
              )}
            </p>
          </div>

          <div className="callout-card">
            <span>
              {t(
                'priceWisePage.thesis.label'
              )}
            </span>

            <h3>
              {t(
                'priceWisePage.thesis.cardTitle'
              )}
            </h3>

            <p>
              {t(
                'priceWisePage.thesis.cardDescription'
              )}
            </p>

            <Link
              className="button button--primary"
              to="/projects/pricewise/thesis"
            >
              <FileText />
              {t(
                'priceWisePage.thesis.button'
              )}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-card">
          <div>
            <p className="eyebrow">
              {t(
                'priceWisePage.code.eyebrow'
              )}
            </p>

            <h2>
              {t(
                'priceWisePage.code.title'
              )}
            </h2>

            <p>
              {t(
                'priceWisePage.code.description'
              )}
            </p>
          </div>

          <div className="contact-actions">
            <a
              className="button button--primary"
              href="https://github.com/EmmaTsak/pricewise-app"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
              {t(
                'priceWisePage.code.repository'
              )}
            </a>

            <a
              className="button button--ghost"
              href="mailto:tsakalidouemmanouela@gmail.com"
            >
              <Mail />
              {t(
                'priceWisePage.code.contact'
              )}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}