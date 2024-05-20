import React from 'react';
import ReactImg from '../assests/react-2.svg'
import Javascript from '../assests/logo-javascript.svg'
import HTML from '../assests/html-1.svg'
import GitHub from '../assests/github-icon-1.svg'
import CSS from '../assests/css-3.svg'
import Bootstrap from '../assests/bootstrap-5-1.svg'

export default function Technologies() {
    return (
        <div name='technologies' className='bg-[#051c3e] text-gray-300 w-full h-screen py-[8rem]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Technologies</p>
                    <p className='py-3 text-xl'>Coding languages</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 z-30'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto pt-6' src={CSS} alt='HTML icon' />
                        <p className='my-3'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto pt-6' src={HTML} alt='HTML icon' />
                        <p className='my-3'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto pt-6' src={ReactImg} alt='HTML icon' />
                        <p className='my-3'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto pt-6' src={GitHub} alt='HTML icon' />
                        <p className='my-3'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto pt-6' src={Javascript} alt='HTML icon' />
                        <p className='my-3'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto pt-6' src={Bootstrap} alt='HTML icon' />
                        <p className='my-3'>BOOTSTRAP</p>
                    </div>
                </div>
            </div>
        </div>
    );
}