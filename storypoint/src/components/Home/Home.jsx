import React from 'react';
import { useState } from 'react';
import { useId } from 'react';
import {Link} from 'react-router-dom'

export default function Home() {

    const [session, setSession] = useState("")
    const [username, setUsername] = useState("")

    const sessionInputId = useId()
    const usernameInputId = useId()

    const createSession = () => {
        console.log("create session called " +session+ " / "+username)
    }

    const joinSession = () => {
        console.log("join session called " +session+ " / "+username)
    }

    return (
        <>

        <div className='container mx-auto py-24'>
            <div className="columns-2">
                <div className='w-full'>
                    <p className="text-base font-semibold leading-7 text-indigo-600">Point faster</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Power of Story Pointing</h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                    Story pointing, a core technique in Agile project management, especially in Scrum, assesses the relative effort or complexity of user stories or tasks. These user stories, succinctly describing features or requirements from an end-user viewpoint, are commonly documented on index cards or digitally within Agile project management platforms.
                    </p>
                </div>
                <div className='w-full max-h-full bg-slate-950 rounded-lg'>
                    <form className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label htmlFor={sessionInputId} className="hidden">
                                Session Name
                            </label>
                            <input
                                id={sessionInputId}
                                value={session}
                                type="text"
                                placeholder="Session"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor={usernameInputId} className="hidden">
                                Username
                            </label>
                            <input
                                id={usernameInputId}
                                defaultValue={username}
                                type="text"
                                placeholder="Your Name"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-row my-3">
                            <button
                                type="button"
                                className="bg-orange-700 rounded-md w-52 text-white px-6 py-3 font-bold"
                                onClick={createSession}
                            >
                                Create Session
                            </button>

                            <button
                                type="button"
                                className="bg-orange-700 rounded-md w-52 text-white px-6 py-3 font-bold mx-4"
                                onClick={joinSession}
                            >
                                join Session
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        
        </>
    );
}