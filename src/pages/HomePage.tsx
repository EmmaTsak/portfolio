import {
  ArrowDownRight,
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
import { useState } from 'react';

import { AcademicCourseCard } from '../components/AcademicCourseCard';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { ExperienceExplorer } from '../components/ExperienceExplorer';

import { academicCourses } from '../data/coursework';
import { featuredProjects } from '../data/projects';
import { profile } from '../data/profile';

import { usePageMeta } from '../hooks/usePageMeta';

import { ImmersiveHero } from '../components/ImmersiveHero';
import { AboutTerminal } from '../components/AboutTerminal';
import { TechArsenal } from '../components/TechArsenal';
import { EngineeringWorkflow } from '../components/EngineeringWorkflow';

export function HomePage() {
  const { t } = useTranslation();
  const [activeFeaturedIndex, setActiveFeaturedIndex] =
    useState(0);

  const activeFeaturedProject =
    featuredProjects[activeFeaturedIndex];

  const name = t('names.fullName');

  usePageMeta({
    title: t('home.hero.metaTitle', {
      name,
    }),
    description: t(
      'home.hero.metaDescription'
    ),
    path: '/',
  });

  const featuredCourseNames = [
    'Advanced Programming',
    'Operating Systems & Network Programming',
    'Advanced Databases',
  ];

  const featuredCourses = academicCourses.filter((course) =>
    featuredCourseNames.includes(course.name)
  );

  const copyEmail = async () =>
    navigator.clipboard.writeText(profile.email);



  return (
    <div className="home-page">
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
              {t('names.firstName')}
              <br />
              <span>{t('names.lastName')}</span>
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
                {t('home.hero.email')}
              </a>
            </div>
          </div>

          <div
            className="hero-panel"
           aria-label={t(
              'home.hero.engineeringFocus'
            )}
          >
            <ImmersiveHero />

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

      <div className="container hero-journey-wrap">
        <a className="hero-journey" href="#about">
          <span className="hero-journey__eyebrow">
            {t('home.about.eyebrow')}
          </span>

          <span className="hero-journey__steps">
            <span>{t('home.hero.build')}</span>
            <span
              className="hero-journey__connector"
              aria-hidden="true"
            />
            <span>{t('home.hero.validate')}</span>
            <span
              className="hero-journey__connector"
              aria-hidden="true"
            />
            <span>{t('home.hero.design')}</span>
          </span>

          <span className="hero-journey__arrow">
            <ArrowDownRight aria-hidden="true" />
          </span>
        </a>
      </div>

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

              <AboutTerminal />
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
        className="section featured-work-stage"
        id="projects"
      >
        {activeFeaturedProject && (
          <div
            key={activeFeaturedProject.slug}
            className="featured-work-stage__background"
            aria-hidden="true"
          >
            <img
              src={`${import.meta.env.BASE_URL}${activeFeaturedProject.visual}`}
              alt=""
              loading="lazy"
            />
          </div>
        )}

        <div className="container featured-work-stage__content">
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
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug}>
                <div
                  className="featured-work-stage__card"
                  onMouseEnter={() => {
                    setActiveFeaturedIndex(index);
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              </Reveal>
            ))}
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

      <Reveal>
        <section className="section" id="workflow">
          <div className="container">
            <SectionHeading
              eyebrow={t('home.workflow.eyebrow')}
              title={t('home.workflow.title')}
              description={t('home.workflow.description')}
            />

            <EngineeringWorkflow />
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

          <Reveal>
            <ExperienceExplorer />
          </Reveal>
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
                “{t('home.recommendation.quote')}”
              </blockquote>

              <div className="recommendation-author">
                <strong>
                  {t('names.supervisor')}
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
            <div className="education-home__header">
              <div>
                <p className="eyebrow">
                  {t('home.education.eyebrow')}
                </p>

                <h2>
                  {t('home.education.title')}
                </h2>

                <h3 className="education-home__degree">
                  {t('home.education.essex.title')}
                </h3>

                <p className="education-home__institution">
                  {t('home.education.essex.institution')}
                </p>
              </div>

              <div className="education-home__grade">
                <strong>
                  {t('home.education.essex.grade')}
                </strong>

                <span>
                  {t('home.education.essex.usEquivalent')}
                </span>
              </div>
            </div>

            <div className="education-home__courses">
              {featuredCourses.map((course) => (
                <Reveal key={course.name}>
                  <AcademicCourseCard
                    course={course}
                  />
                </Reveal>
              ))}
            </div>

            <div className="section-cta">
              <Link
                className="button button--ghost"
                to="/education"
              >
                {t('home.coursework.seeAll', {
                  defaultValue:
                    'View full education & coursework',
                })}
                <ArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

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

          <Reveal>
            <TechArsenal />
          </Reveal>
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
    </div>
  );
}