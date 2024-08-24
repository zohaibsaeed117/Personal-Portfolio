"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
export default function Home() {
    const [state, setState] = useState(false)
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        setState(true)
           setTimeout(()=>{
            router.push('/')
           },3000)
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-background-100">
                {
                    state ?
                        <Image src="/meme.jpeg"
                            height={400}
                            width={400}
                            priority={true}
                        />
                        : <div className="bg-background p-8 rounded-lg shadow-md w-full max-w-md">
                            <div className="flex justify-center mb-6">
                                <img src="/wordpress.png" alt="WordPress Logo" className="h-12" />
                            </div>
                            <h2 className="text-2xl font-bold mb-6 text-center text-secondary-200">WP Admin Login</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-secondary-200 text-sm font-bold mb-2" htmlFor="username">
                                        Username or Email Address
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="input bg-none w-full"
                                        placeholder="wpadmin"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-secondary-200 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="input bg-none w-full"
                                        placeholder="********"
                                    />
                                </div>
                                <div className="mb-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="mr-2 checkbox checkbox-sm"
                                    />
                                    <label className="text-sm text-secondary-200" htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={handleClick}
                                    >
                                        Log In
                                    </button>
                                </div>
                                <div className="mt-4 text-center">
                                    <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                        Lost your password?
                                    </a>
                                </div>
                            </form>
                        </div>
                }
            </div>

        </>
    );
}
