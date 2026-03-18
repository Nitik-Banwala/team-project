import React from 'react'
import Button from './common/Button'
import Icons from './common/Icons'

const Innovators = () => {
    return (
        <div>
            <div className='max-w-285 mx-auto relative rounded-3xl my-[160.1px] bg-purple  h-auto '>
                <div className='z-10 absolute max-w-[445.1px] w-full max-h-[45.1px] h-full '>
                    <Icons icon={"next_tech"} />
                </div>
                <div className='flex py-[52.1px] flex-col items-center text-center'>
                    <div className='max-w-[535.1px] flex flex-col text-center items-center'>
                        <h2 className='leading-[120%] text-white font-semibold text-5xl'>Let’s Raise Africa’s Next Tech Innovators.</h2>
                        <p className=' text-base max-w-[451.1px] mt-2 text-white leadinf-[150%] font-normal'>Browse programs by level, or book a free placement session to find the perfect fit.</p>
                    </div>
                    <Button  text={"Get Started"} icon={<Icons  icon={""} className={""}/>}/>
                    {/* <button className='text-purple mt-6 rounded-[400px] bg-white flex flex-row justify-center items-center gap-3.5 max-w-[189.1px] w-full h-[52.1px]  '>Get Started <Icons icon={"purpul_up_arrow"} /></button> */}
                </div>
                <div className='absolute z-10 -right-40 top-0 max-w-[445.1px] w-full max-h-[45.1px] h-full '>
                    <Icons icon={"next_tech_second"} />
                </div>
                <div className='absolute z-10 max-w-[445.1px] bottom-10 left-0 w-full max-h-[45.1px] h-full '>
                    <Icons icon={"next_tech_third"} />
                </div>
            </div>
        </div>
    )
}

export default Innovators