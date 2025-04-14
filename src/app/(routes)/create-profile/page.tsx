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
        please login first <Link href={'signin'}>Login</Link>
      </div>
    )
  }
  return (
    <div>
      <Create />
    </div>
  )
}

export default page