import { Connect } from '@/db/Connection';
import User from '@/db/models/UserSchema';
import React from 'react'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    console.log(id);
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <form action={async()=>{
                'use server'
                await Connect();
                const user=await User.findByIdAndUpdate(id,{verified:true})
                console.log(user);
            }}>
                <button type='submit'
                className='p-2 bg-blue-800'>Verify Your Email</button>
            </form>
        </div>
    )
}
export default page