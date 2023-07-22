import { useState } from "react";
import { gsap, Power3 } from "gsap/gsap-core";

function Pricing() {
  
  const [pricing, setPricing] = useState(true);
  

  const handleAnnualClick = () => {
    setPricing(false)
  }

  const handleMonthlyClick = () => {
    setPricing(true)
  }
  
  
  return(
    <div className="flex flex-col justify-center items-center border-2 border-indigo-900/25 w-3/4 mx-auto mb-[20rem] relative">
      <div className='absolute top-0 left-0 w-36 h-36 -z-20 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob '></div>
      <div className='absolute top-0 left-20 w-36 h-36 -z-20 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
      <div className='absolute top-20 left-0 w-36 h-36 -z-20 translate-x-40	 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animation-delay-4000 animate-blob'></div>
      <div className="flex flex-col items-center gap-y-8 py-20">
        <h3 className="font-display text-5xl font-bold">Pricing Plans</h3>
        <p className="font-display text-xl">From small business owners, to large corporations. We got you covered.</p>
        <div className="flex gap-x-10 relative">
          <button onClick={handleMonthlyClick} className={`font-display text-xl ${pricing ? 'text-white' : 'text-black'} hover:scale-105`}>Monthly</button>
          <button onClick={handleAnnualClick} className={`font-display text-xl ${pricing ? 'text-black' : 'text-white'} hover:scale-105`}>Annual</button>
          <div className={`h-10 w-28 -top-1.5 transition-all duration-500 ${pricing ? '-left-4' : 'left-[6.3rem]'} bg-black absolute rounded-md -z-10`}></div>
        </div>
      </div>
      {/* Pricing boxes */}
      <div className="flex gap-10">
      <div className="flex flex-col gap-y-6 border-2 border-black/25 py-4 rounded-md mb-20">
        <h4 className="font-bold font-display text-4xl pl-4">Free</h4>
        <p className="font-display text-xl pl-4">Starter Package</p>
        <p className="font-display text-xl pl-4"><span className="font-display text-5xl font-bold">$0</span>/month</p>
        <ul className="font-display text-xl pl-4">
          <li>1000 Queries/month</li>
          <li>One User Per Account</li>
          <li>Basic Support</li>
        </ul>
        <button className="font-display text-xl text-white bg-black mx-4 py-4 px-20 rounded-md transition-all duration-500 hover:opacity-90 hover:scale-105">Sign Up</button>
      </div>

      <div className="flex flex-col gap-y-6 border-2 border-black/25 py-4 rounded-md mb-20">
        <h4 className="font-bold font-display text-4xl pl-4">Pro</h4>
        <p className="font-display text-xl pl-4">Individual Package</p>
        <p className="font-display text-xl pl-4"><span className="font-display text-5xl text-violet-900 font-bold">${pricing ? '20' : '10'}</span>/month</p>
        <ul className="font-display text-xl pl-4">
          <li>5000 Queries/month</li>
          <li>Two Users Per Account</li>
          <li>Premium Support</li>
        </ul>
        <button className="font-display text-xl text-white bg-violet-900 mx-4 py-4 px-20 rounded-md transition-all duration-500 hover:opacity-90 hover:scale-105">Sign Up</button>
      </div>

      <div className="flex flex-col gap-y-6 border-2 border-black/25 py-4 rounded-md mb-20">
        <h4 className="font-bold font-display text-4xl pl-4">Business</h4>
        <p className="font-display text-xl pl-4">Corporate Package</p>
        <p className="font-display text-xl pl-4"><span className="font-display text-5xl font-bold">${pricing ? '200' : '100'}</span>/month</p>
        <ul className="font-display text-xl pl-4">
          <li>10,000 Queries/month</li>
          <li>Unlimited Users</li>
          <li>Premium Support</li>
        </ul>
        <button className="font-display text-xl text-white bg-black mx-4 py-4 px-20 rounded-md transition-all duration-500 hover:opacity-90 hover:scale-105">Sign Up</button>
      </div>

      </div>
    </div>
  )
}


export default Pricing;