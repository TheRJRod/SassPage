
function Navbar({heroOne}) {
  return (
    <div >
      <ul className={`flex relative justify-center items-center gap-x-10 py-6 font-bold ${heroOne ? 'bg-violet-800/75' : 'bg-indigo-500'} text-white z-10 transition-all duration-700`}>
        <li className=' cursor-pointer'>Home</li>
        <li className=' cursor-pointer'>About</li>
        <img className='h-12  cursor-pointer' src={require('../Images/r2 logo.png')} alt='Company logo' />
        <li className=' cursor-pointer'>Product</li>
        <li className=' cursor-pointer'>Contact</li>
      </ul>
    </div>
  )

}


export default Navbar;