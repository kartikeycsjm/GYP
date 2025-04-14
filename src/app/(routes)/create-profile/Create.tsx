'use client'
import React, { useEffect, useState } from 'react'
import AddSkill from './AddSkill'
import AddProject from './AddProject'
import AddLinks from './AddLinks'
import { saveProfile } from './action'
import { fetchProfile } from './action'
import { projectType } from '@/Types'
import { UserProfile } from '@/Types'
import Link from 'next/link'
const Page = () => {
  const [projects, setProjects] = useState<projectType[]>([])
  const [project, setProject] = useState<projectType>({
    title: '',
    description: '',
    github: '',
  })

  const [links, setLinks] = useState<string[]>([])
  const [link, setLink] = useState('')

  const [skills, setSkills] = useState<string[]>([])
  const [skill, setSkill] = useState('')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contact, setContact] = useState('')
  const [city, setCity] = useState('')
  const [gender, setGender] = useState('')
  const [about, setAbout] = useState('')
  const [dob, setDob] = useState('')
  let [loading, setLoading] = useState(false);
  let [webLink, setWebLink] = useState('');
  const handleSubmit = async () => {
    setLoading(true)
    if (!firstName || !lastName || !contact) {
      alert('Please fill in all required fields')
      return
    }
    let trimmedFname = firstName.trim()
    let trimmedLname = firstName.trim();
    const data: UserProfile = {
      firstName,
      lastName,
      contact,
      dob,
      city,
      gender,
      about,
      skills,
      projects,
      links,
    }
    await saveProfile(data)
    setLoading(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      const x = await fetchProfile();
      let data = x.data;
      let Main = data ? JSON.parse(data) : null;
      console.log(Main);

      if (Main) {
        setFirstName(Main.firstName || '');
        setLastName(Main.lastName || '');
        setContact(Main.contact || '');
        setDob(Main.dob || '');
        setCity(Main.city || '');
        setGender(Main.gender || '');
        setAbout(Main.about || '');
        setSkills(Main.skills || []);
        setProjects(Main.projects || []);
        setLinks(Main.links || []);
        setWebLink(Main.username)
      }
    };
    fetchData();
  }, [])

  return (
    <div className='my-5 w-full min-h-screen'>

      <div className='w-[90%] border rounded-lg m-auto flex flex-col md:w-[40%]'>

        <div className='flex flex-col gap-3 mx-5 mt-5 md:flex-row justify-between'>
          <div>
            <label className='m-2 text-[18px] font-semibold'>First Name</label>
            <input
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='w-[200px] m-2 p-2 rounded-lg bg-[#000625] border border-[rgba(212,205,202)] focus:outline-none duration-300 focus:border-[blue]'
            />
          </div>
          <div>
            <label className='m-2 font-semibold text-[18px]'>Last Name</label>
            <input
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='w-[200px] m-2 p-2 rounded-lg bg-[#000625] border border-[rgba(212,205,202)] focus:outline-none duration-300 focus:border-[blue]'
            />
          </div>
        </div>

        <div className='flex flex-col mx-5'>
          <label className='m-2 font-semibold text-[18px]'>About</label>
          <textarea
            placeholder='Write about yourself'
            value={about}
            rows={3}
            onChange={(e) => setAbout(e.target.value)}
            className='m-2 resize-none p-2 rounded-lg bg-[#000625] border 
            border-[rgba(212,205,202)] focus:outline-none duration-300 focus:border-[blue]'
          ></textarea>
        </div>

        <div className='flex flex-col mx-5'>
          <label className='m-2 font-semibold text-[18px]'>Contact No.</label>
          <input
            type='tel'
            placeholder='Write contact number'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className='m-2 p-2 rounded-lg bg-[#000625] border border-[rgba(212,205,202)] focus:outline-none duration-300 focus:border-[blue]'
          />
        </div>

        <div className='flex flex-col mx-5'>
          <label className='m-2 font-semibold text-[18px]'>Date of Birth</label>
          <input
            type='date'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className='m-2 p-2 rounded-lg bg-[#000625] border border-[rgba(212,205,202)] focus:outline-none duration-300 focus:border-[blue]'
          />
        </div>

        <div className='flex flex-col mx-5'>
          <label className='m-2 font-semibold text-[18px]'>Current City</label>
          <input
            type='text'
            placeholder='Write your city name'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='m-2 p-2 rounded-lg bg-[#000625] border border-[rgba(212,205,202)] focus:outline-none duration-300 focus:border-[blue]'
          />
        </div>

        <div className='flex flex-col mx-5'>
          <label className='m-2 font-semibold text-[18px]'>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className='m-2 p-2 rounded-lg 
            bg-[#000625] border 
            border-[rgba(212,205,202)] 
            text-white focus:outline-none 
            duration-300 focus:border-[blue]'
          >
            <option value=''>Select Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
          </select>
        </div>

        {/* Skill Section */}
        <AddSkill
          skills={skills}
          setSkills={setSkills}
          skill={skill}
          setSkill={setSkill}
        />

        {/* Project Section */}
        <AddProject
          projects={projects}
          setProjects={setProjects}
          project={project}
          setProject={setProject}
        />

        {/* Links Section */}
        <AddLinks
          link={link}
          setLink={setLink}
          links={links}
          setLinks={setLinks}
        />

        <button
          onClick={handleSubmit}
          className='p-2 m-7 rounded-lg bg-green-600 font-bold'>
          {loading ? 'Saving' : 'Save'}
        </button>
      </div>
      <div className=''>
        <Link className='underline text-[15px]'
          href={`http://localhost:3000/${webLink}`}>
          Visit Your Portfolio
        </Link>
      </div>

    </div>
  )
}

export default Page
