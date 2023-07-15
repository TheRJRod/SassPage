import {AiFillStar} from 'react-icons/ai';
import { useState } from 'react';


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
    setPhonePosition('translate-y-[58rem]')
    setPhoneTwoPosition('translate-y-[58rem]')
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
    <div className={`flex justify-around ${dotOne ? '' : '-translate-x-full'} transition-all duration-1000 delay-300	`}>
      <img className={`h-52 self-start	${dotOne ? '-rotate-45' : ''}  transition-all duration-700`} src={require('../Images/pngwing.com.png')} alt='floating phone' />
      <div className='flex pr-30 gap-6'>
      <img className={`h-[32rem]  drop-shadow-2xl transform transition-all duration-1000  ${phonePosition}`} src={require('../Images/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c72e81c69.7002471815219539069507.png')} alt='Product' />
      <div className='flex flex-col   justify-center	items-center gap-y-4'>
      <p className='text-white font-display text-center  text-4xl'>Hottest App <br/> in Apple Store</p>
      <span className='flex text-4xl text-yellow-500'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
      </span>
      <img className='h-14' src={require('../Images/download-on-the-app-store-apple-logo-png-transparent.png')} alt='Iphone App Download' />
      </div>
      
      </div>
      <img className={`h-72 	self-end  ${dotOne ? '-rotate-45' : ''} transition-all duration-700`} src={require('../Images/pngwing.com (1).png')} alt='floating phones' />
    </div>

    {/* Second Hero Section */}
    <div className={`flex justify-center absolute ${dotTwo ? '' : 'translate-x-full'}	transition-all duration-1000 delay-300	 top-0 left-0 right-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 py-10`}>
    <div className='flex mr-32'>
      <h1 className='text-right text-white text-4xl self-center pr-10'>The tool that will <br/> <span className='text-7xl text-indigo-500'>BOOST</span> <br/> your business today!</h1>
      <img className={` h-[32rem]  drop-shadow-2xl ${phoneTwoPosition} transition-all duration-1000 delay-300`} src={require('../Images/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c72e81c69.7002471815219539069507.png')} alt='Product' />
      <div className='text-white font-display text-2xl pl-5 flex flex-col justify-center	gap-32'>
        <p>Top functionality</p>
        <p>Best Service</p>
        <p>Customer Satisfaction</p>
      </div>
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