import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

type TProps = React.FC<{
  isError: boolean;
  message: string;
  name?: string;
}>;

export const LoginInputError: TProps = ({ isError, message }) => {
  if (!isError) return;

  return (
    <div className={'-my-2 flex w-full flex-col gap-2 rounded-lg bg-rose-100 px-4 py-2 text-xs text-rose-400'}>
      <div className={'flex items-center justify-start gap-2'}>
        <ExclamationCircleIcon className={'h-[20px] w-[20px] flex-shrink-0'} />
        <p>{message}</p>
      </div>
    </div>
  );
};
