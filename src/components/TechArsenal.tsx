import type { IconType } from 'react-icons';
import {
    SiC,
    SiCplusplus,
    SiDocker,
    SiExpress,
    SiFigma,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiJenkins,
    SiJest,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiPython,
    SiReact,
    SiTypescript,
    SiFastapi,
    SiJetpackcompose,
    SiLinux,
    SiMongoose,
    SiPytest,
    SiWordpress,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { skillGroups } from '../data/profile';

const skillGroupTranslationKeys: Record<string, string> = {
  Development: 'development',
  'Frontend & Mobile': 'frontendMobile',
  'Backend & APIs': 'backendApis',
  'Testing & Quality': 'testingQuality',
  Data: 'data',
  'Tools & Design': 'toolsDesign',
};

const skillIcons: Record<string, IconType> = {
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    Python: SiPython,
    Java: FaJava,
    C: SiC,
    'C++': SiCplusplus,
    PHP: SiPhp,

    React: SiReact,
    'React Native': SiReact,
    'HTML/CSS': SiHtml5,

    'Node.js': SiNodedotjs,
    Express: SiExpress,

    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,
    MongoDB: SiMongodb,
    Prisma: SiPrisma,

    Jest: SiJest,
    Postman: SiPostman,

    Git: SiGit,
    GitHub: SiGithub,
    Docker: SiDocker,
    Jenkins: SiJenkins,
    Figma: SiFigma,

    'Jetpack Compose': SiJetpackcompose,
    FastAPI: SiFastapi,

    Mongoose: SiMongoose,

    pytest: SiPytest,

    'Linux/Unix CLI': SiLinux,
    WordPress: SiWordpress,
};

function getInitials(name: string) {
  const cleaned = name
    .replace('&', '')
    .replace('/', ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const words = cleaned.split(' ');

  if (words.length === 1) {
    return cleaned.slice(0, 2).toUpperCase();
  }

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export function TechArsenal() {
  const { t } = useTranslation();

  const [activeGroup, setActiveGroup] = useState(
    skillGroups[0].title
  );

  const selectedGroup =
    skillGroups.find(
      (group) => group.title === activeGroup
    ) ?? skillGroups[0];

  const translationKey =
    skillGroupTranslationKeys[
      selectedGroup.title
    ];

  return (
    <div className="tech-arsenal tech-arsenal--combat">
      <div className="tech-arsenal__hud">
        <div>
          <span className="tech-arsenal__status">
            TECH LOADOUT
          </span>

          <h3>
            {t(
              `home.skills.groups.${translationKey}`,
              {
                defaultValue:
                  selectedGroup.title,
              }
            )}
          </h3>
        </div>

        <span className="tech-arsenal__counter">
          {String(
            skillGroups.findIndex(
              (group) =>
                group.title === activeGroup
            ) + 1
          ).padStart(2, '0')}
          {' / '}
          {String(skillGroups.length).padStart(
            2,
            '0'
          )}
        </span>
      </div>

      <div
        className="tech-arsenal__selector"
        role="tablist"
        aria-label="Technology categories"
      >
        {skillGroups.map((group, index) => {
          const key =
            skillGroupTranslationKeys[group.title];

          const isActive =
            group.title === activeGroup;

          return (
            <button
              key={group.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`tech-arsenal__selector-button ${
                isActive ? 'is-active' : ''
              }`}
              onClick={() =>
                setActiveGroup(group.title)
              }
            >
              <span className="tech-arsenal__selector-number">
                {String(index + 1).padStart(
                  2,
                  '0'
                )}
              </span>

              <span>
                {t(
                  `home.skills.groups.${key}`,
                  {
                    defaultValue:
                      group.title,
                  }
                )}
              </span>
            </button>
          );
        })}
      </div>

      <div
        className="tech-arsenal__panel"
        role="tabpanel"
      >
        <div
          key={activeGroup}
          className="tech-arsenal__grid tech-arsenal__grid--animated"
        >
          {selectedGroup.items.map(
            (skill, index) => {
              const Icon =
                skillIcons[skill];

              return (
                <div
                  className="tech-tile"
                  key={skill}
                  title={skill}
                  style={{
                    animationDelay: `${index * 35}ms`,
                  }}
                >
                  <span
                    className="tech-tile__icon"
                    aria-hidden="true"
                  >
                    {Icon ? (
                      <Icon />
                    ) : (
                      getInitials(skill)
                    )}
                  </span>

                  <span className="tech-tile__name">
                    {skill}
                  </span>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}