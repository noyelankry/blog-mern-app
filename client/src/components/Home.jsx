import React from 'react'

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
                    <p className='py-2 ml-3 text-[30px] text-red-400 font-bold' >Enjoy!</p>
                </div>
            </div>
        </div>
    )
}

export default Home