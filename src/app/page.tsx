import React from 'react'
import { auth } from '@/auth'
const page = async () => {
  const session = await auth();
  if (!session) {
    return (
      <div className='w-full min-h-screen
      flex items-center justify-center'>
        <h1 className='text-[40px]'>
          Pleas Sign Up or Sign In
        </h1>
      </div>
    )
  }
  return (
    <div className='w-full min-h-screen
    flex items-center justify-center'>
      <h1 className='text-[40px]'>
        {session.user?.name}
      </h1>
    </div>
  )
}

export default page