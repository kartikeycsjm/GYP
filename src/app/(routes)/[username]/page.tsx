import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Globe, Github, Mail, MapPin, Calendar, User } from "lucide-react"
import { fetchProfile } from "./action"
import { auth } from "@/auth"
import UserModel from "@/db/models/UserSchema";

const fetchData = async (username: string) => {
    try {
        const x = await fetchProfile(username)
        const data = x.data
        const Main = data ? JSON.parse(data) : null
        return Main
    } catch (error) {
        console.error("Error fetching data:", error)
        return null
    }
}

const Page = async ({
    params,
}: {
    params: Promise<{ username: string }>
}) => {
    const username = (await params).username
    const profile = await fetchData(username)
    let image='';
    const getImage = async () => {
        const data = await UserModel.findById(profile.id);
        image=data.image;
    }
    await getImage();
    const session = await auth()
    if (!profile) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header/Hero Section */}
            <div className="bg-blue-300 text-black py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                            <Image
                                src={image || `/placeholder.svg?height=160&width=160`}
                                alt={profile.firstName || profile.username || "Profile"}
                                width={160}
                                height={160}
                                quality={100}
                                priority
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl font-bold mb-2">
                                {profile.firstName || ""} {profile.lastName || ""}
                            </h1>
                            <p className="text-xl text-gray-300 mb-4">@{profile.username || ""}</p>
                            <p className="max-w-2xl text-gray-300 mb-6">{profile.about || ""}</p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                {profile.contact && (
                                    <div className="flex items-center gap-1">
                                        <Mail className="w-4 h-4" />
                                        <span>{profile.contact}</span>
                                    </div>
                                )}
                                {profile.city && (
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{profile.city}</span>
                                    </div>
                                )}
                                {profile.dob && (
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{profile.dob}</span>
                                    </div>
                                )}
                                {profile.gender && (
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        <span>{profile.gender}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-5xl px-4 py-12">
                {/* Skills Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {profile.skills &&
                            profile.skills.map((skill: string, index: number) => (
                                <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        {(!profile.skills || profile.skills.length === 0) && <p className="text-gray-500">No skills listed yet.</p>}
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {profile.projects &&
                            profile.projects.map(
                                (project: { title: string; description: string; github?: string }, index: number) => (
                                    <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-gray-600 mb-4">{project.description}</p>
                                            {project.github && (
                                                <Link
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-black hover:underline"
                                                >
                                                    <Github className="w-4 h-4" />
                                                    View on GitHub
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                ),
                            )}
                        {(!profile.projects || profile.projects.length === 0) && (
                            <p className="text-gray-500 col-span-2">No projects added yet.</p>
                        )}
                    </div>
                </section>

                {/* Links Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Links</h2>
                    <div className="flex flex-col gap-3">
                        {profile.links &&
                            profile.links.map((link: string, index: number) => (
                                <Link
                                    key={index}
                                    href={link.startsWith("http") ? link : `https://${link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-black hover:underline"
                                >
                                    <Globe className="w-4 h-4" />
                                    {link}
                                </Link>
                            ))}
                        {(!profile.links || profile.links.length === 0) && <p className="text-gray-500">No links added yet.</p>}
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-100 py-6 border-t">
                <div className="container mx-auto max-w-5xl px-4 text-center">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} {profile.firstName || profile.username || "User"}'s Portfolio • Created with
                        PortfolioGen
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Page
