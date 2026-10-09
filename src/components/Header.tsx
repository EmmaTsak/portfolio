import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState('Home');

  const [scrollProgress, setScrollProgress] =
  useState(0);

  const location = useLocation();
  const { t } = useTranslation();

  const links = [
    {
      id: 'Home',
      label: t('nav.home'),
      to: '/',
    },
    {
      id: 'Projects',
      label: t('nav.projects'),
      to: '/#projects',
    },
    {
      id: 'Education',
      label: t('nav.education'),
      to: '/education',
    },
    {
      id: 'Experience',
      label: t('nav.experience'),
      to: '/#experience',
    },
    {
      id: 'Skills',
      label: t('nav.skills'),
      to: '/#skills',
    },
    {
      id: 'Contact',
      label: t('nav.contact'),
      to: '/#contact',
    },
  ];

  const handleNav = () => setOpen(false);

  useEffect(() => {
    if (
      location.pathname.startsWith('/projects')
    ) {
      setActiveSection('Projects');
      return;
    }

    if (
      location.pathname.startsWith('/education')
    ) {
      setActiveSection('Education');
      return;
    }

    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const updateActiveSection = () => {
      const sections = [
        {
          id: 'Projects',
          element:
            document.getElementById('projects'),
        },
        {
          id: 'Education',
          element:
            document.getElementById('education'),
        },
        {
          id: 'Experience',
          element:
            document.getElementById('experience'),
        },
        {
          id: 'Skills',
          element:
            document.getElementById('skills'),
        },
        {
          id: 'Contact',
          element:
            document.getElementById('contact'),
        },
      ].filter(
        (
          section
        ): section is {
          id: string;
          element: HTMLElement;
        } => Boolean(section.element)
      );

      const position = window.scrollY + 180;

      let currentSection = 'Home';

      sections.forEach((section) => {
        if (
          position >= section.element.offsetTop
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener(
      'scroll',
      updateActiveSection,
      { passive: true }
    );

    window.addEventListener(
      'resize',
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        'scroll',
        updateActiveSection
      );

      window.removeEventListener(
        'resize',
        updateActiveSection
      );
    };
  }, [location.pathname]);

  useEffect(() => {
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;

    const scrollHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const progress =
      scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    setScrollProgress(
      Math.min(
        Math.max(progress, 0),
        100
      )
    );
  };

  updateScrollProgress();

  window.addEventListener(
    'scroll',
    updateScrollProgress,
    { passive: true }
  );

  window.addEventListener(
    'resize',
    updateScrollProgress
  );

  return () => {
    window.removeEventListener(
      'scroll',
      updateScrollProgress
    );

    window.removeEventListener(
      'resize',
      updateScrollProgress
    );
  };
}, []);
  return (
    
    <header className="site-header">
      <div
        className="site-header__progress"
        aria-hidden="true"
      >
        <span
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>
      <div className="container header-inner">
        <Link
          className="brand"
          to="/"
          aria-label={t(
            'ui.header.homeLabel'
          )}
          onClick={handleNav}
        >
          <span className="brand-mark">
            ET
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-label={
            open
              ? t(
                  'ui.header.closeNavigation'
                )
              : t(
                  'ui.header.openNavigation'
                )
          }
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() =>
            setOpen(
              (value) => !value
            )
          }
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${
            open ? 'is-open' : ''
          }`}
          aria-label={t(
            'ui.header.primaryNavigation'
          )}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              onClick={handleNav}
              className={
                activeSection === link.id
                  ? 'active'
                  : undefined
              }
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