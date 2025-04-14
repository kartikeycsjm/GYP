import Link from 'next/link'
import { auth } from '@/auth'
import React from 'react'
import Create from './Create'
const page = async () => {
  const session = await auth();
  if (!session) {
    return (
      <div className='w-full h-screen
      flex items-center justify-center'>
        please login first 
        <Link 
        className='flex text-[15px] underline' 
        href={'signin'}>Login</Link>
      </div>
    )
  }
  return (
    <div className='flex flex-col'>
      <h1 className='mx-5 my-2 text-[20px] font-bold'>{session.user?.name}</h1>
      <Create />
    </div>
  )
}

export default page