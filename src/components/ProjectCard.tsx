import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { SafeImage } from './SafeImage';

export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <div className="project-card__visual"><SafeImage src={`${import.meta.env.BASE_URL}${project.visual}`} alt={project.visualAlt} /><span className="visual-label">{project.visualLabel}</span></div>
    <div className="project-card__body">
      <div className="project-meta"><span>{project.eyebrow}</span>{project.status && <span className="status-pill">{project.status}</span>}</div>
      <h3>{project.name}</h3><p>{project.description}</p>
      <div className="tag-row" aria-label="Technologies">{project.tech.slice(0, 5).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      <div className="project-card__actions"><Link className="text-link" to={`/projects/${project.slug}`}>View case study <ArrowUpRight /></Link><a className="icon-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}><Github /></a></div>
    </div>
  </article>;
}
