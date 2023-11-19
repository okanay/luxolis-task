import { atom } from 'jotai';

type TNotificationClose = { isOpen: false };
type TNotificationShow = { isOpen: true; type: TNotificationType; message: string };
type TNotificationType = 'login-error' | 'other-notification-name';

type TNotificationAtom = TNotificationClose | TNotificationShow;

export const notificationAtom = atom<TNotificationAtom>({ isOpen: false });
