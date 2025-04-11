'use client'
import { ImCross } from "react-icons/im";
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";

type AddLinksProps = {
    link: string
    links: string[]
    setLink: (value: string) => void
    setLinks: (value: string[]) => void
}

const AddLink = ({ link, links, setLink, setLinks }: AddLinksProps) => {
    let [openLinkInput, setOpenLinkInput] = useState(false)
    const addLink = () => {
        let s = link.trim();
        if (s.length > 0) {
            let totalLinks = [s, ...links]
            setLinks([...totalLinks])
            setOpenLinkInput(false)
            setLink('')
        }
        else {
            alert('please add Link')
        }
    }
    const del = (ind: number) => {
        let sk = links.filter((item, index) => (
            index != ind
        ))
        setLinks(sk)
    }
    return (
        <div className='flex flex-col mx-5'>
            <label
                htmlFor=""
                className='m-2 font-semibold text-[18px]'>
                Links
            </label>
            {links.length > 0
                &&
                <div className='m-2 p-2 
                rounded-lg bg-[#000625] border
                border-[rgba(212,205,202)]
                focus:border-[blue]'>
                    {links.map((item, index) => (
                        <div key={index} className='m-2
                        flex justify-between'>
                            <a href={item}
                                className='text-blue-400 
                                    underline' target="_blank"
                                rel="noopener noreferrer">
                                {item}
                            </a>
                            <button onClick={() => del(index)} className='m-2 text-[20px]
                            text-red-700'>
                                <MdDelete />
                            </button>
                        </div>
                    ))}
                </div>
            }

            <button onClick={
                () => setOpenLinkInput(!openLinkInput)}
                className='p-2 w-[130px] border 
            border-[rgba(212,205,202)]
            m-2 rounded-lg'>
                <span className='text-[20px]'>+</span> Add Link
            </button>
            {
                openLinkInput &&
                <div className='inset-0 fixed 
                backdrop-blur-sm flex
                items-center justify-center'>
                    <div className='bg-blue-500 flex p-5 
                    flex-col justify-start rounded-lg'>
                        <button
                            onClick={
                                () => setOpenLinkInput(false)}
                            className='relative 
                                 cursor-pointer
                                 left-[300px] top-[-5px]'>
                            <ImCross />
                        </button>
                        <input type="text"
                            placeholder='https://kartikeymishra.vercel.app'
                            value={link}
                            onChange={
                                (e) => setLink(e.target.value)
                            }
                            className='w-[300px] m-2 p-2 
                            rounded-lg bg-[#000625]
                            border-[rgba(212,205,202)]
                            focus:outline-none duration-300 
                            focus:border-[blue]
                             placeholder:font-extralight' />
                        <button onClick={addLink}
                            className='p-2
                            w-[130px] 
                          border-[rgba(212,205,202)]
                            m-2 rounded-lg bg-green-500
                            text-black font-bold'>
                            Add
                        </button>
                    </div>
                </div>
            }
        </div >
    )
}

export default AddLink