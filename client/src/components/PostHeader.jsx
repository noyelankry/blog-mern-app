import React, { useContext } from 'react'
import { formatISO9075 } from "date-fns";
import { BiTimeFive, BiFork } from 'react-icons/bi'
import { GrEdit } from 'react-icons/gr'
import UserContext from './UserContext';

const PostHeader = ({ postData }) => {
    const { userInfo } = useContext(UserContext)

    return (
        <div>
            <div className='text-center mt-20'>
                <p className='inline text-red-400 text-xl'>DATE ADDED: </p>
                <time className='text-xl'>{formatISO9075(new Date(postData.createdAt))}</time>
                <p className='text-[16px]'>posted by @{postData.author.username}</p>
                {userInfo && postData.author._id === userInfo.id && (
                    <div className='flex flex-col items-center justify-center m-3'>
                        <button href="" className='text-slate-900 flex flex-row bg-gray-300 hover:bg-slate-400 rounded-lg'>
                            <p className='p-2 pr-1 font-bold'>
                                EDIT POST
                            </p>
                            <GrEdit className='text-2xl my-2 mr-2' />
                        </button>
                    </div>
                )}
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