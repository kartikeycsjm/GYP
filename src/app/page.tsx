import { auth } from '@/auth'
import LandingPage from '@/components/landing-page';
const Page = async () => {
  const session = await auth();
  
  if (!session) {
    return <LandingPage />
  }
  
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <h1 className='text-[40px]'>
        Welcome back, {session.user?.name}!
      </h1>
    </div>
  )
}

export default Page
