import React from 'react'
import { tableImg, tvImg } from '../assets'

const Projects = () => {
  return (
    <div className='bg-black'>
        <div className='projectsMenu sm:hidden block    '>
        <div className='flex flex-col gap-[20px] justify-center  items-center p-5'>
            <h1 className='text-[#E3B873]  text-[22px]'>Completed <br /> projects</h1>
            <p className=' text-[11px] w-[300px]'>Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families</p>
        </div>

        <div className='sm:hidden flex  justify-center items-center '>
            <img src={tvImg} alt="" />
        </div>

        <div className='flex gap-[100px] justify-center items-center p-5'>

            <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[15px]'>
                    <h1 className='text-[#E3B873]  text-[14px]'>City:</h1>
                    <p className=' text-[11px]'>Rostov-on-Don <br />LCD admiral</p>
                </div>

                <div className='flex flex-col gap-[15px]'>
                    <h1 className='text-[#E3B873] text-[14px]'>Repair time:</h1>
                    <p className=' text-[11px]'>3.5 months</p>
                </div>
            </div>

            <div className='flex flex-col gap-[45px]'>
                <div className='flex flex-col gap-[15px]'>
                    <h1 className='text-[#E3B873] text-[14px]'>apartment area:</h1>
                    <p className=' text-[11px]'>81 m2</p>
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <h1 className='text-[#E3B873]  text-[14px]'>Repair Cost:</h1>
                    <p className=' text-[11px]'>Upon request</p>
                </div>
            </div>
        </div>

        </div>

        <div className='sm:flex hidden gap-[120px] p-5 pt-[80px]  '>
          <div className='md:flex block'>
          <div className='pt-[40px] '>

<div className='flex flex-col gap-[20px] justify-center items-start  p-5'>
    <h1 className='text-[#E3B873] text-[27px]'>Completed <br /> projects</h1>
     <p className='text-[14px] w-[400px] '>Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families</p>
 </div>

<div className='flex gap-[100px] justify-start  items-start  p-5'>

     <div className='flex flex-col gap-[30px]'>
         <div className='flex flex-col gap-[15px]'>
            <h1 className='text-[#E3B873] text-[18px]'>City:</h1>
            <p className='text-[13px] '>Rostov-on-Don <br />LCD admiral</p>
        </div>

        <div className='flex flex-col gap-[15px]'>
            <h1 className='text-[#E3B873] text-[18px]'>Repair time:</h1>
            <p className='text-[13px]'>3.5 months</p>
        </div>
    </div>

    <div className='flex flex-col gap-[45px]'>
        <div className='flex flex-col gap-[15px]'>
            <h1 className='text-[#E3B873] text-[18px] '>apartment area:</h1>
            <p className='text-[13px]'>81 m2</p>
        </div>
        <div className='flex flex-col gap-[15px]'>
            <h1 className='text-[#E3B873] text-[18px]'>Repair Cost:</h1>
            <p className='text-[13px]'>Upon request</p>
        </div>
    </div>
</div>
<div className='flex  gap-[70px] p-5'>
<i class="fa-solid fa-arrow-left"></i>
<div className='flex gap-[10px] pb-[10px] pt-[5px] '>
    <button className='border-[4px] rounded-[10px]'></button>
    <button className='border-[4px] rounded-[10px]'></button>
    <button className='border-[4px] rounded-[10px]'></button>
</div>
    <i class="fa-solid fa-arrow-right"></i>
</div>
</div>

<div className='md:flex block flex-col lg:gap-[40px]'>
    <div className='flex gap-[50px] p-5'>
        <h1 className='text-[14px] text-[#E3B873]'>Rostov-on-Don, Admiral</h1> 
        <h1 className='text-[14px] text-[gray]' >Sochi Thieves</h1>
        <h1 className='text-[14px] text-[gray]'>Rostov-on-Don Patriotic</h1>
    </div>

    <div className=''>
        <img src={tableImg} alt="" className=' w-[700px] h-[450px]' />
    </div>
</div>
          </div>
        </div>
        
    </div>
  )
}

export default Projects