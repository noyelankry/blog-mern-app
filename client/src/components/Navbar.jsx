import React from 'react'
import { BiSolidBookBookmark } from 'react-icons/bi'

const Navbar = () => {
    return (
        <div className='fixed bg-[#094c55] text-gray-300'>
            <nav className='flex flex-row'>
                <BiSolidBookBookmark className='text-[#ffd146] text-[3rem] m-2' />
                <ul className='flex flex-row'>
                    <li className='text-xl mx-3 my-3 py-2'>
                        <a href="http://localhost:3000" >Home</a>
                    </li>
                    <li className='text-xl mx-3 my-3 py-2'>
                        <a href="http://localhost:3000/login" >Login</a>
                    </li>
                    <li className='text-xl mx-3 my-3 border-[#094c55'>
                        <button className='rounded-lg border-[3px] border-red-400 px-4 py-1 mt-1'>
                            <a href="http://localhost:3000/register" >Register</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar