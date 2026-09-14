import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link className="brand footer-brand" to="/"><span className="brand-mark">ET</span><span>{profile.name}</span></Link><p>Software development, software quality and user-centred interfaces.</p></div><div className="footer-links"><a href={`mailto:${profile.email}`}><Mail />Email</a><a href={profile.github} target="_blank" rel="noreferrer"><Github />GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin />LinkedIn</a></div></div><div className="container footer-bottom"><span>© 2026 {profile.name}</span><span>Built with React + TypeScript</span></div></footer>;
}
