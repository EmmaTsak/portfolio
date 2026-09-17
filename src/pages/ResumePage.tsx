import { DocumentViewer } from '../components/DocumentViewer';
import { usePageMeta } from '../hooks/usePageMeta';

export function ResumePage() {
  usePageMeta({
    title: 'Resume — Emmanouela Tsakalidou',
    description:
      'Resume for Emmanouela Tsakalidou, software developer with development, testing and API experience.',
    path: '/resume',
  });

  const path = `${import.meta.env.BASE_URL}Emmanouela_Tsakalidou_CV.pdf`;

  return (
    <section className="section page-top">
      <div className="container">
        <div className="resume-header">
          <div>
            <p className="eyebrow">Resume</p>

            <h1>Experience, education and technical skills</h1>

            <p>
              View my CV directly in the portfolio or download the original PDF.
            </p>
          </div>
        </div>

        <DocumentViewer
          file={path}
          title="Emmanouela Tsakalidou — CV"
          downloadName="Emmanouela_Tsakalidou_CV.pdf"
        />
      </div>
    </section>
  );
}