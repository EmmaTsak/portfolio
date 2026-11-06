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
    </div>
  );
}