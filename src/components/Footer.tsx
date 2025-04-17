import React from 'react'
import Link from 'next/link'
import { Briefcase, ChevronRight, Code, Cpu, Globe, Layers, Palette, Sparkles } from "lucide-react"

const Footer = () => {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <p className="text-xs text-gray-500">© {new Date().getFullYear()} PortfolioGen. All rights reserved. Created by Kartikey Mishra
                </p>
            </div>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link href="/terms" className="text-xs hover:underline underline-offset-4">
                    Terms of Service
                </Link>
                <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
                    Privacy Policy
                </Link>
                <Link href="https://kartikeymishra.vercel.app/contact" className="text-xs hover:underline underline-offset-4">
                    Contact Me
                </Link>
            </nav>
        </footer>
    )
}

export default Footer