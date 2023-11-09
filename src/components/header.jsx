import React from 'react'
import { bgImg } from '../assets'

const Header = () => {
  return (
    <div className='menuHeader'>

        <div className='w-full relative'>
            <img src={bgImg} alt="" className='  sm:h-[662px] h-[378px]' />

            <div className='flex flex-col sm:gap-[60px] gap-[15px] p-5 absolute top-0'>
                <h1 className='sm:text-[40px] text-[23px]'>Turnkey Repair in the <br />city of <span className='text-[#E3B873]'>Rostov-on-Don</span></h1>
                <p className='sm:w-[400px] w-[200px] sm:text-[22px] text-[14px]'>Get ready-made turnkey repairs on time with work time saving up to 45 days and 20% from cost of materials due to the organization of work</p>
            </div>  


            <div className='p-5 absolute bottom-0 sm:flex block gap-[20px] items-center'>
                <button className='bg-[#E3B873] sm:w-[250px] w-[200px] sm:h-[50px] h-[40px]'>
                    <a href="#" className='md:text-[14px] text-[11px]'>CALCULATE THE COST</a>
                </button>

                <button className='sm:w-[250px] w-[200px] sm:h-[50px] h-[40px] border-[2px] border-[black] sm:mt-0 mt-5'>
                    <a href="#" className='md:text-[14px] text-[11px] text-black'>APPLICATION</a>
                </button>
        </div>
        </div>

       
       





    </div>
  )
}

export default Header