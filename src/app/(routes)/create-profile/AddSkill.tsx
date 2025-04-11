'use client'
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { ImCross } from 'react-icons/im'

type AddSkillProps = {
    skill: string
    skills: string[]
    setSkill: (value: string) => void
    setSkills: (value: string[]) => void
}

const AddSkill = ({ skill, skills, setSkill, setSkills }:
    AddSkillProps) => {
    const [openSkillInput, setOpenSkillInput] = useState(false)

    const addSkill = () => {
        const trimmed = skill.trim()
        if (!trimmed) {
            alert('Please enter a skill')
            return
        }
        setSkills([trimmed, ...skills])
        setSkill('')
        setOpenSkillInput(false)
    }

    const deleteSkill = (index: number) => {
        const updatedSkills = skills.filter((_, i) => i !== index)
        setSkills(updatedSkills)
    }

    return (
        <div className='flex flex-col mx-5'>
            <label className='m-2 font-semibold text-[18px]'>Skills</label>

            {skills.length > 0 && (
                <div className='m-2 p-2 rounded-lg bg-[#000625] border border-[rgba(212,205,202)]'>
                    {skills.map((item, index) => (
                        <div key={index} className='m-2 flex justify-between items-center'>
                            <p className='text-white'>{item}</p>
                            <button
                                onClick={() => deleteSkill(index)}
                                className='text-[20px] text-red-500'
                            >
                                <MdDelete />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <button
                onClick={() => setOpenSkillInput(true)}
                className='p-2 w-[130px] border border-[rgba(212,205,202)] m-2 rounded-lg'
            >
                <span className='text-[20px]'>+</span> Add Skill
            </button>

            {openSkillInput && (
                <div className='fixed inset-0 backdrop-blur-sm flex items-center justify-center z-10'>
                    <div className='bg-blue-500 flex flex-col p-5 rounded-lg relative'>
                        <button
                            onClick={() => setOpenSkillInput(false)}
                            className='absolute top-2 right-2 text-white text-lg'
                        >
                            <ImCross />
                        </button>

                        <input
                            type='text'
                            placeholder='e.g. JavaScript'
                            value={skill}
                            onChange={(e) => setSkill(e.target.value)}
                            className='w-[300px] m-2 p-2 rounded-lg bg-[#000625] border border-[rgba(212,205,202)] focus:outline-none focus:border-blue-400 text-white placeholder:font-extralight'
                        />

                        <button
                            onClick={addSkill}
                            className='p-2 w-[130px] m-2 rounded-lg bg-green-500 text-black font-bold self-center'
                        >
                            Add
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddSkill
