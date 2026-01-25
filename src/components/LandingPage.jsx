import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

const LandingPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.6" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textStructure mt-40 px-14'>
        <div className="masker font-[font-1]">
            <h1 className='uppercase text-[9vw] leading-[6.5vw]'>We Create</h1>
        </div>
        <div className="masker font-[font-1] flex">
            <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1.5}} className='w-[10vw] h-[6vw] mt-2.5'>
              <img className='w-[9vw] h-[6vw] rounded-lg' src="../images/content-image01.jpg" alt="" />
            </motion.div>
            <h1 className='uppercase text-[9vw] leading-[6.5vw]'>Eye-Opening </h1>
        </div>
        <div className="masker font-[font-1]">
            <h1 className='uppercase text-[9vw] leading-[6.5vw]'>Presentations</h1>
        </div>
      </div>
      <div className='border-t-2 border-zinc-600 mt-26 flex justify-between items-center py-3 px-14'>
        {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item, idx)=>
          <p className='text-lg font-[font-2] tracking-tight leading-none'>{item}</p>
        )}
        <div className='start flex items-center gap-1'>
          <div className='uppercase px-3 py-1 border-2 font-[font-2] border-zinc-500 text-md rounded-full'>Start the project</div>
          <div className='w-9 h-9 flex items-center justify-center rounded-full border-2 border-zinc-500'>
            <span className='rotate-45'>
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
