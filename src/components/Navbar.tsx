"use client";

import React from 'react'

import { signIn, signOut, useSession } from "next-auth/react"

function Navbar() {
  const { data: session } = useSession()
  return (
    <header className='px-5 py-3 bg-white font-work-sans'>
      <nav className='flex justify-center items-center'>
        <h1 className='text-3xl text-black font-bold'>Hello</h1>
        { session ? <>
          Signed in as {session.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </> : <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </> }
      </nav>
    </header>
  )
}

export default Navbar