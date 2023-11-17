'use client';
import { useFormStatus } from 'react-dom';
import { FingerPrintIcon } from '@heroicons/react/24/outline';

export const LoginButton: React.FC<{}> = props => {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button
      disabled={pending}
      type={'submit'}
      className={
        'h-12 w-full rounded-lg border border-primary-950/10 bg-zinc-50 text-xl uppercase text-primary-500 shadow-lg shadow-primary-600 transition-opacity duration-500 disabled:opacity-50'
      }
    >
      {pending ? 'Logging In...' : 'Login'}
    </button>
  );
};
