import { useMemo, useState } from 'react';
import { SearchX } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { projects, type ProjectCategory } from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';

const filters: Array<'All' | ProjectCategory> = ['All', 'Full Stack', 'Backend', 'Mobile', 'Systems', 'Automation', 'QA / Testing', 'UI/UX'];

export function ProjectsPage() {
  usePageMeta({ title: 'Projects — Emmanouela Tsakalidou', description: 'Selected software-development projects across full stack, backend, mobile, C++, testing and UI/UX.', path: '/projects' });
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visible = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.categories.includes(filter)), [filter]);
  return <section className="section page-top"><div className="container"><SectionHeading eyebrow="Projects" title="Selected engineering work" description="Filter by the kind of evidence you want to see. Stronger, more complete projects are prioritised over showing every repository."/><div className="filter-bar" role="group" aria-label="Filter projects">{filters.map((item) => <button className={filter === item ? 'is-active' : ''} aria-pressed={filter === item} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div>{visible.length ? <div className="project-grid">{visible.map((project) => <ProjectCard project={project} key={project.slug}/>)}</div> : <div className="empty-state"><SearchX/><h2>No projects match that filter.</h2><p>Choose another category to continue browsing.</p><button className="button button--ghost" onClick={() => setFilter('All')}>Show all projects</button></div>}</div></section>;
}
