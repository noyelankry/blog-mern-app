import React from 'react'
import { IndexPage } from './IndexPage'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div className='w-full h-screen bg-[#094c55] text-gray-300'>
            <h1 className='text-[7rem] font-bold text-center pt-[15rem] text-[#ffd146]'>RECIPES</h1>
            <div className=''>
                <div className='text-center'>
                    <p className='text-[3rem] font-bold inline' >WELCOME</p>
                    <p className='py-2 ml-3 text-[24px] inline' >to recipes blog</p>
                </div>
                <div className='text-center'>
                    <p className='py-2 ml-3 text-[24px]' >It's made for sharing yummy recipes</p>
                    <Link to='IndexPage'
                        smooth={true}
                        duration={500}
                        className='py-2 ml-3 text-[24px] text-red-400 font-bold flex flex-row justify-center cursor-pointer' >
                        <p>view recent posts</p>
                        <HiArrowNarrowRight className='ml-2 mt-2 rotate-90' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home