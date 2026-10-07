import {
  Component,
  ErrorInfo,
  PropsWithChildren,
  ReactNode,
} from 'react';
import { AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface State {
  hasError: boolean;
}

function ErrorFallback() {
  const { t } = useTranslation();

  return (
    <main className="state-page">
      <div className="state-card">
        <AlertTriangle />

        <p className="eyebrow">
          {t('shared.error.eyebrow')}
        </p>

        <h1>
          {t('shared.error.title')}
        </h1>

        <p>
          {t('shared.error.description')}
        </p>

        <div className="button-row">
          <button
            className="button button--primary"
            onClick={() =>
              window.location.reload()
            }
          >
            {t('shared.error.retry')}
          </button>

          <a
            className="button button--ghost"
            href={import.meta.env.BASE_URL}
          >
            {t('shared.error.home')}
          </a>
        </div>
      </div>
    </main>
  );
}

export class ErrorBoundary extends Component<
  PropsWithChildren,
  State
> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return {
      hasError: true,
    };
  }

  componentDidCatch(
    error: Error,
    info: ErrorInfo
  ) {
    console.error(
      'Portfolio error boundary:',
      error,
      info
    );
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}