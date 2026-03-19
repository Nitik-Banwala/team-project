import React from 'react'
import Icons from './common/Icons'
import { CARD_DATA } from '../utils/helper'
import Button from './common/Button'

function PupiloTopic() {
  return (
    <div className='pt-40'>
      <div className='max-w-285 mx-auto px-4'>
        <div className='flex flex-col items-center'> 
        <div className='flex flex-col gap-3 text-center max-w-125.25 mx-auto pb-10'>
          <h3 className='text-5xl font-semibold leading-[120%] tracking-normal text-black max-sm:text-3xl'>General Pupilo Topic</h3>
          <p className='text-normal leading-[150%] tracking-normal text-grey'>In this section, we cover a wide range of topics to support every learner on their coding journey.</p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {CARD_DATA.slice(0, 3).map((card, i) => {
            return <div key={i} className='shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06)] p-4 rounded-3xl hover:scale-105 transition-all duration-300'>
              <div className='flex flex-col gap-4'>
                <img src={card.pupilo.img} alt="image" />
                <span className='text-normal leading-[150%] tracking-normal text-purple'>{card.pupilo.date}</span>
                <div className='flex flex-col gap-3'>
                  <h4 className='text-2xl font-semibold leading-[120%] tracking-normal text-black'>{card.pupilo.title}</h4>
                  <p className='font-normal leading-[150%] tracking-normal text-black/80'>{card.pupilo.paragraph}</p>
                </div>
                <button className='flex flex-row items-center gap-2.5 underline font-semibold leading-[100%] tracking-normal hover:no-underline cursor-pointer w-fit'>Learn More<span><Icons icon="arrow" /></span></button>
              </div>
            </div>
          })}
        </div>
        <Button className="mt-10 flex items-center py-3.5 px-8.75 gap-3.5  bg-yellow   rounded-[400px] hover:text-yellow hover:bg-black group"
          text="View All"
          icon={
            <Icons
              icon={"btn_arrow"}
              pathClass={"group-hover:fill-yellow duration-200 ease-in fill-black"}
            />
          }
          />
        </div>
      </div>
    </div>
  )
}

export default PupiloTopic