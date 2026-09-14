import { ArrowLeft, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { SafeImage } from '../components/SafeImage';
import { NotFoundProject } from './NotFoundPage';
import { usePageMeta } from '../hooks/usePageMeta';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  usePageMeta({ title: project ? `${project.name} — Emmanouela Tsakalidou` : 'Project not found — Emmanouela Tsakalidou', description: project?.description || 'The requested project could not be found.', path: project ? `/projects/${project.slug}` : '/projects/missing' });
  if (!project) return <NotFoundProject />;
  return <section className="section page-top"><div className="container"><Link className="back-link" to="/projects"><ArrowLeft/>All projects</Link><div className="case-hero-grid compact"><div><p className="eyebrow">{project.eyebrow}</p><h1>{project.name}</h1><p className="case-lead">{project.description}</p><p className="project-role"><strong>Role:</strong> {project.role}</p><div className="tag-row">{project.tech.map((item) => <span className="tag" key={item}>{item}</span>)}</div><a className="button button--primary" href={project.github} target="_blank" rel="noreferrer"><Github/>View repository</a></div><div className="case-visual"><SafeImage src={`${import.meta.env.BASE_URL}${project.visual}`} alt={project.visualAlt}/><span className="visual-label">{project.visualLabel}</span></div></div><div className="detail-grid"><article><p className="eyebrow">What it demonstrates</p><h2>Engineering evidence</h2><ul className="bullet-list">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></article><article><p className="eyebrow">Architecture / quality</p><h2>How it is structured</h2>{project.architecture ? <ul className="bullet-list">{project.architecture.map((item) => <li key={item}>{item}</li>)}</ul> : project.testing ? <ul className="bullet-list">{project.testing.map((item) => <li key={item}>{item}</li>)}</ul> : <p>This project focuses primarily on backend implementation and data modelling. See the repository for source-level details.</p>}</article></div></div></section>;
}
