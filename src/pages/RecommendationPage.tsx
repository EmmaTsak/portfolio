import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { DocumentViewer } from '../components/DocumentViewer';
import { usePageMeta } from '../hooks/usePageMeta';

export function RecommendationPage() {
  const { t } = useTranslation();

  const name = t('names.fullName');
  const supervisor = t('names.supervisor');

  usePageMeta({
    title: t('recommendationPage.metaTitle', {
      name,
    }),
    description: t(
      'recommendationPage.metaDescription',
      {
        name,
      }
    ),
    path: '/recommendation',
  });

  const path =
    `${import.meta.env.BASE_URL}Letter%20of%20Recommendation-Emmanouela%20Tsakalidou.pdf`;

  return (
    <section className="section page-top">
      <div className="container">
        <Link
          className="back-link"
          to="/#recommendation"
        >
          <ArrowLeft />
          {t('recommendationPage.back')}
        </Link>

        <div className="resume-header">
          <div>
            <p className="eyebrow">
              {t(
                'recommendationPage.eyebrow'
              )}
            </p>

            <h1>
              {t(
                'recommendationPage.title'
              )}
            </h1>

            <p>
              {t(
                'recommendationPage.description',
                {
                  supervisor,
                }
              )}
            </p>
          </div>
        </div>

        <DocumentViewer
          file={path}
          title={t(
            'recommendationPage.documentTitle'
          )}
          downloadName="Letter of Recommendation-Emmanouela Tsakalidou.pdf"
        />
      </div>
    </section>
  );
}