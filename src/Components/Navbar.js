
function Navbar({heroOne}) {
  return (
    <div >
      <ul className={`flex relative justify-center items-center py-6 font-bold ${heroOne ? 'bg-violet-800/75' : 'bg-indigo-500'} text-white z-10 transition-all duration-700`}>
        <li className='pr-10 cursor-pointer'>Home</li>
        <li className='pr-10 cursor-pointer'>About</li>
        <img className='h-14 cursor-pointer' src={require('../Images/r2 logo.png')} alt='Company logo' />
        <li className='pl-6 cursor-pointer'>Product</li>
        <li className='pl-10 cursor-pointer'>Contact</li>
      </ul>
    </div>
  )

}


export default Navbar;