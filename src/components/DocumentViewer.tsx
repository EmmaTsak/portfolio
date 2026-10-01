import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
} from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useTranslation } from 'react-i18next';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

interface DocumentViewerProps {
  file: string;
  title: string;
  downloadName?: string;
}

export function DocumentViewer({
  file,
  title,
  downloadName,
}: DocumentViewerProps) {
  const { t } = useTranslation();

  const [numPages, setNumPages] =
    useState(0);

  const [pageNumber, setPageNumber] =
    useState(1);

  const previousPage = () => {
    setPageNumber((page) =>
      Math.max(page - 1, 1)
    );
  };

  const nextPage = () => {
    setPageNumber((page) =>
      Math.min(page + 1, numPages)
    );
  };

  return (
    <div className="document-viewer">
      <div className="document-viewer__toolbar">
        <div>
          <span className="document-viewer__label">
            {t('documentViewer.document')}
          </span>

          <strong>{title}</strong>
        </div>

        <div className="document-viewer__actions">
          <a
            className="button button--ghost"
            href={file}
            download={downloadName}
          >
            <Download />
            {t('documentViewer.download')}
          </a>

          <a
            className="button button--ghost"
            href={file}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink />
            {t(
              'documentViewer.originalPdf'
            )}
          </a>
        </div>
      </div>

      <div className="document-viewer__stage">
        <Document
          file={file}
          loading={
            <div className="document-viewer__message">
              {t(
                'documentViewer.loading'
              )}
            </div>
          }
          error={
            <div className="document-viewer__message">
              {t(
                'documentViewer.error'
              )}
            </div>
          }
          onLoadSuccess={({
            numPages: loadedPages,
          }) => {
            setNumPages(loadedPages);
            setPageNumber(1);
          }}
        >
          <Page
            pageNumber={pageNumber}
            width={800}
            renderTextLayer
            renderAnnotationLayer
          />
        </Document>
      </div>

      {numPages > 0 && (
        <div className="document-viewer__pagination">
          <button
            type="button"
            onClick={previousPage}
            disabled={pageNumber <= 1}
            aria-label={t(
              'documentViewer.previousPage'
            )}
          >
            <ChevronLeft />
          </button>

          <span>
            {t('documentViewer.page')}{' '}
            <strong>{pageNumber}</strong>{' '}
            {t('documentViewer.of')}{' '}
            {numPages}
          </span>

          <button
            type="button"
            onClick={nextPage}
            disabled={
              pageNumber >= numPages
            }
            aria-label={t(
              'documentViewer.nextPage'
            )}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}