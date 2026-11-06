import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Container,
  GitBranch,
  HeartPulse,
  Package,
  Server,
  TestTube2,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { ImageLightbox } from './ImageLightbox';
import '../styles/pipelineforge-gallery.css';

const architecture = [
  {
    id: 'source',
    icon: GitBranch,
  },
  {
    id: 'jenkins',
    icon: Server,
  },
  {
    id: 'buildAgent',
    icon: TestTube2,
  },
  {
    id: 'dockerAgent',
    icon: Container,
  },
  {
    id: 'runtime',
    icon: HeartPulse,
  },
] as const;

const pipelineStages = [
  {
    id: 'checkout',
    number: '01',
    icon: GitBranch,
  },
  {
    id: 'verify',
    number: '02',
    icon: Server,
  },
  {
    id: 'compile',
    number: '03',
    icon: Package,
  },
  {
    id: 'test',
    number: '04',
    icon: TestTube2,
  },
  {
    id: 'package',
    number: '05',
    icon: Package,
  },
  {
    id: 'image',
    number: '06',
    icon: Container,
  },
  {
    id: 'smoke',
    number: '07',
    icon: HeartPulse,
  },
] as const;

const reliabilitySteps = [
  {
    id: 'failure',
    number: '01',
    icon: AlertTriangle,
  },
  {
    id: 'detection',
    number: '02',
    icon: HeartPulse,
  },
  {
    id: 'recovery',
    number: '03',
    icon: CheckCircle2,
  },
] as const;

const screenshots = [
  {
    file: 'pipelineforge-ci-success.png',
    id: 'success',
  },
  {
    file: 'pipelineforge-junit-results.png',
    id: 'tests',
  },
  {
    file: 'pipelineforge-smoke-test-failure.png',
    id: 'failure',
  },
] as const;

export function PipelineForgeGallery() {
  const { t } = useTranslation();

  return (
    <div className="pipelineforge-case-study">
      <section
        className="section pipelineforge-overview"
        aria-labelledby="pipelineforge-overview-heading"
      >
        <div className="container">
          <div className="pipelineforge-section-heading">
            <p className="eyebrow">
              {t(
                'projects.detail.pipelineforge.architecture.eyebrow'
              )}
            </p>

            <h2 id="pipelineforge-overview-heading">
              {t(
                'projects.detail.pipelineforge.architecture.title'
              )}
            </h2>

            <p>
              {t(
                'projects.detail.pipelineforge.architecture.description'
              )}
            </p>
          </div>

          <div className="pipelineforge-architecture">
            {architecture.map(
              (item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    className="pipelineforge-architecture__step"
                    key={item.id}
                  >
                    <div className="pipelineforge-architecture__node">
                      <span className="pipelineforge-architecture__icon">
                        <Icon
                          size={24}
                          strokeWidth={1.7}
                        />
                      </span>

                      <strong>
                        {t(
                          `projects.detail.pipelineforge.architecture.nodes.${item.id}.title`
                        )}
                      </strong>

                      <p>
                        {t(
                          `projects.detail.pipelineforge.architecture.nodes.${item.id}.description`
                        )}
                      </p>
                    </div>

                    {index <
                      architecture.length -
                        1 && (
                      <ArrowRight
                        className="pipelineforge-architecture__arrow"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      <section className="section section--soft pipelineforge-pipeline">
        <div className="container">
          <div className="pipelineforge-section-heading">
            <p className="eyebrow">
              {t(
                'projects.detail.pipelineforge.pipeline.eyebrow'
              )}
            </p>

            <h2>
              {t(
                'projects.detail.pipelineforge.pipeline.title'
              )}
            </h2>

            <p>
              {t(
                'projects.detail.pipelineforge.pipeline.description'
              )}
            </p>
          </div>

          <div className="pipelineforge-pipeline__grid">
            {pipelineStages.map(
              (stage) => {
                const Icon = stage.icon;

                return (
                  <article
                    className="pipelineforge-pipeline__stage"
                    key={stage.id}
                  >
                    <div className="pipelineforge-pipeline__top">
                      <span className="pipelineforge-pipeline__number">
                        {stage.number}
                      </span>

                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <h3>
                      {t(
                        `projects.detail.pipelineforge.pipeline.stages.${stage.id}.title`
                      )}
                    </h3>

                    <p>
                      {t(
                        `projects.detail.pipelineforge.pipeline.stages.${stage.id}.description`
                      )}
                    </p>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>

      <section className="section pipelineforge-reliability">
        <div className="container">
          <div className="pipelineforge-section-heading">
            <p className="eyebrow">
              {t(
                'projects.detail.pipelineforge.reliability.eyebrow'
              )}
            </p>

            <h2>
              {t(
                'projects.detail.pipelineforge.reliability.title'
              )}
            </h2>

            <p>
              {t(
                'projects.detail.pipelineforge.reliability.description'
              )}
            </p>
          </div>

          <div className="pipelineforge-reliability__flow">
            {reliabilitySteps.map(
              (step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    className="pipelineforge-reliability__step"
                    key={step.id}
                  >
                    <article className="pipelineforge-reliability__card">
                      <div className="pipelineforge-reliability__header">
                        <span>
                          {step.number}
                        </span>

                        <Icon
                          size={25}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <h3>
                        {t(
                          `projects.detail.pipelineforge.reliability.steps.${step.id}.title`
                        )}
                      </h3>

                      <p>
                        {t(
                          `projects.detail.pipelineforge.reliability.steps.${step.id}.description`
                        )}
                      </p>
                    </article>

                    {index <
                      reliabilitySteps.length -
                        1 && (
                      <ArrowRight
                        className="pipelineforge-reliability__arrow"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              }
            )}
          </div>

          <div className="pipelineforge-reliability__result">
            <CheckCircle2
              size={24}
              aria-hidden="true"
            />

            <div>
              <strong>
                {t(
                  'projects.detail.pipelineforge.reliability.resultTitle'
                )}
              </strong>

              <p>
                {t(
                  'projects.detail.pipelineforge.reliability.resultDescription'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section--soft pipelineforge-evidence"
        aria-labelledby="pipelineforge-evidence-heading"
      >
        <div className="container">
          <div className="pipelineforge-section-heading">
            <p className="eyebrow">
              {t(
                'projects.detail.pipelineforge.evidence.eyebrow'
              )}
            </p>

            <h2 id="pipelineforge-evidence-heading">
              {t(
                'projects.detail.pipelineforge.evidence.title'
              )}
            </h2>

            <p>
              {t(
                'projects.detail.pipelineforge.evidence.description'
              )}
            </p>
          </div>

          <div className="pipelineforge-evidence__grid">
            {screenshots.map(
              (shot) => (
                <figure
                  className="pipelineforge-evidence__card"
                  key={shot.file}
                >
                  <div className="pipelineforge-evidence__image">
                    <ImageLightbox
                      src={`${import.meta.env.BASE_URL}assets/${shot.file}`}
                      alt={t(
                        `projects.detail.pipelineforge.evidence.items.${shot.id}.alt`
                      )}
                    />
                  </div>

                  <figcaption className="pipelineforge-evidence__caption">
                    <strong>
                      {t(
                        `projects.detail.pipelineforge.evidence.items.${shot.id}.title`
                      )}
                    </strong>

                    <p>
                      {t(
                        `projects.detail.pipelineforge.evidence.items.${shot.id}.description`
                      )}
                    </p>
                  </figcaption>
                </figure>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}