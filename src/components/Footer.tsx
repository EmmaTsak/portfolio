import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link
            className="brand footer-brand"
            to="/"
          >
            <span className="brand-mark">
              ET
            </span>

            <span>
              {t('names.fullName')}
            </span>
          </Link>

          <p>
            {t('footer.tagline')}
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © 2026 {t('names.fullName')}
        </span>

        <span>
          {t('footer.builtWith')}
        </span>
      </div>
    </footer>
  );
}