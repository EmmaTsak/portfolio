import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
export function OfflineBanner() {
  const online = useOnlineStatus();
  if (online) return null;
  return <div className="offline-banner" role="status"><WifiOff aria-hidden="true" /> You appear to be offline. Local portfolio content is still available, but external links may not load.</div>;
}
