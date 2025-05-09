"use client";

import React from 'react'
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { signIn, signOut, useSession } from "next-auth/react";

function SessionButton({ className } : { className?: string }) {
  const { data: session } = useSession()
  if(session) return <div className={className}>
    <em className='font-light m-2'>Signed in as {session.user?.name}</em>
    <Image src={session.user?.image ? session.user?.image : ''} alt="logo" width={100} height={100}
      className="h-auto w-10 mr-2"
    />
    <button onClick={() => {
      signOut();
      redirect('/');
    }}>Sign out</button>
  </div>
  return <div className={className}>
    <em className='font-light m-2'>Not signed in</em>
    <button onClick={() => signIn()}>Sign in</button>
  </div>;
}

export default SessionButton