import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './Register'
import Home from './Home'
import Login from './Login'
import CreatePost from './CreatePost'
import Post from './Post'
import { IndexPage } from './IndexPage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <Home />
                } />

                <Route path='/register' element={
                    <Register />
                } />

                <Route path='/login' element={
                    <Login />
                } />

                <Route path='/create-post' element={
                    <CreatePost />
                } />

                <Route path='/post' element={
                    <IndexPage />
                } />

                <Route path='/post/:id' element={
                    <Post />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter