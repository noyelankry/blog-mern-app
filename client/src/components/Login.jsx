import React from 'react'

const Login = () => {
    return (
        <section class="bg-[#094c55]">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <h1 className='text-[3rem] font-bold text-center p-10 text-[#ffd146]'>
                    <div className='flex'>
                        READY TO DIVE BACK IN?
                    </div>
                </h1>
                <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-300">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-slate-800">
                            Welcome back!
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm text-slate-800 font-bold">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 placeholder-slate-500" placeholder="name@mail.com" requislate="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-bold text-slate-800">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-100 placeholder-slate-500 text-slate-800" requislate="" />
                            </div>
                            <button type="submit" class="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-600 hover:bg-slate-700 focus:ring-slate-800">Create an account</button>
                            <p class="text-sm font-light text-gray-700 ">
                                Forgot your password? <a href="#" class="font-medium hover:underline text-slate-500">Click here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login