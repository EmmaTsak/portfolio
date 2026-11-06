import { ImageLightbox } from './ImageLightbox';
import '../styles/pipelineforge-gallery.css';

const screenshots = [
  {
    file: 'pipelineforge-ci-success.png',
    title: 'Early CI pipeline — successful build',
    description:
      'Jenkins build #5 completed checkout, environment checks, compilation, unit tests and JAR packaging.',
    alt: 'Jenkins build number 5 with successful green stages for checkout, verification, compile, unit tests, package and post actions.',
  },
  {
    file: 'pipelineforge-junit-results.png',
    title: 'Automated test evidence — 6 of 6 passed',
    description:
      'Gradle test results show six tests passing across the application, controller and service suites.',
    alt: 'Gradle test report showing six tests, zero failures, zero skipped and a 100 percent success rate.',
  },
  {
    file: 'pipelineforge-smoke-test-failure.png',
    title: 'Deliberate smoke-test failure',
    description:
      'A controlled health-endpoint misconfiguration was correctly rejected by the Jenkins container smoke-test quality gate.',
    alt: 'Jenkins build number 9: Java, tests, packaging and Docker image stages pass while the smoke-test stage fails after the Actuator health endpoint was deliberately excluded.',
  },
];

export function PipelineForgeGallery() {
  return (
    <section className="section section--soft pipelineforge-evidence" aria-labelledby="pipelineforge-evidence-heading">
      <div className="container">
        <p className="eyebrow">Verified engineering evidence</p>
        <h2 id="pipelineforge-evidence-heading">Build, test and recovery</h2>
        <p className="pipelineforge-evidence__intro">
          Actual screenshots from my local PipelineForge CI environment. The failing run was intentionally induced to verify that the release quality gate blocks an unhealthy container.
        </p>

        <div className="pipelineforge-evidence__grid">
          {screenshots.map((shot) => (
            <figure className="pipelineforge-evidence__card" key={shot.file}>
              <div className="pipelineforge-evidence__image">
                <ImageLightbox
                  src={`${import.meta.env.BASE_URL}assets/${shot.file}`}
                  alt={shot.alt}
                />
              </div>
              <figcaption className="pipelineforge-evidence__caption">
                <strong>{shot.title}</strong>
                <p>{shot.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
