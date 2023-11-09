import React from 'react'
import { ustaImg } from '../assets'

const Control = () => {
  return (
    <div className='flex flex-col justify-center  items-center p-5 sm:bg-white bg-black sm:text-black text-white'>

       <div className='flex flex-col justify-center items-center '>
       <div className='  p-5 '>
            <h1 className='sm:text-[30px] text-[22px] '>online control</h1>
            <i class="fa-solid fa-camera-cctv"></i>
        </div>

        <div className=''>
            <img src={ustaImg} alt="" className='sm:w-[847px] w-[400px]' />
        </div>
       </div>
       

        <div className='pt-7 '>
         
            <p className='sm:w-[681px] w-[340px] sm:text-[18px] text-[11px] text-center pt-[20px]'>At each facility, a camera is installed that broadcasts the progress of work on the clock. At any time, you can go to our website and monitor the progress of work in your apartment. Y
            ou can watch the live broadcast from one of our facilities!
            Leave a request below and you will receive a link to the broadcast.</p>
        </div>
        
       <div className='sm:flex block gap-[100px] pt-[20px]'>
       <div className='pt-7 sm:flex block  gap-[80px]'>

            <div>
            <form className='flex flex-col gap-[40px] sm:pt-10 pt-5'>
               <label>
                    <input type="text" placeholder='Name' className=' text-[12px] sm:bg-white bg-black'/>
                    <p className='text-[14px]'>What is your name:</p>
                    <hr />
                </label>
                </form>

               </div>

              <div className=''>
              <form className='flex flex-col gap-[40px] sm:pt-10 pt-5'>
                <label>
                    <input type="Number" placeholder='Number' className='text-[12px] sm:bg-white bg-black'/>
                    <p className='text-[14px]'>Your phone number:</p>
                    <hr />
                </label>
            </form>
              </div>
        </div>
        
        <div className='flex justify-start items-center gap-5 pt-10  '>

        <div className='bg-[#E3B873] w-[18px] h-[18px] '>
        <i class="fa-solid fa-check"></i>
        </div>

        <div>
        <p className='sm:text-[13px] text-[14px]'>I agree to the processing of personal <br /> data</p>
        </div>

        </div>
       </div>
        <div className=' pt-[70px]'>
        <button className='bg-[#E3B873] w-[290px] h-[41px]'>
            <a href="#" className='text-[13px]'>SUMBIT</a>
        </button>
        </div>
        

    </div>
  )
}

export default Control