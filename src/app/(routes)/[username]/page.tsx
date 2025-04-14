import React from 'react'
import Header from './Header'
import Project from './_components/Project'
import { fetchProfile } from './action'
import { auth } from '@/auth'
const fetchData = async (username: string) => {
    const x = await fetchProfile(username);
    let data = x.data;
    let Main = data ? JSON.parse(data) : null;
    return Main;
}

const Page = async ({
    params,
}: {
    params: Promise<{ username: string }>
}) => {
    const username = (await params).username;
    const m = await fetchData(username);
    console.log(m);
    const session=await auth();

    return (
        <div className='w-full bg-[#000625]'>
            <Header
                firstName={m.firstName}
                lastName={m.lastName}
                about={m.about}
                image={session?.user?.image ?? ''}
            />
            <Project project={m.projects} />
            <footer id="footer">
                jhhj
            </footer>
        </div>
    )
}

export default Page;
