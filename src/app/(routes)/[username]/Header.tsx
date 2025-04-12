import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = ({ firstName, lastName, about }: {
    firstName: string,
    lastName: string, about: string
}) => {
    return (
        <div className='mx-5 min-h-screen
    md:mx-32 bg-[#000625]'>
            <header className='w-full min-h-[60vh]'>
                <div className='relative top-5 flex justify-between
                items-center'>
                    <h1 className='text-[40px] font-bold'>
                        {firstName + ' ' + lastName}
                    </h1>
                    <button className='px-2 
                    py-1 border rounded-lg'>
                        Follow
                    </button>
                </div>
                <h2 className='font-semibold my-5
                text-[31px]
                md:text-[55px] md:w-[900px]'>
                    {about}
                </h2>
                <div className='md:flex'>
                    <Link href={'/#footer'}
                        className='bg-[rgb(99,126,224)] mt-8
          block text-center border 
          border-[rgb(99,126,224)]
          text-white
          text-[18px] w-full py-2 
          rounded-lg duration-300
          hover:bg-[rgb(65,99,221)]
          md:w-[300px] md:my-3 font-[450]
          md:text-[25px]'>
                        Get in touch
                    </Link>
                </div>
                <div className="size-[350px] rounded-lg my-8 md:size-[450px] relative">
                    <Image
                        src="/dp.jpg"
                        alt="Profile Picture"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <div className='flex w-[350px] justify-between'>
                    <p className='font-semibold'>22 followers</p>
                    <p>23 profile visit</p>
                </div>
            </header>


        </div>
    )
}

export default Header










