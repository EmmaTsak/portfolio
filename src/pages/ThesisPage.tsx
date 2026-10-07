import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { DocumentViewer } from '../components/DocumentViewer';
import { usePageMeta } from '../hooks/usePageMeta';

export function ThesisPage() {
  const { t } = useTranslation();

  const name = t('names.fullName');

  usePageMeta({
    title: t('thesisPage.metaTitle', {
      name,
    }),
    description: t(
      'thesisPage.metaDescription'
    ),
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
          {t('thesisPage.back')}
        </Link>

        <div className="resume-header">
          <div>
            <p className="eyebrow">
              {t('thesisPage.eyebrow')}
            </p>

            <h1>
              {t('thesisPage.title')}
            </h1>

            <p>
              {t(
                'thesisPage.description'
              )}
            </p>
          </div>
        </div>

        <DocumentViewer
          file={thesisPath}
          title={t(
            'thesisPage.documentTitle'
          )}
          downloadName="Emmanouela_Tsakalidou_PriceWise_Thesis.pdf"
        />
      </div>
    </section>
  );
}