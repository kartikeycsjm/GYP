import React from 'react'
import Link from 'next/link'
import { auth, signOut } from '@/auth';
import { Briefcase, ChevronRight, Code, Cpu, Globe, Layers, Palette, Sparkles } from "lucide-react"

const Header = async () => {
    const session = await auth();
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <Briefcase className="h-6 w-6" />
                <span>PortfolioGen</span>
            </Link>
            <div className="flex items-center gap-4">
                {!session ? <>
                    <Link href="/signin">
                        <button className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">
                            Sign in
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button className="px-4 py-2 text-sm font-medium bg-black text-white hover:bg-gray-800 rounded-md transition-colors">
                            Sign up
                        </button>
                    </Link>
                </> :
                    <form className='w-[100px] flex items-center justify-between'
                        action={async () => {
                            'use server'
                            await signOut()
                        }}>
                        <button type='submit' className="px-4 py-2 text-sm font-medium bg-black 
                        text-white hover:bg-gray-800 rounded-md transition-colors">
                            Sign out
                        </button>
                    </form>
                }
            </div>
        </header>
    )
}

export default Header