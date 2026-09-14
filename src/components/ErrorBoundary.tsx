import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface State { hasError: boolean }
export class ErrorBoundary extends Component<PropsWithChildren, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(): State { return { hasError: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error('Portfolio error boundary:', error, info); }
  render(): ReactNode {
    if (this.state.hasError) {
      return <main className="state-page"><div className="state-card"><AlertTriangle /><p className="eyebrow">Application error</p><h1>Something went wrong.</h1><p>The portfolio hit an unexpected error. You can retry the page or return home.</p><div className="button-row"><button className="button button--primary" onClick={() => window.location.reload()}>Retry</button><a className="button button--ghost" href={import.meta.env.BASE_URL}>Return home</a></div></div></main>;
    }
    return this.props.children;
  }
}
