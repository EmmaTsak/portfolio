import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { DocumentViewer } from '../components/DocumentViewer';
import { usePageMeta } from '../hooks/usePageMeta';

export function ThesisPage() {
  usePageMeta({
    title: 'PriceWise Thesis — Emmanouela Tsakalidou',
    description:
      'Full BSc (Hons) Computing Software Development thesis documenting the research, design, implementation and evaluation of PriceWise.',
    path: '/projects/pricewise/thesis',
  });

  const thesisPath =
    `${import.meta.env.BASE_URL}Emmanouela_Tsakalidou_PriceWise_Thesis.pdf`;

  return (
    <section className="section page-top">
      <div className="container">
        <Link
          className="back-link"
          to="/projects/pricewise"
        >
          <ArrowLeft />
          Back to PriceWise
        </Link>

        <div className="resume-header">
          <div>
            <p className="eyebrow">
            Bachelor thesis · Greek
            </p>

            <h1>
            PriceWise - Full Thesis
            </h1>

            <p>
            The complete BSc (Hons) thesis documenting the research,
            design, implementation and evaluation of PriceWise.
            The original academic report is written in Greek.
            </p>
          </div>
        </div>

        <DocumentViewer
          file={thesisPath}
          title="PriceWise - Bachelor Thesis (Greek)"
          downloadName="Emmanouela_Tsakalidou_PriceWise_Thesis.pdf"
        />
      </div>
    </section>
  );
}