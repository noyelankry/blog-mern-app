import React from 'react'
import { useState } from 'react'
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const register = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/user/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            navigate('/')
            console.log("Registration succeeded!");
        }
        else if (response.ok === false) {
            setError(true)
        }
    }

    return (
        <section className="bg-[#094c55]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <h1 className='text-[3rem] font-bold text-center p-10 text-[#ffd146]'>LETS GET IT STARTED!</h1>

                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-300">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-slate-800">
                            Create an account
                        </h1>

                        {error ? <Alert severity="info"> user already exists</Alert> : null}

                        <form className="space-y-4 md:space-y-6" onSubmit={register}>
                            <div>
                                <label for="username" className="block mb-2 text-sm text-slate-800 font-bold">Your username</label>
                                <input
                                    type="username"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 placeholder-slate-500"
                                    placeholder="username" requislate=""
                                    value={username}
                                    onChange={event => setUsername(event.target.value)}
                                    required />
                            </div>

                            <div>
                                <label for="email" className="block mb-2 text-sm text-slate-800 font-bold">Your email</label>
                                <input
                                    type="text"
                                    name="setEmail"
                                    id="email"
                                    className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 placeholder-slate-500"
                                    placeholder="name@mail.com" requislate=""
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    required />
                            </div>

                            <div>
                                <label for="password" className="block mb-2 text-sm font-bold text-slate-800">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-100 placeholder-slate-500 text-slate-800" requislate=""
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    required />
                            </div>
                            {/* <div>
                                <label for="confirm-password" className="block mb-2 text-sm font-bold text-slate-800">Confirm password</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className=" border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-100 placeholder-slate-800 text-slate-800" requislate="" />
                            </div> */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border rounded focus:ring-3 bg-gray-100 border-gray-400 focus:ring-slate-600 ring-offset-gray-800"
                                        requislate=""
                                        required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="terms" className="font-light text-gray-700">I accept the <a className="font-medium hover:underline text-slate-500" href="http://localhost:3000/terms">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-600 hover:bg-slate-700 focus:ring-slate-800">Create an account</button>
                            <p className="text-sm font-light text-gray-700 ">
                                Already have an account? <a href="http://localhost:3000/login" className="font-medium hover:underline text-slate-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register