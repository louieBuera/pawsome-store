import { getServerSession, Session } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

async function Layout(
  { children }: Readonly<{ children: React.ReactNode }>
) {
  const session: Session | null = await getServerSession(authOptions);
  if(!session || !session.user){
    redirect('/api/auth/signin');
  }
  return children;
}

export default Layout