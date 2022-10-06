import React from 'react';
import './style.css'

const Hero = () => {
  return (
<div className='w-full h-full font-poppins relative top-[-80px]  '>
  
   {/* <img src='/images/hero/hero2.png' className='hidden sm:block sm:w-full ' alt=''  /> */}

  
  {/* <div className=' absolute top-0 right-0 w-1/2 '>


  <div className='absolute top-56 left-24 
  
  sm:top-48 
  md:top-36  
  lg:top-56 
  xl:top-96 
  xl:left-56
  
  '>

    <div className=' w-1/3 h-1/3  '>
    </div>

    <div className='w-1/3 h-1/3 flex flex-col  items-start my-0.5  space-y-5   '>
      <h1 className='text-5xl text-rose-300 font-extralight 
      sm:text-lg md:text-xl lg:text-2xl xl:text-2xl  '>TASPro <br /> Technologies</h1>
      <p className='text-2xl justify-start place-items-stretch m-auto align-super flex flex-col  text-slate-400 space-y-3 
      sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  '>
      Delivering business  value through <br /><span className='text-rose-500 font-bold  text-6xl  
      sm:text-lg md:text-xl lg:text-2xl xl:text-3xl '>Technology</span>
      </p>
    </div>

    <div className='w-1/3 h-1/3 '>
    </div>

  </div> 
  </div> */}

    {/* default - mobile */}
    <div className='w-[100hw] h-[90vh]  sm:hidden lg:hidden flex flex-col   '>
    <img src='/images/hero/hero4.jpg' className='w-full h-[100vh] object-cover object-center   sm:hidden  ' alt=''  />

      <div className=' h-[100vh] w-[100hw]  items-center  flex flex-col justify-center space-y-4'>
        <h1 className='text-3xl text-blue-400 font-normal items-center flex flex-col mx-7 '>TASPro Technologies</h1>
        <p className='text-base text-slate-600 font-light items-center mx-7 flex  '>Delivering business  value  through Technology</p>
        <button className='w-36 h-10 bg-blue-500 rounded-[25px] p-2 text-white font-poppins tracking-wide shadow-2xl hover:text-blue-500 hover:bg-white '>Contact us</button>
      </div>

    </div>

    {/* sm: 640px */}
    <div className='hidden sm:flex lg:hidden   relative '>
    <img src='/images/hero/hero4.jpg' className='w-full h-[100vh] object-cover object-center ' alt=''  />
<div className='absolute left-1/2 top-1/2 ml-10'>
<div className='w-1/3 h-1/3'></div>
      <div className='w-full h-1/3 flex flex-col items-start my-0.5 space-y-3 '>
        <h1 className='text-blue-200 text-[24px] font-extralight leading-9 tracking-wider'>TASPro <br /> Technologies</h1>
        <p className='text-slate-400 text-[12px] leading-10 tracking-wider  '>Delivering business value through <br /><span className='text-[42px] font-normal text-blue-500'>Technology</span></p><button className='w-36 h-10 bg-blue-500 rounded-[25px] p-2 text-white font-poppins tracking-wide shadow-2xl hover:text-blue-500 hover:bg-white '>Contact us</button>
      </div>
      <div className='w-1/3 h-1/3'></div>
</div>
    </div>


    {/* lg: 1024px */}
    <div className='hidden sm:hidden  lg:flex xl:hidden  relative '>
    <img src='/images/hero/hero4.jpg' className='w-full h-[100vh] object-cover object-center ' alt=''  />
<div className='absolute left-1/2 top-1/2 ml-28'>
<div className='w-1/3 h-1/3'></div>
      <div className='w-full h-1/3 flex flex-col items-start my-0.5 space-y-3 '>
        <h1 className='text-blue-200 lg:text-[30px] font-extralight leading-9 tracking-wider'>TASPro <br /> Technologies</h1>
        <p className='text-slate-400 lg:text-[16px] leading-10 tracking-wider '>Delivering business value through <br /><span className='text-[60px] font-normal text-blue-500'>Technology</span></p>
        <button className='w-36 h-10 bg-blue-500 rounded-[25px] p-2 text-white font-poppins tracking-wide shadow-2xl hover:text-blue-500 hover:bg-white '>Contact us</button>
      </div>
      <div className='w-1/3 h-1/3'></div>
</div>
    </div>


    {/* xl 1280px*/}

    <div className='hidden sm:hidden  lg:hidden xl:flex  relative '>
    <img src='/images/hero/hero4.jpg' className='w-full h-[100vh] object-cover object-center scale-70 ' alt=''  />
<div className='absolute left-1/2 top-1/2 ml-48 '>
<div className='w-1/3 h-1/3'></div>
      <div className='w-full h-1/3 flex flex-col items-start my-0.5 space-y-3  '>
        <h1 className='text-blue-200 lg:text-[42px] font-extralight leading-9 tracking-wider'>TASPro <br />Technologies</h1>
        <p className='text-slate-400 lg:text-[16px] leading-10 tracking-wider '>Delivering business value through <br /><span className='text-[72px] font-normal text-blue-500 '>Technology</span></p>
        <button className='w-36 h-10 bg-blue-500 rounded-[25px]  text-white font-poppins tracking-wide shadow-2xl p-0 hover:text-blue-500 hover:bg-white '>Contact us</button>
      </div>
      <div className='w-1/3 h-1/3'></div>
</div>
    </div>


  
  
  
      
    
</div>
  );
};

export default Hero;
