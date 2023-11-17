import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export const LoginImage: React.FC<{}> = props => {
  return (
    <div className={'mb-12 flex h-[140px] w-[160px] flex-col items-center justify-center'}>
      <ShoppingBagIcon className={'h-full w-full text-zinc-50'} />
    </div>
  );
};
