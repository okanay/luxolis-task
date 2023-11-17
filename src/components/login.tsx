import { LoginForm } from '@/components/login-form';
import { LoginImage } from '@/components/login-image';

export const Login = () => {
  return (
    <div className={'h-screen w-full bg-primary-400'}>
      <div className={'mx-auto flex h-full w-full max-w-sm flex-col items-center justify-center px-8 smTablet:px-2'}>
        <LoginImage />
        <LoginForm />
      </div>
    </div>
  );
};
