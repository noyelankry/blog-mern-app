import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatISO9075 } from "date-fns";
import { BiTimeFive, BiFork } from 'react-icons/bi'

const Post = () => {
    const [postData, setPostData] = useState('')
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(res => {
                res.json().then(postData => {
                    setPostData(postData)
                })
            })
    }, [])

    if (!postData) return ''

    return (
        <div className='w-full h-screen bg-[#094c55] text-gray-300 flex justify-center'>
            <div className='page-container md:w-[1000px] max-w-[1000px] '>
                <div className='text-center mt-20'>
                    <p className='inline text-red-400 text-xl'>DATE ADDED: </p>
                    <time className='text-xl'>{formatISO9075(new Date(postData.createdAt))}</time>
                </div>
                <div className='img-container w-full mt-5'>
                    <img
                        src={`http://localhost:4000/${postData.image}`}
                        alt="recipe cover image"
                        className='object-cover w-full h-[400px] '
                    />
                </div>
                <h1 className='text-[5rem] font-bold text-center text-[#ffd146]'>{postData.title}</h1>
                <div className='content-container mt-5 align-items-center max-w-1000px'>
                    <div className='bg-white bg-opacity-20 rounded-xl'>
                        <p className='text-xl p-1'>
                            <BiFork className='text-2xl inline mr-2' />
                            Chef Level: {postData.chefLevel}
                        </p>
                        <p className='text-xl p-1'>
                            <BiTimeFive className='text-2xl inline mr-2' />
                            Estimated Preparation Time: {postData.estimatedPreparationTime}
                        </p>
                    </div>

                    <h2 className='text-[3rem] font-bold text-center pt-[rem] text-[#ffd146] my-5'>Ingredients</h2>
                    <div
                        className="content text-xl bg-white bg-opacity-20 rounded-xl p-3"
                        dangerouslySetInnerHTML={{ __html: postData.content }} />
                    <h2 className='text-[3rem] font-bold text-center pt-[rem] text-[#ffd146] my-5'>Preparation</h2>
                    <div
                        className="content text-xl bg-white bg-opacity-20 rounded-xl p-3"
                        dangerouslySetInnerHTML={{ __html: postData.content }} />
                    <h3 className='text-[3rem] font-bold text-center pt-[rem] text-red-400 my-5'>ENJOY :)</h3>
                </div>
            </div>
        </div>
    )
}

export default Post