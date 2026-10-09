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
    const mobileQuery = window.matchMedia(
      '(max-width: 760px)'
    );

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const updatePreference = () => {
      setUseStaticFallback(
        mobileQuery.matches ||
          reducedMotionQuery.matches
      );
    };

    updatePreference();

    mobileQuery.addEventListener(
      'change',
      updatePreference
    );

    reducedMotionQuery.addEventListener(
      'change',
      updatePreference
    );

    return () => {
      mobileQuery.removeEventListener(
        'change',
        updatePreference
      );

      reducedMotionQuery.removeEventListener(
        'change',
        updatePreference
      );
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