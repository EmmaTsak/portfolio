import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OfflineBanner } from '../components/OfflineBanner';
import { HomePage } from '../pages/HomePage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { PriceWisePage } from '../pages/PriceWisePage';
import { ProjectDetailPage } from '../pages/ProjectDetailPage';
import { ResumePage } from '../pages/ResumePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { RecommendationPage } from '../pages/RecommendationPage';
import { ThesisPage } from '../pages/ThesisPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/pricewise" element={<PriceWisePage />} />
      <Route path="/projects/pricewise/thesis" element={<ThesisPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/recommendation" element={<RecommendationPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.slice(1);
  
      const scrollToSection = () => {
        const element = document.getElementById(sectionId);
  
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };
  
      const timeout = window.setTimeout(scrollToSection, 100);
  
      return () => window.clearTimeout(timeout);
    }
  
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [location.pathname, location.hash]);

  return (
    <div className="site-shell">
      <OfflineBanner />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
