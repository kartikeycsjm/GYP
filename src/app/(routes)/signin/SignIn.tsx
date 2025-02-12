'use client'
import React, { useRef, useState } from 'react'
import { LogInCredentials } from './action';
import { Loader2 } from "lucide-react";
const SignInComponent = () => {
    const formref = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const res = await LogInCredentials(formdata);
        setLoading(false);
        let error = res.error.substring(0, res.error.indexOf('.'))
        setMessage(error)
        console.log(res);
        formref.current?.reset()
    }
    return (
        <div className='w-full'>
            <form ref={formref} onSubmit={handleSubmit} className='mx-5 flex flex-col items-center'>
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
                            Signing In
                        </> :
                        'Sign In'}
                </button>
            </form>
            <p className='p-3 m-5 w-[350px] text-center'>
                {message}
            </p>
        </div>
    )
}

export default SignInComponent