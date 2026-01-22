import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex gap-5 items-center px-15 bg-zinc-100'>
      <div className='cardcontainer h-[55vh]  w-1/2'>
        <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
            <img className='w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-3 border-2 border-[#95BF5E] font-[font-2] text-[#C2E266] rounded-full left-8 bottom-8'>©2019-2025</button>
        </div>
      </div>
      <div className='cardcontaine flex gap-5 w-1/2 h-[55vh]'>
        <div className="card relative rounded-xl flex items-center justify-center w-1/2 h-full bg-[#212121]">
            <img className='w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute px-3 border font-[font-2] text-white rounded-full left-8 bottom-8'>RATING 5.0 ON CLUTHC</button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full flex items-center justify-center bg-[#212121]">
            <img className='w-[7vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute px-3 border font-[font-2] text-white rounded-full left-8 bottom-8'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
