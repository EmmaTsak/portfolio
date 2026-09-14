import '@testing-library/jest-dom/vitest';
Object.defineProperty(window, 'scrollTo', { value: () => undefined, writable: true });
Object.defineProperty(window, 'matchMedia', { value: () => ({ matches: true, addEventListener: () => undefined, removeEventListener: () => undefined }), writable: true });
class MockIntersectionObserver { observe() {} disconnect() {} unobserve() {} }
Object.defineProperty(window, 'IntersectionObserver', { value: MockIntersectionObserver, writable: true });
