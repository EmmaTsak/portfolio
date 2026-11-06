import {
  lazy,
  Suspense,
  useEffect,
  useState,
} from 'react';
import {
  Box,
  Container,
  GitBranch,
  Server,
  TestTube2,
} from 'lucide-react';

const HeroScene = lazy(() =>
  import('../canvas/HeroScene').then((module) => ({
    default: module.HeroScene,
  }))
);

const engineeringNodes = [
  {
    label: 'SOURCE',
    value: 'Git / GitHub',
    icon: GitBranch,
    className: 'hero-engineering-node--source',
  },
  {
    label: 'CI/CD',
    value: 'Jenkins',
    icon: Server,
    className: 'hero-engineering-node--ci',
  },
  {
    label: 'BUILD',
    value: 'Docker',
    icon: Container,
    className: 'hero-engineering-node--docker',
  },
  {
    label: 'TEST',
    value: 'JUnit · pytest',
    icon: TestTube2,
    className: 'hero-engineering-node--test',
  },
  {
    label: 'DELIVER',
    value: 'Artifacts',
    icon: Box,
    className: 'hero-engineering-node--deliver',
  },
] as const;

export function ImmersiveHero() {
  const [useStaticFallback, setUseStaticFallback] =
    useState(true);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const updatePreference = () => {
      setUseStaticFallback(
        reducedMotionQuery.matches
      );
    };

    updatePreference();

    reducedMotionQuery.addEventListener(
      'change',
      updatePreference
    );

    return () => {
      reducedMotionQuery.removeEventListener(
        'change',
        updatePreference
      );
    };
  }, []);

  return (
    <div
      className="hero-engineering"
      aria-hidden="true"
    >
      <div className="hero-engineering__scene">
        {useStaticFallback ? (
          <div className="hero-scene hero-scene--fallback" />
        ) : (
          <Suspense
            fallback={
              <div className="hero-scene hero-scene--fallback" />
            }
          >
            <HeroScene />
          </Suspense>
        )}
      </div>

      <div className="hero-engineering__core">
        <span>ENGINEERING</span>
        <strong>WORKFLOW</strong>
      </div>

      {engineeringNodes.map((node) => {
        const Icon = node.icon;

        return (
          <div
            className={`hero-engineering-node ${node.className}`}
            key={node.label}
          >
            <Icon
              size={17}
              strokeWidth={1.8}
            />

            <div>
              <span>{node.label}</span>
              <strong>{node.value}</strong>
            </div>
          </div>
        );
      })}
    </div>
  );
}