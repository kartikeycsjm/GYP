import { auth } from '@/auth'
import React from 'react'
import GoogleSignin from '@/components/GoogleSignin'
import CredentialSignUp from './SignUp'
import { redirect } from 'next/navigation'
const page = async () => {
  const session=await auth();
  if(session){
    redirect('/')
  }
  return (
    <div className='w-full min-h-screen flex flex-col items-center'>
      <h1 className="text-3xl 
            font-bold text-center m-8">
        Create an Account
      </h1>
      <p className="text-center 
              text-muted-foreground mb-3">
        Join our community and start your
        journey with us today.
      </p>
      <GoogleSignin />
      <CredentialSignUp />
    </div>
  )
}
export default page