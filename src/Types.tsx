
export type projectType = {
    title: string
    description: string
    github: string
}

export interface UserProfile {
    firstName: string
    lastName: string
    contact: string
    dob: string
    city: string
    gender: string
    about: string
    skills: string[]
    projects: projectType[]
    links: string[]
}
