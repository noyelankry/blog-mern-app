import React, { useState } from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { BiTimeFive, BiFork } from 'react-icons/bi'
import Editor from './Editor'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [level, setLevel] = useState('')
    const [estimatedPrepatationTime, setEstimatedPrepatationTime] = useState('')
    const [files, setFiles] = useState([])

    const navigate = useNavigate()

    const createNewPost = async (ev) => {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('EPT', estimatedPrepatationTime);
        data.set('level', level);
        data.set('file', files[0]);

        console.log(files)

        ev.preventDefault();
        fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        }).then(res => {
            if (res.ok) {
                navigate('/')
            }
        })
    }

    return (
        <div className='w-full h-screen bg-[#094c55] text-black'>
            <h1 className='text-[2rem] font-bold text-center pt-[7rem] text-[#ffd146]'>CREATE A NEW POST</h1>
            <div className='flex flex-col items-center w-full h-[70%]'>
                <form
                    className='flex flex-col w-full md:max-w-[600px] mt-10'
                    onSubmit={createNewPost}>
                    <input
                        type="title"
                        name="title"
                        placeholder='Title'
                        className='text-black p-3 font-bold capitalize mb-3 rounded-lg'
                        value={title}
                        onChange={event => setTitle(event.target.value)} />
                    <input
                        type="text"
                        placeholder='Summary'
                        className='p-3 mb-3 rounded-lg'
                        value={summary}
                        onChange={event => setSummary(event.target.value)} />
                    <div className='flex w-full justify-items-stretch'>
                        <label htmlFor="chef-level" className='w-[50%] p-0'>
                            <BiFork className='absolute mr-2 mt-3 ml-2 pointer-events-none text-2xl' />
                            <input
                                type="dropdown"
                                id='chef-level'
                                placeholder='Chef Level'
                                className='bg-slate-300 p-3 rounded-lg w-full pl-10'
                                value={level}
                                onChange={event => setLevel(event.target.value)} />
                        </label>
                        <label htmlFor="estimated-time" className='w-[50%] p-0 ml-3'>
                            <BiTimeFive className='absolute mr-2 mt-3 ml-2 pointer-events-none text-2xl ' />
                            <input
                                type="text"
                                id='estimated-time'
                                placeholder='Estimated Preparation Time'
                                className='bg-slate-300 p-3 rounded-lg w-full pl-10'
                                value={estimatedPrepatationTime}
                                onChange={event => setEstimatedPrepatationTime(event.target.value)} />
                        </label>
                    </div>
                    <label htmlFor="file-upload" className='bg-slate-300'>
                        <IoCloudUploadOutline className='inline mr-2 mb-1' />
                        {'Upload an image'}
                        <input
                            type="file"
                            id='file-upload'
                            accept='image/png, image/jpg, image/gif, image/jpeg'
                            className='p-3 mb-3 rounded-lg'
                            onChange={event => setFiles(event.target.files)}
                            required />
                    </label>
                    <Editor value={content} onChange={setContent} />
                    <button className='text-white mt-[25px] p-3 rounded-lg max-w-[50%] bg-red-400 font-extrabold self-center w-[300px]'>CREATE POST</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost