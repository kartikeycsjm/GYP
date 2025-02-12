import React from 'react'
import GoogleSignin from '@/components/GoogleSignin'
import SignIn from './SignIn'
import {redirect} from 'next/navigation'
import { auth } from '@/auth'
const page = async() => {
  const session=await auth();
  if(session){
    redirect('/')
  }
  return (
    <div className='w-full min-h-screen flex flex-col items-center'>
      <h1 className="text-3xl 
            font-bold text-center m-8">
        Welcome Back
      </h1>
      <p className="text-center 
              text-muted-foreground mb-3">
        Please Login.
      </p>
      <GoogleSignin />
      <SignIn />
    </div>
  )
}

export default page