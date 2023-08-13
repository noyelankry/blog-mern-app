import React from 'react'
import { formatISO9075 } from "date-fns";
import { BiTimeFive } from 'react-icons/bi';

const PostSummary = ({ _id, title, summary, image, createdAt, author, estimatedPreparationTime }) => {
    return (
        <div className='text-gray-300 flex bg-gray-50 bg-opacity-40 rounded-xl m-5 p-2'>
            <div className="">
                <a href={`http://localhost:3000/post/${_id}`}>
                    <img src={'http://localhost:4000/' + image} alt="cover" className='h-[200px] mx-5 my-5 rounded-xl' />
                </a>
            </div>
            <div className="texts p-5 text-slate-800">
                <a href={`http://localhost:3000/post/${_id}`}>
                    <h2 className='text-[#ffd164] uppercase font-bold text-4xl mb-3'>{title}</h2>
                </a>
                <p className="info">
                    <p className="author font-bold">POSTED BY: {author.username}</p>
                    <time className="font-bold">DATE: {formatISO9075(new Date(createdAt))}</time>

                    <div className='font-bold'>
                        <BiTimeFive className='text-2xl inline mr-1' />
                        <p className='mt-1 inline'>
                            PREP TIME: {estimatedPreparationTime}
                        </p>
                    </div>
                </p>
                <p className="summary">{summary}</p>
            </div>
        </div>
    )
}

export default PostSummary