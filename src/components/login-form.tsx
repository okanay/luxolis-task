'use client';

import { EnvelopeIcon, ExclamationCircleIcon, LockClosedIcon } from '@heroicons/react/24/outline';

import { useForm } from 'react-hook-form';
import { LoginButton } from '@/components/login-button';
import { loginFormAction } from '@/actions/login-form-action';
import { useLoginValidation } from '@/hooks/useLoginValidation';
import { TActionFail, TActionSuccess } from '@/types/login-action-response';
import { useRouter, useParams } from 'next/navigation';

export const LoginForm = () => {
  const router = useRouter();
  const params = useParams();

  const { register, getValues } = useForm();
  const { checkLoginInput, combineErrorsMessages, clearError, formattedErrors } = useLoginValidation();

  // These constants are updated when the form component is rendered, and they are used for styling input values.
  const isError = Boolean(formattedErrors?._errors);
  const isEmailValid = Boolean(!formattedErrors?.email);
  const isPasswordValid = Boolean(!formattedErrors?.password);

  // This function, as the <form-action>, runs on the server after checking the input values.
  const handleFormAction = async (formData: FormData) => {
    if (!checkLoginInput(getValues())) return;
    clearError();

    const response = await loginFormAction(formData);

    if (response.ok) handleLoginSuccess(response);
    else handleLoginFail(response);
  };

  // This function runs after a successful user login.
  const handleLoginSuccess = (response: TActionSuccess) => {
    router.push('/?status=authenticated');
  };

  // This function runs when there is a login error.
  const handleLoginFail = (response: TActionFail) => {
    window.alert(response.errorMessage);
  };

  return (
    <form action={handleFormAction} className={'flex w-full flex-col gap-4'}>
      <div data-name={'email-container'} className={'relative h-full w-full'}>
        <input
          {...register('email')}
          name={'email'}
          type={'email'}
          placeholder={'Email Address'}
          className={`${
            isEmailValid ? 'border-zinc-50' : 'border-rose-400'
          } h-12 w-full rounded-lg border-2 bg-primary-400  pl-12 pr-4 text-zinc-50 placeholder-zinc-50/80 transition-colors duration-500 focus:placeholder-zinc-50/0 focus:outline-none`}
        />
        <div
          data-name={'email-heroicon-container'}
          className={'pointer-events-none absolute left-0 top-0 flex h-12 w-full items-center justify-start px-4'}
        >
          <EnvelopeIcon className={'h-[24px] w-[24px] text-zinc-50'} />
        </div>
      </div>
      <div data-name={'password-container'} className={'relative h-full w-full'}>
        <input
          {...register('password')}
          name={'password'}
          type={'password'}
          placeholder={'Password'}
          className={`${
            isPasswordValid ? 'border-zinc-50' : 'border-rose-400'
          } h-12 w-full rounded-lg border-2 bg-primary-400  pl-12 pr-4 text-zinc-50 placeholder-zinc-50/80 transition-colors duration-500 focus:placeholder-zinc-50/0 focus:outline-none`}
        />
        <div
          data-name={'password-heroicon-container'}
          className={'pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-start px-4'}
        >
          <LockClosedIcon className={'h-[24px] w-[24px] text-zinc-50'} />
        </div>
      </div>
      {isError &&
        combineErrorsMessages().map((error, index) => (
          <div
            key={index + 'login-error'}
            data-name={'email-error-container'}
            className={'flex w-full flex-col gap-2 rounded-lg bg-rose-200 px-4 py-2 text-rose-600'}
          >
            <div className={'flex items-start justify-start gap-2'}>
              <ExclamationCircleIcon className={'h-[24px] w-[24px] flex-shrink-0'} />
              <p>{error}</p>
            </div>
          </div>
        ))}
      <div data-name={'login-submit-button-container'} className={'mt-8 flex flex-col items-end gap-4'}>
        <LoginButton />
        <button type={'button'} className={'text-lg text-zinc-50'}>
          Forgot Password?
        </button>
      </div>
    </form>
  );
};