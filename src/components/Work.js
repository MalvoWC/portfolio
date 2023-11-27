import React from 'react';
import FCphoto from "../assests/Flashcard-app.png"
import reciepePhoto from "../assests/receipe-app.png"
import Calculator from "../assests/calculator.png"
import Ecommerce from "../assests/ecommerce.png"
import Brochure from "../assests/brochure-app.png"
import TTT from "../assests/tic-tac-toe.png"

export default function Work() {
    return (
        <div name='work' className='w-full md:h-screen bg-[#051c3e] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Work</p>
                    <p className='py-3'>Check out some of my recent projects</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style ={{backgroundImage: `url(${Brochure})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider '>
                                Brochure App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://brochure-app1-os2p61uij-malvowc.vercel.app/?vercelToolbarCode=aM4B96eOQ3kZInC'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href='https://github.com/MalvoWC/brochure-app1'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div> 
                    <div style ={{backgroundImage: `url(${reciepePhoto})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Reservation App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://capstone-front-eouyoavf5-malvowc.vercel.app/dashboard'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href='https://github.com/MalvoWC/restaurant-reservation'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div> 
                    <div style ={{backgroundImage: `url(${Calculator})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Calculator App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://calculator-app-beta-seven.vercel.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href='https://github.com/MalvoWC/calculator-app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div> 
                    <div style ={{backgroundImage: `url(${Ecommerce})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                ShopFly App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://ecommerce-shop-pfo3dvifk-malvowc.vercel.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href='https://github.com/MalvoWC/ecommerce-ShopFly'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style ={{backgroundImage: `url(${FCphoto})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Flashcards App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://flashcard-app2-h9hebyxpy-malvowc.vercel.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href='https://github.com/MalvoWC/Flashcard-app2'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style ={{backgroundImage: `url(${TTT})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Tic-Tac-Toe App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://tic-tac-3x1p3b1oa-malvowc.vercel.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href='https://github.com/MalvoWC/tic-tac-toe/blob/main/README.md?plain=1#L1-L70'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
