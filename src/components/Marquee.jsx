import { animate, motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full py-10 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 mt-15 whitespace-nowrap overflow-hidden border-zinc-400 flex gap-20'>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='uppercase text-[28vw] leading-[30vw] font-[font-1] -mt-[6.5vw] -mb-[3vw]'>
          We are ochi
        </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='uppercase text-[28vw] leading-[30vw] font-[font-1] -mt-[6.5vw] -mb-[3vw]'>
          We are ochi
        </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='uppercase text-[28vw] leading-[30vw] font-[font-1] -mt-[6.5vw] -mb-[3vw]'>
          We are ochi
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
