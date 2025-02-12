import { signIn } from '@/auth';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
const GoogleSignin = async () => {
    return (
        <form action={async () => {
            'use server'
            await signIn('google', { redirect: true, redirectTo: '/' })
        }}>
            <button className='my-12 px-5 py-2 text-[18px] flex items-center justify-center
            gap-3 font-bold bg-black duration-300 hover:bg-[rgba(0,0,0,0.3)]'>
                Sign In Using
                <FcGoogle className='inline text-[25px]' />
            </button>
        </form>
    )
};
export default GoogleSignin;