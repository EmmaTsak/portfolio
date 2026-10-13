import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Quote,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
import { TechArsenal } from '../components/TechArsenal';
import { EngineeringWorkflow } from '../components/EngineeringWorkflow';

export function HomePage() {
  const { t } = useTranslation();
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
      <section className="hero section hero--focus">
        <div className="container hero-grid hero-grid--focus">
          <div className="hero-copy hero-copy--focus">
            <p className="hero-focus__availability">
              <span aria-hidden="true" />
              {t('home.hero.availability')}
            </p>

            <p className="hero-focus__name">
              {t('names.fullName')}
            </p>

            <h1 className="hero-focus__title">
              {t('home.hero.headlineFirst')}
              <span>{t('home.hero.headlineSecond')}</span>
            </h1>

            <p className="hero-focus__lead">
              {t('home.hero.positioning')}
            </p>


            <div className="button-row hero-focus__actions">
              <a className="button button--primary" href="#projects">
                {t('home.hero.viewWork')}
                <ArrowRight aria-hidden="true" />
              </a>
              <Link className="button button--ghost" to="/resume">
                {t('home.hero.viewCv')}
              </Link>
            </div>

            <div className="hero-socials hero-focus__socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin aria-hidden="true" /> LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" /> {t('home.hero.email')}
              </a>
            </div>
          </div>

          <div className="hero-panel hero-panel--focus" aria-hidden="true">
            <ImmersiveHero />
          </div>
        </div>
      </section>

      <section className="home-strengths">
        <div className="container home-strengths__grid">
          {([
            ['01', 'fullStackTitle', 'fullStackDescription'],
            ['02', 'qualityTitle', 'qualityDescription'],
            ['03', 'uxTitle', 'uxDescription'],
          ] as const).map(([number, title, description]) => (
            <div className="home-strengths__item" key={number}>
              <span className="home-strengths__number">{number}</span>
              <div>
                <h2>{t(`home.about.${title}`)}</h2>
                <p>{t(`home.about.${description}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section
        className="section featured-work-stage"
        id="projects"
      >
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
            {featuredProjects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
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