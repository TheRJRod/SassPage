import {BsArrowDownCircle} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import {BsArrowDown} from 'react-icons/bs'
import {BsArrowUp} from 'react-icons/bs'
import { useState } from 'react'


function Main() {
  
  const [scrollInfo, setScrollInfo] = useState('-translate-x-[60rem]')
  const [scrollTestimonial, setScrollTestimonial] = useState('translate-x-[60rem]')

  const scrollIn = () => {
    if(window.scrollY > 400) {
      setScrollInfo('')
      setScrollTestimonial('')
    }
    else {
      setScrollInfo('-translate-x-[60rem]')
      setScrollTestimonial('translate-x-[60rem]')
    }
  }
  
  window.addEventListener('scroll', scrollIn);

  return(
    <div className=''>
      <div className='flex items-center text-4xl justify-center gap-3 pt-20 '>
        <p className='-z-10'>Scroll</p>
        <BsArrowDownCircle className='mt-1 animate-bounce -z-10'/>
      </div>
    <div className='relative flex  py-[400px] justify-around items-center  '>
      <div className={`flex flex-col max-w-lg gap-y-4 z-20 ${scrollInfo} transform transition-all duration-1000 `}>
        <h2 className='text-white  z-20 font-display text-6xl'>Best App of 2023</h2>
        <p className=' z-20 text-white font-display text-xl'>Embrace the future as you delve into a world of endless possibilities, empowered by the app's intuitive interface and unparalleled functionality. Whether you're a tech enthusiast, a productivity guru, or a casual user, this app caters to your every need with its diverse range of features and services.</p>
        <button className=' bg-indigo-500 self-start font-display text-white rounded-full py-2 px-4 text-2xl flex items-center gap-2 group transition-all duration-300 hover:bg-black'>View the specs <BsArrowRight className='transition-all duration-300 group-hover:translate-x-2'/></button>
      </div>
      <div className={`flex gap-x-3 bg-white z-20 max-w-lg rounded-xl font-display pr-4 items-center  transform transition-all duration-1000 ${scrollTestimonial}`}>
        <img className='z-20 max-h-64 rounded-l-xl' src={require('../Images/pexels-italo-melo-2379004.jpg')} alt='testimonial pic' />
        <div className='z-20 '>
        <p className='text-purple-900' >John Doe</p>
        <p >"If you're looking for the one tool that will change your business today - this is the app that will do it!"</p>
        </div>
        
      </div>
    <div className='backdrop-invert bg-purple-900/30 h-[40rem] w-full absolute z-10'></div>
    </div>
    <div className='flex justify-center items-center pb-60'>
    <div className='flex flex-col w-3/4 h-[36rem] rounded-xl overflow-y-scroll snap-mandatory snap-y'>
      <div className='flex justify-center py-4  w-full text-3xl bg-black text-white'><BsArrowDown/></div>
      <div className='flex snap-center'>
      <img className='w-1/2' src={require('../Images/pexels-helena-lopes-693267.jpg')} alt='phone'/>
      <div className='flex justify-center flex-col text-white bg-violet-900 w-1/2 px-5'>
          <h3 className='font-display text-3xl'>Share the best moments with your peers</h3>
          <p className='font-display text-lg'>Stay connected on-the-go, never missing a beat with real-time updates and notifications that keep you in the loop.</p>
        </div>
      </div>
      <div className='flex snap-center'>
      <img className='w-1/2' src={require('../Images/pexels-humphrey-muleba-1647116.jpg')} alt='phone'/>
      <div className='flex justify-center flex-col bg-white w-1/2 px-5'>
          <h3 className='font-display text-3xl'>Power of doing business in your hands</h3>
          <p className='font-display text-lg'>Embrace the power of connection and elevate your shared experiences to new heights.</p>
        </div>
      </div>
      <div className='flex snap-center'>
      <img className='w-1/2' src={require('../Images/pexels-irina-iriser-1647976.jpg')} alt='phone'/>
      <div className='flex justify-center flex-col text-white bg-violet-900 w-1/2 px-5'>
          <h3 className='font-display text-3xl'>No hassles, just the way we like it</h3>
          <p className='font-display text-lg'>Experience the joy of seamless connections as you create lasting memories together. </p>
        </div>
      </div>
      <div className='flex snap-center'>
      <img className='w-1/2' src={require('../Images/pexels-mudassir-ali-1657299.jpg')} alt='phone'/>
      <div className='flex justify-center flex-col bg-white w-1/2 px-5'>
          <h3 className='font-display text-3xl'>Less time worrying, and more time working</h3>
          <p className='font-display text-lg'>Celebrate achievements, inspire each other's growth, and find comfort in the shared bonds that strengthen your relationships.</p>
        </div>
      </div>
      <div className='flex justify-center py-4 w-full bg-violet-900 text-white text-3xl'><BsArrowUp/></div>
    </div>
    </div>
    </div>
  )
}

export default Main;