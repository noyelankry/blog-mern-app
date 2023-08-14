import React, { useContext } from 'react'
import { BiSolidBookBookmark } from 'react-icons/bi'
import { useEffect } from 'react'
import UserContext from './UserContext'

const Navbar = () => {
    const { setUserInfo, userInfo } = useContext(UserContext)
    useEffect(() => {
        fetch("http://localhost:4000/user/profile", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            res.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })
    }, [])

    const logout = () => {
        fetch("http://localhost:4000/user/logout", {
            method: 'POST',
            credentials: 'include'
        })
        setUserInfo(null)
    }

    const username = userInfo?.username
    const useremail = userInfo?.email

    return (
        <div name="nav" className='fixed bg-[#094c55] text-gray-300 w-full'>
            <nav className='flex flex-row'>
                <BiSolidBookBookmark className='text-[#ffd146] text-[3rem] m-2' />
                <span className='text-2xl mr-2 my-3 py-1 font-extrabold'>
                    <a href="http://localhost:3000" >RecipeBLOG</a>
                </span>
                <ul className='flex flex-row'>
                    {username && (
                        <>
                            <li className='text-xl mx-3 my-3 py-2'>
                                <a onClick={logout} >Logout @{username}</a>
                            </li>
                            <li className='text-xl mx-3 my-3 border-[#094c55'>
                                <button className='rounded-lg border-[3px] border-red-400 px-4 py-1'>
                                    <a href="http://localhost:3000/create-post" >Create a new post</a>
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