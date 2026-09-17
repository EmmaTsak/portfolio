import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DocumentViewer } from '../components/DocumentViewer';
import { usePageMeta } from '../hooks/usePageMeta';

export function RecommendationPage() {
  usePageMeta({
    title: 'Recommendation — Emmanouela Tsakalidou',
    description:
      'Professional recommendation from Emmanouela Tsakalidou’s software-development internship at Valmore Technologies.',
    path: '/recommendation',
  });

  const path = `${import.meta.env.BASE_URL}Letter%20of%20Recommendation-Emmanouela%20Tsakalidou.pdf`;

  return (
    <section className="section page-top">
      <div className="container">
        <Link className="back-link" to="/#recommendation">
          <ArrowLeft />
          Back to portfolio
        </Link>

        <div className="resume-header">
          <div>
            <p className="eyebrow">Recommendation</p>

            <h1>Professional recommendation</h1>

            <p>
              Recommendation from Dimitris Ampelakiotis, Co-Owner & CTO at
              Valmore Technologies, following my software-development
              internship.
            </p>
          </div>
        </div>

        <DocumentViewer
          file={path}
          title="Valmore Technologies — Recommendation"
          downloadName="Letter of Recommendation-Emmanouela Tsakalidou.pdf"
        />
      </div>
    </section>
  );
}