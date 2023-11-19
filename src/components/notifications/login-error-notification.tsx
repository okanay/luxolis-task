import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { NotificationTemplate } from '@/components/notifications/notification-template';

type TProps = React.FC<{
  message: string;
  onCloseNotification: () => void;
}>;

export const LoginErrorNotification: TProps = ({ message, onCloseNotification }) => {
  return (
    <NotificationTemplate>
      <div className={'flex flex-row items-center justify-center gap-2'}>
        <h4 className={'text-lg font-semibold'}>Error</h4>
        <ExclamationCircleIcon className={'h-[24px] w-[24px] text-rose-700'} />
      </div>
      <p>{message}</p>
      <div className={'h-[0.08rem] w-full rounded-full bg-zinc-300'} />
      <button className={'rounded px-2 py-1 font-semibold text-primary-500'} onClick={onCloseNotification}>
        Dismiss
      </button>
    </NotificationTemplate>
  );
};
