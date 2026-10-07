import { WifiOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { useOnlineStatus } from '../hooks/useOnlineStatus';

export function OfflineBanner() {
  const { t } = useTranslation();
  const online = useOnlineStatus();

  if (online) {
    return null;
  }

  return (
    <div
      className="offline-banner"
      role="status"
    >
      <WifiOff aria-hidden="true" />
      {t('ui.offline')}
    </div>
  );
}