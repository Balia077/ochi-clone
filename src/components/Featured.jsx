import { motion, useAnimation } from 'framer-motion'
import { span } from 'framer-motion/client'
import { Power4 } from 'gsap/all'
import React, { useRef, useState } from 'react'
import { SiPanasonic } from 'react-icons/si'

const Featured = () => {

    const [disp, setDisp] = useState('none')
    const [disp2, setDisp2] = useState('none')

    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        if(index == 0){
            setDisp('inline-block')
        }
        if(index == 1){
            setDisp2('inline-block')
        }
        cards[index].start({ y: "0" });
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
        if(index == 0){
            setDisp('none')
        }
        if(index == 1){
            setDisp2('none')
        }
    }

    return (
        <div className='w-full py-20'>
            <div className='w-full px-15 border-b border-zinc-600 pb-8'>
                <h1 className='text-[3.5vw] font-[font-2]'>Featured projects</h1>
            </div>
            <div className='px-15'>
                <div className='cards w-full flex gap-7 mt-20'>
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[80vh]">
                        <div style={{display: disp}} className='uppercase cursor-pointer absolute overflow-hidden -translate-x-1/2 top-1/2 whitespace-nowrap -translate-y-1/2 left-full text-[#CDEA68] z-9 text-[9vw] font-[font-1]'>
                            {"Salience Labs".split("").map((item, idx) => (
                                <motion.span
                                    key={idx}
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * .025 }}
                                    className='inline-block'>{item}
                                </motion.span>
                            ))}
                        </div>
                        <div className="card w-full h-full rounded-2xl overflow-hidden">
                            <img className='bg-cover w-full h-full bg-center' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[80vh]">
                        <div style={{display: disp2}} className='cursor-pointer uppercase overflow-hidden absolute -translate-x-1/2 top-1/2 whitespace-nowrap -translate-y-1/2 left-0 text-[#CDEA68] z-9 text-[9vw] font-[font-1]'>
                            {"Medallia Experience".split("").map((item, idx) => (
                                <motion.span
                                    key={idx}
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * .025 }}
                                    className='inline-block'>{item}
                                </motion.span>
                            ))}
                        </div>
                        <div className="card w-full h-full rounded-2xl overflow-hidden">
                            <img className='bg-cover w-full h-full bg-center' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Featured
