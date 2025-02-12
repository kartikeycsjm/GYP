'use client'
import React, { useRef, useState } from 'react'
import { SignUp } from './action';
import { Loader2 } from "lucide-react";
const SignUpComponent = () => {
    const formref = useRef<HTMLFormElement>(null)
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const res = await SignUp(formdata)
        setMessage(res.message);
        setLoading(false);
        formref.current?.reset()
    }
    return (
        <div className='w-full'>
            <form ref={formref} onSubmit={handleSubmit} className='mx-5 flex flex-col items-center'>
                <div className='w-full flex items-center justify-center m-5 gap-[20px]'>
                    <input type="text" required
                        name='firstName' placeholder='firstName'
                        className='w-[165px] p-3 rounded-md
                        border-[2px]
                        border-[#000625]
                        focus:outline-none
                         focus:border-[#00FFFF]'/>
                    <input type="text" required
                        name='lastName' placeholder='lastName'
                        className='w-[165px] p-3 rounded-md
                        border-[2px]
                        border-[#000625]
                        focus:outline-none
                         focus:border-[#00FFFF]' />
                </div>
                <input type="email" required
                    name='email' placeholder='email'
                    className='w-[350px] p-3 m-5 rounded-md
                    border-[2px]
                        border-[#000625]
                        focus:outline-none
                         focus:border-[#00FFFF]' />
                <input type="password" required
                    name='password' placeholder='password'
                    className='w-[350px] p-3 m-5 rounded-md
                           border-[2px]
                        border-[#000625]
                        focus:outline-none
                         focus:border-[#00FFFF]' />
                <button type='submit'
                    className='w-[350px] p-3 m-5 rounded-md bg-green-700
                duration-300 text-center
                text-white border-[2px] border-[#000625]
                hover:border-[#00FFFF]
                '>
                    {loading ?
                        <>
                            <Loader2 className='animate-spin' />
                            Signing Up
                        </>
                        :
                        'Sign Up'
                    }
                </button>
                <p className='p-3 m-5 w-[350px] text-center'>
                    {message}
                </p>
            </form>
        </div>
    )
}

export default SignUpComponent