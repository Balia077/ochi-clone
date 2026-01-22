import React from 'react'

const About = () => {
  return (
    <div className='text-black w-full py-23 px-14 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl'>
      <h1 className='font-[font-2] text-[4vw] leading-[4vw]'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>
      <div className='w-full flex gap-5 border-t-2 pt-2 border-[#bcd26a] mt-15'>
        <div className='w-1/2'>
            <h1 className='text-[3.5vw] font-[font-2]'>How we can help:</h1>
            <button className='flex gap-10 items-center font-[font-2] mt-2 bg-black px-5 py-4 rounded-full text-white uppercase'>Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-[url("../images/Homepage-Photo-1326x939.jpg")] bg-cover bg-center'></div>
      </div>
    </div>
  )
}

export default About
