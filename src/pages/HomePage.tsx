import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Github,
  Linkedin,
  Mail,
  Palette,
  Quote,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AcademicCourseCard } from '../components/AcademicCourseCard';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

import { academicCourses } from '../data/coursework';
import { featuredProjects } from '../data/projects';
import {
  profile,
  skillGroups,
} from '../data/profile';

import { usePageMeta } from '../hooks/usePageMeta';

const skillGroupTranslationKeys: Record<string, string> = {
  Development: 'development',
  'Frontend & Mobile': 'frontendMobile',
  'Backend & APIs': 'backendApis',
  'Testing & Quality': 'testingQuality',
  Data: 'data',
  'Tools & Design': 'toolsDesign',
};

export function HomePage() {
  const { t } = useTranslation();

  usePageMeta({
    title: 'Emmanouela Tsakalidou | Portfolio',
    description: profile.positioning,
    path: '/',
  });

  const copyEmail = async () =>
    navigator.clipboard.writeText(profile.email);

  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="availability">
              <span />
              {t('home.hero.availability')}
            </p>

            <p className="eyebrow">
              {t('home.hero.role')}
            </p>

            <h1>
              Emmanouela
              <br />
              <span>Tsakalidou</span>
            </h1>

            <p className="hero-lead">
              {t('home.hero.positioning')}
            </p>

            <div className="discipline-line">
              <strong>
                {t('home.hero.softwareDevelopment')}
              </strong>

              <span>
                {t('home.hero.qualityEngineering')}
              </span>

              <span>{t('home.hero.uiux')}</span>
            </div>

            <div className="button-row">
              <a
                className="button button--primary"
                href="#projects"
              >
                {t('home.hero.viewWork')}
                <ArrowRight />
              </a>

              <Link
                className="button button--ghost"
                to="/resume"
              >
                {t('home.hero.viewCv')}
              </Link>
            </div>

            <div className="hero-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github />
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
                LinkedIn
              </a>

              <a href={`mailto:${profile.email}`}>
                <Mail />
                Email
              </a>
            </div>
          </div>

          <div
            className="hero-panel"
            aria-label="Engineering focus"
          >
            <div className="code-card">
              <div className="code-card__top">
                <span />
                <span />
                <span />
              </div>

              <code>
                <span className="code-line">
                  <span className="code-muted">
                    const
                  </span>{' '}
                  developer = {'{'}
                </span>

                <span className="code-line code-line--indent">
                  <span>focus:</span>{' '}
                  <em>'reliable software'</em>,
                </span>

                <span className="code-line code-line--indent">
                  <span>strengths:</span> [
                  <em>'full stack'</em>,{' '}
                  <em>'testing'</em>,{' '}
                  <em>'UX'</em>],
                </span>

                <span className="code-line code-line--indent">
                  <span>mindset:</span>{' '}
                  <em>
                    'build → validate → improve'
                  </em>
                </span>

                <span className="code-line">
                  {'}'};
                </span>
              </code>
            </div>

            <div className="hero-mini-grid">
              <div>
                <TerminalSquare />
                <strong>
                  {t('home.hero.build')}
                </strong>
                <span>
                  {t('home.hero.buildDescription')}
                </span>
              </div>

              <div>
                <ShieldCheck />
                <strong>
                  {t('home.hero.validate')}
                </strong>
                <span>
                  {t('home.hero.validateDescription')}
                </span>
              </div>

              <div>
                <Palette />
                <strong>
                  {t('home.hero.design')}
                </strong>
                <span>
                  {t('home.hero.designDescription')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section
          className="section section--soft"
          id="about"
        >
          <div className="container split-intro">
            <div className="about-intro">
              <SectionHeading
                eyebrow={t('home.about.eyebrow')}
                title={t('home.about.title')}
                description={t(
                  'home.about.description'
                )}
              />

              <p className="about-relocation">
                {t('home.about.relocation')}
              </p>
            </div>

            <div className="fact-grid">
              <div>
                <span>01</span>
                <strong>
                  {t('home.about.fullStackTitle')}
                </strong>
                <p>
                  {t(
                    'home.about.fullStackDescription'
                  )}
                </p>
              </div>

              <div>
                <span>02</span>
                <strong>
                  {t('home.about.qualityTitle')}
                </strong>
                <p>
                  {t(
                    'home.about.qualityDescription'
                  )}
                </p>
              </div>

              <div>
                <span>03</span>
                <strong>
                  {t('home.about.uxTitle')}
                </strong>
                <p>
                  {t('home.about.uxDescription')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <section
        className="section"
        id="projects"
      >
        <div className="container">
          <SectionHeading
            eyebrow={t(
              'home.selectedWork.eyebrow'
            )}
            title={t(
              'home.selectedWork.title'
            )}
            description={t(
              'home.selectedWork.description'
            )}
          />

          <div className="project-grid">
            {featuredProjects.map(
              (project) => (
                <Reveal key={project.slug}>
                  <ProjectCard
                    project={project}
                  />
                </Reveal>
              )
            )}
          </div>

          <div className="section-cta">
            <Link
              className="button button--ghost"
              to="/projects"
            >
              {t('home.selectedWork.seeAll')}
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section quality-section">
          <div className="container quality-grid">
            <div>
              <p className="eyebrow">
                {t('home.quality.eyebrow')}
              </p>

              <h2>
                {t('home.quality.title')}
              </h2>

              <p>
                {t('home.quality.description')}
              </p>
            </div>

            <div className="quality-list">
              <div>
                <ClipboardCheck />

                <span>
                  <strong>
                    {t(
                      'home.quality.testingTitle'
                    )}
                  </strong>

                  {t(
                    'home.quality.testingDescription'
                  )}
                </span>
              </div>

              <div>
                <ShieldCheck />

                <span>
                  <strong>
                    {t(
                      'home.quality.investigationTitle'
                    )}
                  </strong>

                  {t(
                    'home.quality.investigationDescription'
                  )}
                </span>
              </div>

              <div>
                <CheckCircle2 />

                <span>
                  <strong>
                    {t(
                      'home.quality.releaseTitle'
                    )}
                  </strong>

                  {t(
                    'home.quality.releaseDescription'
                  )}
                </span>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <section
        className="section"
        id="experience"
      >
        <div className="container">
          <SectionHeading
            eyebrow={t('home.experience.eyebrow')}
            title={t('home.experience.title')}
          />

          <div className="timeline">
            <Reveal>
              <article className="timeline-item">
                <div className="timeline-period">
                  {t('home.experience.period')}
                </div>

                <div>
                  <h3>
                    {t('home.experience.role')}
                  </h3>

                  <p className="timeline-company">
                    {t('home.experience.company')}
                  </p>

                  <ul>
                    <li>
                      {t('home.experience.point1')}
                    </li>

                    <li>
                      {t('home.experience.point2')}
                    </li>

                    <li>
                      {t('home.experience.point3')}
                    </li>

                    <li>
                      {t('home.experience.point4')}
                    </li>
                  </ul>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal>
        <section
          className="section section--soft"
          id="recommendation"
        >
          <div className="container">
            <SectionHeading
              eyebrow={t(
                'home.recommendation.eyebrow'
              )}
              title={t(
                'home.recommendation.title'
              )}
              description={t(
                'home.recommendation.description'
              )}
            />

            <article className="recommendation-card">
              <Quote className="recommendation-icon" />

              <blockquote className="recommendation-quote">
                “Her strong work ethic and willingness to
                support the team made her a valued member
                of our organization.”
              </blockquote>

              <div className="recommendation-author">
                <strong>
                  Dimitris Ampelakiotis
                </strong>

                <span>
                  {t(
                    'home.recommendation.authorRole'
                  )}
                </span>
              </div>

              <p className="recommendation-context">
                {t('home.recommendation.context')}
              </p>

              <Link
                className="button button--ghost"
                to="/recommendation"
              >
                <FileText />

                {t('home.recommendation.button')}
              </Link>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section
          className="section section--soft"
          id="education"
        >
          <div className="container">
            <SectionHeading
              eyebrow={t('home.education.eyebrow')}
              title={t('home.education.title')}
            />

            <div className="education-grid">
              <article>
                <span>
                  {t('home.education.essex.period')}
                </span>

                <h3>
                  {t('home.education.essex.title')}
                </h3>

                <p>
                  {t(
                    'home.education.essex.institution'
                  )}
                </p>

                <p>
                  {t(
                    'home.education.essex.description'
                  )}
                </p>
              </article>

              <article>
                <span>
                  {t('home.education.omiros.period')}
                </span>

                <h3>
                  {t('home.education.omiros.title')}
                </h3>

                <p>
                  {t(
                    'home.education.omiros.institution'
                  )}
                </p>

                <p>
                  {t(
                    'home.education.omiros.description'
                  )}
                </p>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <section
        className="section"
        id="coursework"
      >
        <div className="container">
          <SectionHeading
            eyebrow={t('home.coursework.eyebrow')}
            title={t('home.coursework.title')}
            description={t(
              'home.coursework.description'
            )}
          />

          <div className="course-grid">
            {academicCourses.map((course) => (
              <Reveal key={course.name}>
                <AcademicCourseCard
                  course={course}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        id="skills"
      >
        <div className="container">
          <SectionHeading
            eyebrow={t('home.skills.eyebrow')}
            title={t('home.skills.title')}
            description={t(
              'home.skills.description'
            )}
          />

          <div className="skills-grid">
            {skillGroups.map((group) => {
              const translationKey =
                skillGroupTranslationKeys[group.title];

              return (
                <Reveal key={group.title}>
                  <article className="skill-card">
                    <h3>
                      {t(
                        `home.skills.groups.${translationKey}`,
                        {
                          defaultValue: group.title,
                        }
                      )}
                    </h3>

                    <div className="tag-row">
                      {group.items.map((item) => (
                        <span
                          className="tag"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="section"
        id="contact"
      >
        <div className="container contact-card">
          <div className="contact-profile">
            <img
              src={`${import.meta.env.BASE_URL}assets/136719701.jpg`}
              alt={t('home.contact.portraitAlt')}
            />

            <div>
              <p className="eyebrow">
                {t('home.contact.eyebrow')}
              </p>

              <h2>
                {t('home.contact.title')}
              </h2>

              <p>
                {t('home.contact.description')}
              </p>

              <a
                className="contact-email"
                href={`mailto:${profile.email}`}
              >
                <Mail />
                {profile.email}
              </a>
            </div>
          </div>

          <div className="contact-actions">
            <a
              className="button button--primary"
              href={`mailto:${profile.email}`}
            >
              <Mail />
              {t('home.contact.emailMe')}
            </a>

            <button
              className="button button--ghost"
              onClick={copyEmail}
            >
              {t('home.contact.copyEmail')}
            </button>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}