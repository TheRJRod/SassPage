import {AiFillStar} from 'react-icons/ai';
import { useState } from 'react';
import SVGHeading from '../Images/SVG/Untitled-1.svg'

function Hero({setHero}) {
const [dotOne, setDotOne] = useState(true);
const [dotTwo, setDotTwo] = useState(false);
const [phonePosition, setPhonePosition] = useState('')
const [phoneTwoPosition, setPhoneTwoPosition] = useState('')

setHero(dotOne, dotTwo);

const handleClickOne = () => {
  setDotOne(true)
  setDotTwo(false)
 
}

const handleClickTwo = () => {
  setDotOne(false)
  setDotTwo(true)
  
}

const scrollPhone = () => {
  if(window.scrollY > 400) {
    setPhonePosition('translate-y-[60rem]')
    setPhoneTwoPosition('translate-y-[60rem]')
  }
  else {
    setPhonePosition('')
    setPhoneTwoPosition('')
  }
}

window.addEventListener('scroll', scrollPhone);


  return (
    <div className='bg-gradient-to-b from-violet-800 py-10 z-0 relative'>
      <div >
        {/* First Hero Section */}
    <div className={`flex justify-around ${dotOne ? '' : '-translate-x-full'} transition-all duration-1000 delay-300 relative	`}>
      <img className={`h-52 self-start	${dotOne ? '-rotate-45' : ''}  transition-all duration-700`} src={require('../Images/pngwing.com.png')} alt='floating phone' />
      <div className='flex pr-30 gap-6'>
      <img className={`h-[32rem]  drop-shadow-2xl transform transition-all duration-1000  ${phonePosition}`} src={require('../Images/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c72e81c69.7002471815219539069507.png')} alt='Product' />
      <div className='flex flex-col   justify-center	items-center gap-y-4'>
      <p className='text-white font-display text-center  text-4xl'>Hottest App <br/> in Apple Store</p>
      <span className='flex text-4xl text-yellow-500'>
        <AiFillStar className='hover:scale-125'/>
        <AiFillStar className='hover:scale-125'/>
        <AiFillStar className='hover:scale-125'/>
        <AiFillStar className='hover:scale-125'/>
        <AiFillStar className='hover:scale-125'/>
      </span>
      <img className='h-14 cursor-pointer' src={require('../Images/download-on-the-app-store-apple-logo-png-transparent.png')} alt='Iphone App Download' />
      </div>
      
      </div>
      <img className={`h-72 	self-end  ${dotOne ? '-rotate-45' : ''} transition-all duration-700`} src={require('../Images/pngwing.com (1).png')} alt='floating phones' />
      <div className='absolute top-0 left-1/2 w-72 h-72 -z-20 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
      <div className='absolute top-0 right-1/2 w-72 h-72 -z-20 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
      <div className='absolute top-20 left-[50rem] w-72 h-72 -z-20 translate-x-40	 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animation-delay-4000 animate-blob'></div>
    </div>

    {/* Second Hero Section */}
    <div className={`flex justify-center absolute ${dotTwo ? '' : 'translate-x-full'}	transition-all duration-1000 delay-300	 top-0 left-0 right-0 bg-gradient-to-b from-indigo-500 `}>
    <div className='absolute mt-10'>
      <img className={` h-[32rem]  drop-shadow-2xl ${phoneTwoPosition} transition-all duration-1000 delay-300`} src={require('../Images/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c72e81c69.7002471815219539069507.png')} alt='Product' />
    </div>
    <div className='bg-violet-900 w-1/2 flex flex-col justify-center px-40'>
    <img className='-mb-20 ' src={SVGHeading } alt='heading'/>
      <p className='font-display text-xl text-white'>Revolutionizing the way we interact with our devices, offering a user experience that transcends all expectations. </p>
      <button className='bg-white self-start rounded-full py-2 px-4 text-2xl mt-4 font-display hover:bg-black hover:text-white'>Join The Movement</button>
    </div>
    <div className='bg-indigo-500 w-1/2'>
    <img className='cursor-pointer' src={require('../Images/hero2.jpg')} alt='Iphone App Download' />
    </div>
    </div>
    </div>
    <div className='flex gap-4 absolute left-1/4'>
    <span onClick={handleClickOne} className='h-4 w-4 bg-gray-500 rounded-full cursor-pointer  left-1/4 hover:opacity-50 duration-300'></span>
    <span onClick={handleClickTwo} className='h-4 w-4 bg-gray-500 rounded-full cursor-pointer   left-1/4 hover:opacity-50 duration-300'></span>
    </div>
      
    </div>
  )
}

export default Hero;