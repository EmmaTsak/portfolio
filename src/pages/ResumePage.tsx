import { useTranslation } from 'react-i18next';

import { DocumentViewer } from '../components/DocumentViewer';
import { usePageMeta } from '../hooks/usePageMeta';

export function ResumePage() {
  const { t } = useTranslation();

  const name = t('names.fullName');

  usePageMeta({
    title: t('resumePage.metaTitle', {
      name,
    }),
    description: t(
      'resumePage.metaDescription',
      {
        name,
      }
    ),
    path: '/resume',
  });

  const path =
    `${import.meta.env.BASE_URL}Emmanouela_Tsakalidou_CV.pdf`;

  return (
    <section className="section page-top">
      <div className="container">
        <div className="resume-header">
          <div>
            <p className="eyebrow">
              {t('resumePage.eyebrow')}
            </p>

            <h1>
              {t('resumePage.title')}
            </h1>

            <p>
              {t(
                'resumePage.description'
              )}
            </p>
          </div>
        </div>

        <DocumentViewer
          file={path}
          title={t(
            'resumePage.documentTitle',
            {
              name,
            }
          )}
          downloadName="Emmanouela_Tsakalidou_CV.pdf"
        />
      </div>
    </section>
  );
}