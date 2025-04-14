import { auth } from '@/auth'
import LandingPage from '@/components/landing-page';
import Link from 'next/link';
const Page = async () => {
  const session = await auth();
  
  if (!session) {
    return <LandingPage />
  }
  
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <h1 className='text-[20px]'>
        Welcome back, {session.user?.name}!
        <Link className='flex text-[15px] underline'
        href='/create-profile'>Create or Edit Your Proifle</Link>
      </h1>
    </div>
  )
}

export default Page
