import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp'
import PostHeader from "./PostHeader"

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
                <PostHeader postData={postData} />

                <div className='content-container mt-5 align-items-center max-w-1000px'>
                    <h2 className='text-[2rem] font-bold text-center pt-[rem] text-[#ffd146] my-5 uppercase'>Ingredients</h2>
                    <div className="content text-xl rounded-xl p-3" >
                        <ul className='border-t-[1px] border-gray-300 border-dashed'>
                            {JSON.parse(postData.ingredients).map(({ name, servings, servingSize }, index) => {
                                return (
                                    <div className='flex flex-row border-b-[1px] border-gray-300 border-dashed p-2'>
                                        <Checkbox icon={<ShoppingCartSharpIcon />} checkedIcon={<CheckCircleSharpIcon className='text-gray-200' />} />
                                        <p className='text-[#ffd146] text-3xl pr-2 font-Caveat'>{servings} {servingSize} </p>
                                        < li className='text-xl pl-1 pt-2 uppercase font-bold' >
                                            {name}
                                        </li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>


                    <h2 className='text-[2rem] font-bold text-center pt-[rem] text-[#ffd146] my-5 uppercase'>Preparation</h2>
                    <div
                        className="content text-xl bg-white bg-opacity-20 rounded-xl p-3"
                        dangerouslySetInnerHTML={{ __html: postData.content }} />
                    <h3 className='text-[2rem] font-bold text-center pt-[rem] text-red-400 my-5 uppercase pb-20'>ENJOY :)</h3>
                </div>
            </div >
        </div >
    )
}

export default Post