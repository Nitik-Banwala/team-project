import React from 'react'
import Icons from './common/Icons'
import { PUPILO_CARD_DATA } from '../utils/helper'

function PupiloTopic() {
  return (
    <div className='max-w-285 mx-auto px-3'>
      <div className='flex flex-col gap-3 text-center max-w-125.25 mx-auto pb-10'>
        <h3 className='text-5xl font-semibold leading-[120%] tracking-normal text-black max-sm:text-3xl'>General Pupilo Topic</h3>
        <p className='text-normal leading-[150%] tracking-normal text-grey'>In this section, we cover a wide range of topics to support every learner on their coding journey.</p>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {PUPILO_CARD_DATA.map((card,i) => { 
       return <div key={i} className='shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06)] p-4 rounded-3xl hover:scale-105 transition-all duration-300'>
          <div className='flex flex-col gap-4'>
            <img src={card.img} alt="image" />
           <span className='text-normal leading-[150%] tracking-normal text-purple'>{card.date}</span>
            <div className='flex flex-col gap-3'>
             <h4 className='text-2xl font-semibold leading-[120%] tracking-normal text-black'>{card.title}</h4>
             <p className='font-normal leading-[150%] tracking-normal text-black'>{card.paragraph}</p>
            </div>
            <button className='flex flex-row items-center gap-2.5 underline font-semibold leading-[100%] tracking-normal hover:no-underline cursor-pointer w-fit'>Learn More<span><Icons icon="arrow" /></span></button>
          </div>
          </div>
        })}
      </div>

    </div>
  )
}

export default PupiloTopic