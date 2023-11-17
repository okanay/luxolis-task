import { Login } from '@/components/login';
import { Authenticated } from '@/components/authenticated';

type TProps = {
  searchParams: { status: string } | null;
};

export default function Home({ searchParams }: TProps) {
  const render = () => {
    const status = searchParams?.status;

    if (status === 'authenticated') return <Authenticated />;
    else return <Login />;
  };

  return <main>{render()}</main>;
}
