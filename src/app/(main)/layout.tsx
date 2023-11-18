import { Notifications } from '@/components/notifications/notifications';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Notifications />
      {children}
    </>
  );
}
