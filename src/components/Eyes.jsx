import React, { useEffect, useState } from 'react'

const Eyes = () => {

     const [rotate, setRotate] = useState(0)

    useEffect(()=>{

        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div className='relative w-full h-full bg-[url("../images/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full  bg-zinc-100'>
                        <div className='w-3/5 h-3/5 relative rounded-full bg-zinc-900'>
                            <div style={{transform: `rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full  bg-zinc-100'>
                        <div className='w-3/5 h-3/5 relative rounded-full bg-zinc-900'>
                            <div style={{transform: `rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
