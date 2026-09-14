import { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Contact', to: '/#contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleNav = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink className="brand" to="/" aria-label="Emmanouela Tsakalidou home">
          <span className="brand-mark">ET</span><span>Emmanouela</span>
        </NavLink>
        <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button>
        <nav id="primary-navigation" className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {links.map((link) => {
            const hashLink = link.to.includes('#');
            const active = !hashLink && (link.to === '/' ? location.pathname === '/' : location.pathname.startsWith(link.to));
            return <NavLink key={link.label} to={link.to} onClick={handleNav} className={active ? 'active' : undefined}>{link.label}</NavLink>;
          })}
          <div className="nav-socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </nav>
      </div>
    </header>
  );
}
