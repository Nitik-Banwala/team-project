import React from 'react'

const HeroSlider = () => {
  return (
    <div className='w-full m-auto bg-white-grey mt-30 overflow-hidden'>
      <div className='max-w-360 m-auto w-full pt-20 pb-18'>
        
        <div className='flex items-center gap-32.5 animate-scroll'>
          
          <img src="src/assets/Scratch.png" alt="" />
          <img src="src/assets/roblox.png" alt="" />
          <img src="src/assets/python.png" alt="" />
          <img src="src/assets/minecraft.png" alt="" />
          <img src="src/assets/tailwind.png" alt="" />

          {/* duplicate */}
          <img src="src/assets/Scratch.png" alt="" />
          <img src="src/assets/roblox.png" alt="" />
          <img src="src/assets/python.png" alt="" />
          <img src="src/assets/minecraft.png" alt="" />
          <img src="src/assets/tailwind.png" alt="" />

        </div>

      </div>
    </div>
  )
}

export default HeroSlider
