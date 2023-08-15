import React from 'react'
import { formatISO9075 } from "date-fns";
import { BiTimeFive } from 'react-icons/bi';
import { FaKeyboard, FaCalendarDay } from 'react-icons/fa'

const PostSummary = ({ _id, title, summary, image, createdAt, author, estimatedPreparationTime }) => {
    return (
        <div className='text-gray-300 lg:block md:flex rounded-xl m-5 p-2 md:shrink-0'>
            <div className="lg:w-full md:w-[30%]">
                <a href={`http://localhost:3000/post/${_id}`}
                    className='flex justify-center'>
                    <img
                        src={'http://localhost:4000/' + image} alt="cover"
                        className='object-cover mx-5 my-5 w-[90%] h-[300px] sm:h-[400px] rounded-xl' />
                </a>
            </div>
            <div className="p-5 text-[rem] ml-10 lg:ml-20">
                <a href={`http://localhost:3000/post/${_id}`}>
                    <h2 className='text-[#ffd146] uppercase font-bold text-4xl mb-3'>{title}</h2>
                </a>
                <div className="info">
                    <div className='flex pb-2'>
                        <FaKeyboard className='text-2xl mr-2' />
                        <p className="author font-bold">POSTED BY: @{author.username}</p>
                    </div>
                    <div className='flex pb-2'>
                        <FaCalendarDay className='text-2xl mr-2' />
                        <time className="font-bold">DATE: {formatISO9075(new Date(createdAt))}</time>
                    </div>

                    <div className='font-bold pb-1'>
                        <BiTimeFive className='text-2xl inline mr-2' />
                        <p className='mt-1 inline'>
                            PREP TIME: {estimatedPreparationTime}
                        </p>
                    </div>
                </div>
                <p className="summary">
                    {`${summary.slice(0, 50)}... `}
                    <a href={`http://localhost:3000/post/${_id}`} className='underline'>
                        read more
                    </a>
                </p>
            </div>
        </div>
    )
}

export default PostSummary