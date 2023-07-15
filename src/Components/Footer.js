
function Footer({heroOne}) {
  return(
    <div className={`${heroOne ? 'bg-gradient-to-t from-violet-800' : 'bg-gradient-to-t from-indigo-500'} `}>
      <div className='flex py-20 items-center justify-center'>
      <img className='h-14 cursor-pointer self-start ' src={require('../Images/r2 logo.png')} alt='Company logo' />
      <ul className='flex gap-6 font-display text-xl font-bold'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Product</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
      </div>
      </div>
  )
}

export default Footer;