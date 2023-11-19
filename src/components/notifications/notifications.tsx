'use client';
import { LoginErrorNotification } from '@/components/notifications/login-error-notification';
import { useAtom } from 'jotai';

import { notificationAtom } from '@/atoms/notification-atom';

export const Notifications = () => {
  const [status, setStatus] = useAtom(notificationAtom);
  if (!status.isOpen) return;

  const handleCloseNotification = () => {
    setStatus({ isOpen: false });
  };

  return (
    <div>
      {status.type === 'login-error' && (
        <LoginErrorNotification message={status.message} onCloseNotification={handleCloseNotification} />
      )}
    </div>
  );
};
