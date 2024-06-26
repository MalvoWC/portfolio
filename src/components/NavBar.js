import React, { useState } from "react"
import Logo from "../assests/official-logo.svg"
import {FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { GrLanguage, GrPersonalComputer } from "react-icons/gr"
import { AiFillHome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from "react-scroll"

export default function NavBar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div>
            {/* NavBar */}
            <div className="flex fixed justify-between items-center w-full h-[90px] px-4 shadow-xl bg-white left-[50%] translate-x-[-50%] z-40">

                {/*logo */}
                <div>
                    <img src={Logo} alt="Logo" style={{ width: '145px'}}/>
                </div>

                {/*Menu*/}
                <ul className="md:grid grid-cols-5 gap-[10px]  font-semibold py-[0.7rem] px-[1rem] hidden">
                    <li className='text-lg pr-[5px] cursor-pointer flex justify-center underline hover:underline-offset-4 hover:decoration-4 hover:decoration-yellow-600 duration-300 transition-colors rounded-md'>
                        <Link className="flex justify-center items-center" to="home" smooth={true} duration={500}>
                            <AiFillHome size={20} className="pb-[0.1rem] pr-[0.1rem] cursor-pointer"/> Home
                        </Link>
                    </li>
                    <li className='text-lg pr-[10px] cursor-pointer flex justify-center underline hover:underline-offset-4 hover:decoration-4 hover:decoration-yellow-600 hover:ease-in-out transition-colors rounded-md'>
                        <Link className="flex justify-center items-center" to="about" smooth={true} duration={500}>
                            <AiOutlineInfoCircle size={20} className="pb-[0.1rem] pr-[0.1rem] cursor-pointer"/>About
                        </Link>
                    </li>
                    <li className='text-lg pr-[10px] cursor-pointer flex justify-center underline hover:underline-offset-4 hover:decoration-4 hover:decoration-yellow-600 hover:ease-in-out transition-colors rounded-md'>
                    <Link className="flex justify-center items-center" to="technologies" smooth={true} duration={500}>
                            <GrLanguage size={20} className="pb-[0.1rem] pr-[0.1rem] cursor-pointer"/> Technologies
                        </Link>
                    </li>
                    <li className='text-lg pr-[10px] cursor-pointer flex justify-center underline hover:underline-offset-4 hover:decoration-4 hover:decoration-yellow-600 hover:ease-in-out transition-colors rounded-md'>
                       <Link className="flex justify-center items-center" to="work" smooth={true} duration={500}>
                            <GrPersonalComputer size={20} className="pb-[0.1rem] pr-[0.1rem] cursor-pointer"/> Work
                        </Link>
                    </li>
                    <li className='text-lg pr-[10px] cursor-pointer flex justify-center underline hover:underline-offset-4 hover:decoration-4 hover:decoration-yellow-600 hover:ease-in-out transition-colors rounded-md'>
                        <Link className="flex justify-center items-center" to="contact" smooth={true} duration={500}>
                            <AiOutlineMail size={20} className="pb-[0.1rem] pr-[0.1rem] cursor-pointer"/> Contact
                        </Link>
                    </li>
                </ul>

                {/* Social Menu */}
                <div className="hidden lg:flex fixed flex-col top-[300%] left-0 z-40">
                    <ul>
                        <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#138fc0]">
                            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/cmalvo/">
                                LinkedIn <FaLinkedin size={30}/>
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
                            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/MalvoWC">
                                GitHub <FaGithub size={30}/>
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600">
                            <a className="flex justify-between items-center w-full text-gray-300" href="mailto:MalvoWC@gmail.com">
                                Email <HiOutlineMail size={30}/>
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                            <a className="flex justify-between items-center w-full text-gray-300" href="https://docs.google.com/document/d/1TGfUoTKdC_fPbf0MV7rsE_VgCXm52RTp/edit?usp=sharing&ouid=110819851492534145190&rtpof=true&sd=true">
                                Resume <BsFillPersonLinesFill size={30}/>
                            </a>
                        </li>
                    </ul>
                </div>

                {/*Mobile Menu Icon */}
                <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
                    {!nav ? <FaBars />: <FaTimes />}
                </div>

                {/* Mobile Menu */}
                <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center'}>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick}  to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick}  to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick}  to="technologies" smooth={true} duration={500}>Technologies</Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick}  to="work" smooth={true} duration={500}>Work</Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>Contact</Link>
                    </li> 
                </ul>
            </div>
        </div>
    )
}