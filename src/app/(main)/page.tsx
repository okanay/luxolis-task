import { Login } from '@/components/login';
import { Authenticated } from '@/components/authenticated';

type TProps = {
  searchParams: { status: string } | null;
};

export default function Home({ searchParams }: TProps) {
  const status = searchParams?.status;
  return <main>{status === 'authenticated' ? <Authenticated /> : <Login />}</main>;
}
