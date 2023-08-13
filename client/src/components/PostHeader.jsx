import React from 'react'
import { formatISO9075 } from "date-fns";
import { BiTimeFive, BiFork } from 'react-icons/bi'

const PostHeader = ({ postData }) => {
    return (
        <div>
            <div className='text-center mt-20'>
                <p className='inline text-red-400 text-xl'>DATE ADDED: </p>
                <time className='text-xl'>{formatISO9075(new Date(postData.createdAt))}</time>
            </div>
            <div className='img-container w-full mt-5'>
                <img
                    src={`http://localhost:4000/${postData.image}`}
                    alt="recipe cover"
                    className='object-cover w-full h-[400px] '
                />
            </div>
            <h1 className='text-[4rem] font-bold text-center text-[#ffd146] uppercase'>{postData.title}</h1>
            <div className='text-center'>
                <p className='text-xl p-1'>
                    <BiFork className='text-2xl inline mr-2' />
                    Chef Level: {postData.chefLevel}
                </p>
                <p className='text-xl p-1'>
                    <BiTimeFive className='text-2xl inline mr-2' />
                    Estimated Preparation Time: {postData.estimatedPreparationTime}
                </p>
            </div>
        </div>
    )
}

export default PostHeader