import React from 'react'

const Eyes = () => {
    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div className='relative w-full h-full bg-[url("../images/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full  bg-zinc-100'>
                        <div className='w-3/5 h-3/5 flex items-center justify-center rounded-full bg-zinc-900'>
                            <div className='line w-full h-10'>
                                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full  bg-zinc-100'>
                        <div className='w-3/5 h-3/5 flex items-center justify-center rounded-full bg-zinc-900'>
                            <div className='line w-full h-10'>
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
