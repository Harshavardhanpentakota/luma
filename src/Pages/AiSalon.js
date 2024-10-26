import React from 'react'
import Navbar from '../Components/Navbar'
import Events from '../Components/Events';

function getCurrentTimeIST() {
  const now = new Date();

  // Convert current time to IST
  const offsetIST = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
  const istTime = new Date(now.getTime() + offsetIST);

  const hours = String(istTime.getUTCHours()).padStart(2, '0');
  const minutes = String(istTime.getUTCMinutes()).padStart(2, '0');
  
  return `${hours}:${minutes}`;
}

const AiSalon = () => {
  return (
    <div className='bg-lama-bg text-white h-full font-poppins '>
      <Navbar/>
      <div className='flex items-center justify-center w-full'>
        <div className='w-full'>
        <div className='relative flex items-center justify-center '>
          <img className='rounded-2xl w-4/6' src='../../hero.svg' alt='hero' />
         <img src='../../aiSalon.png' className='absolute -bottom-14 w-28 h-28 left-72 rounded-2xl border-4 border-lama-bg' alt='logo' />
         <div className='absolute -bottom-12 right-72 '>
         <div className='bg-blue-500 text-gray-200 rounded-md px-2 py-1 w-24 h-10 hover:bg-blue-400 text-center '>
        <button className='text-bold pt-1'>Button</button>
         </div>
         </div>
        </div>
        <div className='mt-20 flex justify-center mx-52'>
          <div id='description' className='mx-20'>
            <p className='font-black text-3xl'>the ai salon</p>
            <div className='flex flex-row gap-2'>
              <img src='../../clock.png' alt='clock' className='w-5 h-5' /> 
              <p>India - {getCurrentTimeIST()} IST</p>
            </div>
            <p>Conversations on the meaning and impact of artificial intelligence as it intersects areas of our social reality. Archive of our conversations: https://aisalon.substack.com/</p>
            <div className='my-2'>
             <a href='https://twitter.com'><img src='../../twitter.png' alt='twitter' className='w-5 h-5' /></a>
            </div>          
          </div>
        </div>
        <hr className="my-4 border-1 border-gray-700" />
        <Events/>
        </div>
      </div>
    </div>
  )
}

export default AiSalon