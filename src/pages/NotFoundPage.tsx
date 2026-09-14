import { FileQuestion, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFoundProject() {
  return <section className="state-page"><div className="state-card"><FileQuestion/><p className="eyebrow">Missing project</p><h1>That case study isn’t here.</h1><p>The project may have been renamed, removed or the link may be incorrect.</p><div className="button-row"><Link className="button button--primary" to="/projects">View projects</Link><Link className="button button--ghost" to="/">Back home</Link></div></div></section>;
}

export function NotFoundPage() {
  usePageMeta({ title: '404 — Route not found', description: 'The requested portfolio route could not be found.', path: '/404' });
  return <section className="state-page"><div className="state-card"><FileQuestion/><p className="eyebrow">404 · Route not found</p><h1>This path doesn’t compile.</h1><p>The page may have moved or the URL may be incorrect. The rest of the portfolio is still available.</p><div className="button-row"><Link className="button button--primary" to="/">Back home</Link><Link className="button button--ghost" to="/projects">View projects</Link><a className="button button--ghost" href={profile.github} target="_blank" rel="noreferrer"><Github/>GitHub</a></div><code className="route-code">GET {window.location.pathname} → 404</code></div></section>;
}
