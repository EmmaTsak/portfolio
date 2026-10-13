import {
  lazy,
  Suspense,
  useEffect,
  useState,
} from 'react';

const HeroScene = lazy(() =>
  import('../canvas/HeroScene').then((module) => ({
    default: module.HeroScene,
  }))
);

export function ImmersiveHero() {
  const [useStaticFallback, setUseStaticFallback] =
    useState(true);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const updatePreference = () => {
      setUseStaticFallback(reducedMotionQuery.matches);
    };

    updatePreference();
    reducedMotionQuery.addEventListener('change', updatePreference);

    return () => {
      reducedMotionQuery.removeEventListener('change', updatePreference);
    };
  }, []);

  if (useStaticFallback) {
    return (
      <div
        className="hero-scene hero-scene--fallback"
        aria-hidden="true"
      />
    );
  }

  return (
    <Suspense
      fallback={
        <div
          className="hero-scene hero-scene--fallback"
          aria-hidden="true"
        />
      }
    >
      <HeroScene />
    </Suspense>
  );
}