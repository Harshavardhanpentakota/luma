import React from 'react'

const Events = () => {
  return (
    <div className='w-full flex justify-center font-poppins' >
        <div className='w-4/6 px-8'>
         <p className='font-medium text-2xl' >Events</p>
         <div className='grid grid-cols-3'>
            <div className='col-span-2'>
                <div className='flex flex-row justify-start mt-2 gap-2'>
                    <button className='font-medium text-sm border-2 rounded-full border-gray-400 px-4 py-1'>Expert Series 0</button>
                    <button className='font-medium text-sm border-2 rounded-full border-gray-400 px-4 py-1'>Salon 0</button>
                </div>
                <div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1'>

            </div>
         </div>
        </div>
    </div>
  )
}

export default Events