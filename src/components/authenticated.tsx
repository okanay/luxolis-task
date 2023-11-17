import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';

export const Authenticated = () => {
  return (
    <div className={'h-screen w-full bg-primary-400'}>
      <div className={'mx-auto flex h-full w-full max-w-sm flex-col items-center justify-center px-2'}>
        <h1 className={'text-4xl text-zinc-50'}>Task Completed!</h1>
        <Link
          href={'/'}
          className={
            'my-2 rounded-lg border-2 border-orange-950/10 bg-zinc-50 px-2 py-1 text-xl text-primary-500 shadow-2xl shadow-orange-200'
          }
        >
          New Game <PlusIcon className={'inline-block h-[24px] w-[24px] text-orange-400'} />
        </Link>
      </div>
    </div>
  );
};
