import { span } from 'framer-motion/client'
import React from 'react'
import { SiPanasonic } from 'react-icons/si'

const Featured = () => {
    return (
        <div className='w-full py-20'>
            <div className='w-full px-15 border-b border-zinc-600 pb-8'>
                <h1 className='text-[3.5vw] font-[font-2]'>Featured projects</h1>
            </div>
            <div className='px-15'>
                <div className='cards w-full flex gap-7 mt-20'>
                    <div className="cardcontainer relative w-1/2 h-[80vh]">
                        <h1 className='uppercase absolute -translate-x-1/2 top-1/2 whitespace-nowrap -translate-y-1/2 left-full text-[#CDEA68] z-9 text-[9vw] font-[font-1]'>
                            {"Salience Labs".split("").map((item, idx)=>(
                                <span>{item}</span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-2xl overflow-hidden">
                            <img className='bg-cover w-full h-full bg-center' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                        </div>
                    </div>
                    <div className="cardcontainer relative w-1/2 h-[80vh]">
                        <h1 className='uppercase absolute translate-x-1/2 top-1/2 whitespace-nowrap -translate-y-1/2 right-full text-[#CDEA68] z-9 text-[9vw] font-[font-1]'>
                            <h1 className='uppercase absolute -translate-x-1/2 top-1/2 whitespace-nowrap -translate-y-1/2 left-full text-[#CDEA68] z-9 text-[9vw] font-[font-1]'>
                            {"Medallia Experience".split("").map((item, idx)=>(
                                <span>{item}</span>
                            ))}
                        </h1>
                        </h1>
                        <div className="card w-full h-full rounded-2xl overflow-hidden">
                            <img className='bg-cover w-full h-full bg-center' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
