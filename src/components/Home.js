import React, { useState } from 'react';
import {HiArrowNarrowRight} from "react-icons/hi"
import { Link } from "react-scroll"
import ParticlesBG from './particles/ParticlesBG';

export default function Home() {
    const [work, setWork] = useState(false);
    const handleClick = () => setWork(!work)

    return (
        <div name='home' className='w-full h-full pt-[10rem] bg-[#051c3e]'>
            <div className='max-w-[1000px] flex flex-col justify-center items-center'>
                <div className='ml-[10rem]'>
                    <p className='text-yellow-600'>
                        Welcome, my name is
                    </p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-white'>
                        Cameron Malvo
                    </h1>
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>
                        Full-Stack Software Engineer proficient in React, Node.js & SQL. Adept in developing and deploying web applications.
                    </p>
                    <div >
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-yellow-600 hover:bg-yellow-600'>
                                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                                    View Work
                                </Link> 
                            <span className='group-hover:rotate-90 duration-300'>
                                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                                    <HiArrowNarrowRight className='ml-3'/> 
                                </Link>
                            </span>
                        </button>    
                    </div> 
                </div>
                <div className='pt-10 w-full h-[600px]'>
                        <ParticlesBG />
                </div>
            </div>
        </div>
    );
}
