import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const location = useLocation();
  const { t } = useTranslation();

  const links = [
    { id: 'Home', label: t('nav.home'), to: '/' },
    { id: 'Projects', label: t('nav.projects'), to: '/#projects' },
    { id: 'Experience', label: t('nav.experience'), to: '/#experience' },
    { id: 'Skills', label: t('nav.skills'), to: '/#skills' },
    { id: 'Contact', label: t('nav.contact'), to: '/#contact' },
  ];

  const handleNav = () => setOpen(false);

  useEffect(() => {
    if (location.pathname.startsWith('/projects')) {
      setActiveSection('Projects');
      return;
    }

    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const updateActiveSection = () => {
      const projects = document.getElementById('projects');
      const experience = document.getElementById('experience');
      const skills = document.getElementById('skills');
      const contact = document.getElementById('contact');

      const position = window.scrollY + 180;

      if (contact && position >= contact.offsetTop) {
        setActiveSection('Contact');
      } else if (skills && position >= skills.offsetTop) {
        setActiveSection('Skills');
      } else if (experience && position >= experience.offsetTop) {
        setActiveSection('Experience');
      } else if (projects && position >= projects.offsetTop) {
        setActiveSection('Projects');
      } else {
        setActiveSection('Home');
      }
    };

    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          to="/"
          aria-label="Emmanouela Tsakalidou home"
          onClick={handleNav}
        >
          <span className="brand-mark">ET</span>
        </Link>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              onClick={handleNav}
              className={activeSection === link.id ? 'active' : undefined}
            >
              {link.label}
            </Link>
          ))}

          <div className="nav-socials">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}