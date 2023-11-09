import React from 'react'
import { types1Img, types2Img, types3Img } from '../assets'

const Types = () => {
  return (
    <div className='bg-white text-black '>
        <div className='pt-10 flex justify-center items-center'>
            <h1>TYPES OF REPAIR</h1>
        </div>

       <div className=' w-full lg:flex block md:justify-center justify-start md:items-center items-start'>
      <div className=''>
      <div className='w-full pt-10  '>
            <img src={types1Img} alt="" className='' />
          </div>

          <div className='flex flex-col gap-[30px] bg-white  pl-[50px] pr-[80px] pt-10  '>
            <h1 className='text-[20px] text-[#E3B873]'>Redecorating</h1>
            
                <ul className='flex flex-col gap-[10px]'>
                    <li>• Dismantling of old coatings</li>
                    <li>• Wallpapering</li>
                    <li>• Painting walls and ceilings</li>
                    <li>• Laying flooring</li>
                    <li>• Replacing plumbing</li>
                    <li>• Replacing sockets and switches</li>
                    <li>• Replacing doors</li>
                </ul>
                <button className='bg-[#E3B873] w-[190px] h-[40px]'>from 900 rub / m2</button>
          </div>
      </div>


       <div className=''>
       <div className='w-full pt-10 '>
            <img src={types2Img} alt="" className='' />
          </div>

          <div className='sm:flex block flex-col gap-[30px]  bg-white  pl-[50px] pr-[80px] pt-10 '>
            <h1 className='text-[20px] text-[#E3B873]'>Overhaul</h1>
            
                <ul className='flex flex-col gap-[10px]'>
                    <li className='list'>• Dismantling of old coatings</li>
                    <li className='list'>• Wallpapering</li>
                    <li className='list'>• Painting walls and ceilings</li>
                    <li className='list'>• Laying flooring</li>
                    <li className='list'>• Replacing plumbing</li>
                    <li className='list'>• Replacing sockets and switches</li>
                    <li className='list'>• Replacing doors</li>
                </ul>
                <button className='bg-[#E3B873] w-[190px] h-[40px]'>from 1800 rub / m2</button>
          </div>
       </div>


         <div className=''>
         <div className='w-full pt-10 '>
            <img src={types3Img} alt="" className='' />
          </div>

          <div className='flex flex-col gap-[30px]  b-0 bg-white  pl-[50px] pr-[80px] pt-10 '>
            <h1 className='text-[20px] text-[#E3B873]'>Designer Repair</h1>
            
                <ul className='flex flex-col gap-[10px]'>
                    <li className='list'>• Dismantling of old coatings</li>
                    <li className='list'>• Wallpapering</li>
                    <li className='list'>• Painting walls and ceilings</li>
                    <li className='list'>• Laying flooring</li>
                    <li className='list'>• Replacing plumbing</li>
                    <li className='list'>• Replacing sockets and switches</li>
                    <li className='list'>• Replacing doors</li>
                </ul>
                <button className='bg-[#E3B873] w-[190px] h-[40px]'>from 4000 rub / m2</button>
          </div>
         </div>

       </div>



          


    </div>
  )
}

export default Types