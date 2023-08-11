import React, { useState } from 'react'
import { BiSolidBookBookmark } from 'react-icons/bi'
import { useEffect } from 'react'

const Navbar = () => {
    const [username, setUsername] = useState(null)
    useEffect(() => {
        fetch("http://localhost:4000/user/profile", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            res.json().then(userData => {
                setUsername(userData.username)
            })
        })
    }, [])

    const logout = () => {
        fetch("http://localhost:4000/user/logout", {
            method: 'POST',
            credentials: 'include'
        })
        setUsername(null)
    }

    return (
        <div name="nav" className='fixed bg-[#094c55] text-gray-300'>
            <nav className='flex flex-row'>
                <BiSolidBookBookmark className='text-[#ffd146] text-[3rem] m-2' />
                <span className='text-2xl mr-2 my-3 py-1 font-extrabold'>
                    <a href="http://localhost:3000" >RecipeBLOG</a>
                </span>
                <ul className='flex flex-row'>
                    {username && (
                        <>
                            <li className='text-xl mx-3 my-3 py-2'>
                                <a onClick={logout} >Logout ({username})</a>
                            </li>
                            <li className='text-xl mx-3 my-3 border-[#094c55'>
                                <button className='rounded-lg border-[3px] border-red-400 px-4 py-1'>
                                    <a href="http://localhost:3000/post" >Create a new post</a>
                                </button>
                            </li>
                        </>
                    )}
                    {!username && (
                        <>
                            <li className='text-xl mx-3 my-3 py-2'>
                                <a href="http://localhost:3000/login" >Login</a>
                            </li>
                            <li className='text-xl mx-3 my-3 border-[#094c55'>
                                <button className='rounded-lg border-[3px] border-red-400 px-4 py-1'>
                                    <a href="http://localhost:3000/register" >Register</a>
                                </button>
                            </li>

                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar