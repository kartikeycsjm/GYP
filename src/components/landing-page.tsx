import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Briefcase, ChevronRight, Code, Cpu, Edit3, Eye, Globe, Layers, LayoutTemplate, LinkIcon, Palette, Share2, Sparkles, UserPlus } from "lucide-react"

const page = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Create your professional portfolio in minutes
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Showcase your skills, projects, and experience with a beautiful, customizable portfolio website.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link href="/signup">
                                    <button className="px-6 py-3 text-sm font-medium bg-black text-white hover:bg-gray-800 rounded-md transition-colors flex items-center gap-1">
                                        Get started <ChevronRight className="h-4 w-4" />
                                    </button>
                                </Link>
                                <Link href="/examples">
                                    <button className="px-6 py-3 text-sm font-medium border border-gray-300 hover:bg-gray-50 rounded-md transition-colors">
                                        View examples
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
                                <Image
                                    src="/dp.jpg"
                                    alt="Portfolio preview"
                                    fill
                                    className="object-contain rounded-lg shadow-2xl border"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">How It Works</div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                Create & Share Your Personalized Portfolio in Minutes
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Just sign up, fill in your details, and get a custom link to showcase your work, achievements, and contact info — no coding needed!
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                        <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                            <div className="p-2 bg-black/10 rounded-full">
                                <UserPlus className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold">Easy Signup</h3>
                            <p className="text-sm text-center text-gray-500">
                                Start by creating your free account. No technical skills required.
                            </p>
                        </div>

                        <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                            <div className="p-2 bg-black/10 rounded-full">
                                <Edit3 className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold">Fill In Your Details</h3>
                            <p className="text-sm text-center text-gray-500">
                                Add information about your skills, projects, social links, and more.
                            </p>
                        </div>

                        <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                            <div className="p-2 bg-black/10 rounded-full">
                                <LinkIcon className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold">Get a Unique Link</h3>
                            <p className="text-sm text-center text-gray-500">
                                Instantly receive your dynamic portfolio link — ready to share with anyone.
                            </p>
                        </div>

                        <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                            <div className="p-2 bg-black/10 rounded-full">
                                <Eye className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold">Public Profile</h3>
                            <p className="text-sm text-center text-gray-500">
                                Anyone can visit your portfolio page and learn about your experience.
                            </p>
                        </div>

                        <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                            <div className="p-2 bg-black/10 rounded-full">
                                <LayoutTemplate className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold">Auto-generated Layout</h3>
                            <p className="text-sm text-center text-gray-500">
                                Clean, professional layout built automatically from your inputs.
                            </p>
                        </div>

                        <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                            <div className="p-2 bg-black/10 rounded-full">
                                <Share2 className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold">Share Anywhere</h3>
                            <p className="text-sm text-center text-gray-500">
                                Use your custom URL in job applications, resumes, LinkedIn, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                Ready to showcase your work to the world?
                            </h2>
                            <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Join us and make portfolio with PortfolioGen
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/signup">
                                <button className="px-6 py-3 text-sm font-medium bg-white text-black hover:bg-gray-100 rounded-md transition-colors flex items-center gap-1">
                                    Create your portfolio <ChevronRight className="h-4 w-4" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page