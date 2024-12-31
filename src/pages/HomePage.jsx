import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HighlightText from '../components/Home/HighlightText';
import Buttons from '../components/Home/Buttons';
import Banner from '../assets/banner.mp4'
function HomePage() {
  return (
      <div>
        {/* section 1 */}
        <div className="relative mx-auto flex flex-col w-11/12 max-w-4xl justify-between items-center text-white">
            <Link to='/signup'>
                <div className=' mt-12 p-1 rounded-full bg-slate-950 text-slate-400 transition-all duration-200 hover:scale-95'>
                    <div className='flex items-center gap-2 px-10 py-2 rounded-full transition-all duration-200 hover:scale-95'>
                        <p>Become and Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>

            <div className="text-3xl font-semibold mt-6 text-center">
                Empower Your Future with <HighlightText text={'Coding Skills'}/>
            </div>

            <div className=" text-slate-300 text-md font-semibold w-[90%]  mt-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci fugit eveniet necessitatibus? Sit doloribus consequuntur quas? Illum quos quas ea facere esse officia.
            </div>

            <div className="flex gap-3 mt-6">
                <Buttons active={true} linkto={"/signup"}>
                    Learn More
                </Buttons>
                <Buttons  active={false} linkto={"/login"}>
                    Book a demo
                </Buttons>
            </div>
        </div>

        <div className="w-[800px] mx-auto my-10 mt-8">
            <video className=' shadow-[5px_5px_0px_0px_rgba(109,40,217)]'
            muted
            loop
            autoPlay
            >
            <source src={Banner} type='video/mp4'/>

            </video>
        </div>
        {/* section 2 */}
        {/* section 3 */}
        {/* section 4 */}
    </div>
  )
}

export default HomePage
