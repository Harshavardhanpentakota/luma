import React from 'react'
import Navbar from '../Components/Navbar'
const Olo = () => {
  return (
    <div className='bg-lama-bg  h-full w-full font-poppins' >
        <Navbar/>
        <div className='w-full flex justify-center mt-4 pl-10' >
            <div className='w-4/6 grid grid-cols-3 '>
              <div className='col-span-1'>
                <img src="../../main.avif" className='w-50 h-50 rounded-lg'  alt='ai-salon'/>
                <div className='mt-4'>
                    <div className='flex justify-between'>
                        <div className='flex flex-row gap-2'>
                            <img src='../../olo.avif' alt='olo' className='w-10 h-10 rounded-lg'/>
                            <div className='flex flex-col'>
                                <p className='text-sm' >Presented by</p>
                                <p className='font-medium text-md ' >Olo Events</p>
                            </div>
                        </div>
                        <button className='rounded-xl text-sm text-slate-700 bg-slate-300 hover:text-gray-100 hover:bg-slate-700 px-2' >Subscribe</button>
                    </div>
                    <p className='text-sm text-slate-600 mt-2 '>
                    Our gatherings connect your body, mind, and soul, fostering embodiment, self-awareness, and growth. Experience the transformative power of sound, somatics and community with us.
                    </p>
                    <div className='flex flex-row gap-2'>
                    <img src='../../twitter.png' alt='twitter' className='w-5 h-5 my-2' />
                    <img src='../../twitter.png' alt='twitter' className='w-5 h-5 my-2' />
                    <img src='../../twitter.png' alt='twitter' className='w-5 h-5 my-2' />
                    <img src='../../twitter.png' alt='twitter' className='w-5 h-5 my-2' />
                    </div>
                </div>
                <div id='Hosted'>
                    <p>Hosted by</p>
                    <hr className="my-4 border-t border-gray-300" />
                    <div>
                        <div className='flex justify-between my-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src='../../olo.avif' className='w-8 h-8 rounded-full' alt='olo' />
                                <p className='text-sm'>Olo</p>
                            </div>
                            <img src='../../twitter.png' className='w-4 h-4 my-2' alt='twitter' />
                        </div>
                        <div className='flex justify-between my-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src='../../olo.avif' className='w-8 h-8 rounded-full' alt='olo' />
                                <p className='text-sm'>Olo</p>
                            </div>
                            <img src='../../twitter.png' className='w-4 h-4 my-2' alt='twitter' />
                        </div>
                        <div className='flex justify-between my-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src='../../olo.avif' className='w-8 h-8 rounded-full' alt='olo' />
                                <p className='text-sm'>Olo</p>
                            </div>
                            <img src='../../twitter.png' className='w-4 h-4 my-2' alt='twitter' />
                        </div>
                        <div className='flex justify-between my-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src='../../olo.avif' className='w-8 h-8 rounded-full' alt='olo' />
                                <p className='text-sm'>Olo</p>
                            </div>
                            <img src='../../twitter.png' className='w-4 h-4 my-2' alt='twitter' />
                        </div>
                        <div className='flex justify-between my-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src='../../olo.avif' className='w-8 h-8 rounded-full' alt='olo' />
                                <p className='text-sm'>Olo</p>
                            </div>
                            <img src='../../twitter.png' className='w-4 h-4 my-2' alt='twitter' />
                        </div>
                    </div>
                </div>
                <div className='text-sm'>
                <p className='mt-2'>Contact the host</p>
                <p className='mt-2'>Report Event</p>
                </div>
              </div>
              <div className='col-span-2 ml-6'>
                <div className='text-sm flex flex-row items-center gap-2 bg-slate-300 w-52 p-1 rounded-md '>
                    <img src='../../aiSalon.png' className='w-4 h-4 rounded-sm' alt='hero' />
                    <p>Featured in <span className='font-medium' >the ai salon</span> </p>
                </div>
                <p className='text-4xl font-bold my-4' >Ai Salon & Olo: Human Nature Discussion and Immersive Sound Journey</p>
                <div id='date' className='flex flex-row gap-2' >
                    <div className='w-10 border-2 border-lama-bg-lite rounded-md h-10'>
                        <div className='bg-lama-bg-lite text-xs text-center' >Nov</div>
                        <div ><p className='text-center text-sm' >1</p></div>
                    </div>
                    <div>
                        <p className='font-medium'>Friday 1 November</p>
                        <p className='font-sm text-gray-500'>6:30 pm - 9:00 pm GMT-7</p>
                    </div>
                </div>
                <div id='location' className='flex flex-row gap-2 mt-2'>
                    <div className='w-10 border-2 border-lama-bg-lite rounded-md h-10'>
                        <img src='../../location.png' alt='location' className='w-7 h-6 ml-1 mt-2' />
                    </div>
                    <div>
                        <p className='font-medium'>Register to see address</p>
                        <p className='font-sm text-gray-500'>San Francisco, California</p>
                    </div>
                </div>
                <div id='card' className='bg-lama-card-bg rounded-lg p-1 ml-2 mt-4'>
                    <div className='bg-lama-card-bg-lite rounded-md py-2'>
                        <p className='px-2'>Get Tickets</p>
                    </div>
                    <div className='p-4'>
                       <p className='font-semibold text-lg'>Registrations Closed</p>
                       <p>This event is not currently taking registrations. You may contact the host or subscribe to receive updates.</p>
                    </div>
                </div>
                <div id='about_event' className='mt-6'>
                    <p>About Event</p>
                    <hr className="my-4 border-t border-gray-300" />
                    <div className='flex flex-col gap-6'>
                    <p>​Get in touch with your inner self and engage in a conscious discussion on human nature with a group of forward thinking leaders.</p>
                    <p>About Event:</p>
                    <p>​The Ai Salon is partnering with Olo to create an event where we connect with our own human nature and consider its relationship in a future world transformed by AI.</p>
                    <p>​AI forces questions about human nature that were previously only philosophical. What, if anything, is fundamental about our nature? How does our fundamental nature impact our relationship with technology? How will that nature influence how we build this technology and how we should build it.</p>
                    <p>​What to Expect:</p>
                    <p>6:30 PM: Welcome: Short intro and prepare for the journey ahead.</p>
                    <p>​7:00 PM: Immersive Sound Journey: Embark on a sound journey designed to reset, recharge, and renew your perspective.</p>
                    <p>​7:45 PM: Ai Salon: We will participate in a facilitated conversation on AI's relationship and reflection of human nature.</p>
                    <p>​9:00 PM : Wrap up discussion</p>
                    <p>​Drinks and light snacks will be provided.</p>
                    <p>Read the Ai Salon Archive substack to explore previous conversations related to this topic:</p>
                    <p> <ul className='list-disc'>
                        <li>Common sense.</li>
                        <li>Personhood.</li>
                        <li>Purpose and Meaning</li>
                        </ul>
                    </p>
                    <p>​The AI Salon is a community founded in San Francisco focused on intimate, small-sized group discussions on the sociological, economic, cultural, and philosophical impacts and meaning of AI developments. We host small group discussions, all of which you can find on our calendar. You can find summaries of our previous conversations on our substack.</p>
                
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Olo