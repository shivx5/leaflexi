import React from 'react'
import LandingArrow from '../../../assets/LandingArrow.png';
import Offer from '../Offer/Offer';

function Home() {
  return (
  <div className='  h-[90vh] text-center flex justify-center flex-col bg-B '>
      {/* lg:ml-[35px] sm:ml-[15px] md:ml-[25px] */}
            <div className='flex  justify-center flex-col lg:gap-[60px] gap-6 sm:gap-9 md:gap-11 '>
    
            <div className=' flex flex-col text-center md:gap-10 gap-5'> 
  
              <div className='flex flex-col  gap-2  lg:gap-4'>
                   <h1 className='lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-[700]   text-[#1A1A1A]'>Lease or Rent  ? </h1>

                   <h1 className='lg:text-7xl md:text-6xl sm:text-5xl text-4xl  font-[700]   text-[#1A1A1A]'> Choose Your Ride.</h1>
             </div>
      
            <p className='text-[rgba(26, 26, 26, 1)]  sm:text-base text-xs px-5'>Flexible plans, zero hassle - drive the way you want, when you want</p>
            </div>
            <div className='flex justify-center'>
                  <img src={LandingArrow} className='sm:h-[5.5rem] sm:w-[3.5rem] h-[2.5rem] w-[1.75rem] flex justify-center'></img>
                  </div>
            </div>
            

          
      </div>
  )
}

export default Home