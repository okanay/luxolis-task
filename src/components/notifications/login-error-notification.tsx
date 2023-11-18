'use client';

import { useAtom } from 'jotai';
import { loginStatusAtom } from '@/atoms/login-status-atom';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export const LoginErrorNotification = () => {
  const [status, setStatus] = useAtom(loginStatusAtom);

  if (!status.isError) return;

  const handleClearError = () => {
    setStatus({ isError: false });
  };

  return (
    <div className={'fixed left-0 top-0 z-10 h-screen w-full bg-zinc-50/10'}>
      <div className={'flex h-full w-full flex-col items-center justify-center'}>
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-zinc-50 px-8 py-4 text-zinc-800 drop-shadow">
          <div className={'flex flex-row items-center justify-center gap-1'}>
            <h4 className={'text-lg font-semibold'}>Error</h4>
            <ExclamationCircleIcon className={'h-[24px] w-[24px] text-rose-500'} />
          </div>
          <p>{status.errorMessage}</p>
          <div className={'h-[0.08rem] w-full rounded-full bg-zinc-300'} />
          <button className={'rounded px-2 py-1 font-semibold text-primary-500'} onClick={handleClearError}>
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
