import React from 'react'
import { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/user/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            console.log("Registration succeeded!");
        }
        else {
            console.log("Registration failed... try again later");
        }
    }
    return (
        <section class="bg-[#094c55]">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <h1 className='text-[3rem] font-bold text-center p-10 text-[#ffd146]'>LETS GET IT STARTED!</h1>

                <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-300">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-slate-800">
                            Create an account
                        </h1>
                        <form class="space-y-4 md:space-y-6" onSubmit={register}>
                            <div>
                                <label for="email" class="block mb-2 text-sm text-slate-800 font-bold">Your email</label>
                                <input
                                    type="email"
                                    name="username"
                                    id="email"
                                    class="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 placeholder-slate-500"
                                    placeholder="name@mail.com" requislate=""
                                    value={username}
                                    onChange={event => setUsername(event.target.value)} />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-bold text-slate-800">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-100 placeholder-slate-500 text-slate-800" requislate=""
                                    value={password}
                                    onChange={event => setPassword(event.target.value)} />
                            </div>
                            {/* <div>
                                <label for="confirm-password" class="block mb-2 text-sm font-bold text-slate-800">Confirm password</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class=" border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-100 placeholder-slate-800 text-slate-800" requislate="" />
                            </div> */}
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border rounded focus:ring-3 bg-gray-100 border-gray-400 focus:ring-slate-600 ring-offset-gray-800" requislate="" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-700">I accept the <a class="font-medium hover:underline text-slate-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-600 hover:bg-slate-700 focus:ring-slate-800">Create an account</button>
                            <p class="text-sm font-light text-gray-700 ">
                                Already have an account? <a href="#" class="font-medium hover:underline text-slate-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register