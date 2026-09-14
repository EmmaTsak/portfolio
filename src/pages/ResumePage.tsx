import { Download, ExternalLink } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
export function ResumePage() {
  usePageMeta({ title: 'Resume — Emmanouela Tsakalidou', description: 'Resume for Emmanouela Tsakalidou, software developer with development, testing and API experience.', path: '/resume' });
  const path = `${import.meta.env.BASE_URL}Emmanouela_Tsakalidou_CV.pdf`;
  return <section className="section page-top"><div className="container"><div className="resume-header"><div><p className="eyebrow">Resume</p><h1>Experience, education and technical skills</h1><p>The downloadable PDF is the supplied CV and is not rewritten by the portfolio.</p></div><div className="button-row"><a className="button button--primary" href={path} download><Download/>Download CV</a><a className="button button--ghost" href={path} target="_blank" rel="noreferrer"><ExternalLink/>Open PDF</a></div></div><object className="resume-frame" data={path} type="application/pdf"><div className="empty-state"><h2>PDF preview unavailable.</h2><p>Your browser may not support embedded PDF viewing.</p><a className="button button--primary" href={path}>Open the CV</a></div></object></div></section>;
}
