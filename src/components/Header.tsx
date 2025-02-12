import React from 'react'
import Link from 'next/link'
import { auth, signOut } from '@/auth';
const Header = async () => {
    const session = await auth();
    return (
        <header className='w-full min-h-[70px] flex items-center bg-[#0000008f] sticky top-0
         backdrop-blur-md'>
            <div className='mx-4 flex w-full justify-between'>
                <h1 className='text-[2.5rem] font-bold'>
                    GYP
                </h1>
                    {!session ?
                        <div className='w-[140px] flex items-center justify-between'>
                            <Link className='px-2 py-1 duration-300 hover:underline'
                                href={'/signin'}>Sign In</Link>
                            <Link className='px-2 py-1 duration-300 hover:underline '
                                href={'signup'}>Sign Up</Link>
                        </div>
                        :
                        <form className='w-[80px] flex items-center justify-between'
                        action={async () => {
                            'use server'
                            await signOut()
                        }}>
                            <button type='submit'
                                className='px-2 py-1 duration-300 hover:underline'>
                                Sign Out
                            </button>
                        </form>
                    }
                </div>
        </header>
    )
}

export default Header