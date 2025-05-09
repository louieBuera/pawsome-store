import { getServerSession, Session } from 'next-auth';
import React from 'react'
import { authOptions } from '@/auth';

async function SessionChecker(
  { children }: Readonly<{ children: React.ReactNode }>
) {
  const session: Session | null = await getServerSession(authOptions);
  if(!session || !session.user){
    return null;
  }
  return children
}

export default SessionChecker