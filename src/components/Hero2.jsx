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
    <div className='w-[100hw] h-[100vh]  sm:hidden lg:hidden flex flex-col  bg-slate-900 '>
    <img src='/images/hero/hero4.jpg' className='w-full h-[1900px] object-cover object-center   sm:hidden opacity-50 ' alt=''  />

      <div className=' h-[100vh] w-[100hw]  items-center  justify-center space-y-4'>
        <h1 className='text-2xl text-blue-400 font-normal items-center text-center flex flex-col mx-7 tracking-wider'>TASPro Technologies</h1>
        <div className='text-center leading-10 tracking-wider'>
        <p className='text-base text-slate-600 text-center flex-col font-light items-center flex-wrap mx-7 flex  '>Delivering business  value  through <br />
        <span className='text-[28px] font-poppins font-bold text-blue-800 bg-slate-100 p-1 rounded-lg  opacity-80'>Technology</span></p>
        </div>
        <button className='w-36 h-10 bg-blue-500 rounded-[25px] p-2 text-white font-poppins tracking-wide shadow-2xl hover:text-blue-500 hover:bg-white opacity-80 items-center justify-center m-auto flex'>Contact us</button>
      </div>

    </div>

    {/* sm: 640px */}
    <div className='hidden sm:flex lg:hidden   relative bg-slate-900 '>
    <img src='/images/hero/hero4.jpg' className='w-full h-[100vh] object-cover object-center opacity-50' alt=''  />
<div className='absolute left-1/2 top-1/2 ml-10'>
<div className='w-1/3 h-1/3'></div>
      <div className='w-full h-1/3 flex flex-col items-start my-0.5 space-y-3 '>
        <h1 className='text-blue-100 text-[24px] font-extralight leading-10 tracking-wider opacity-90'>TASPro <br /> Technologies</h1>
        <p className='text-slate-200 text-[12px]  tracking-wider opacity-70 '>Delivering business value through <br /><span className='text-[42px] font-bold text-blue-800 bg-slate-100 p-1 rounded-lg  opacity-80'>Technology</span></p>
        <button className='w-36 h-10 bg-blue-800 rounded-[20px] p-2 text-white font-poppins tracking-wide shadow-2xl hover:text-blue-800 hover:bg-white opacity-80'>Contact us</button>
      </div>
      <div className='w-1/3 h-1/3'></div>
</div>
    </div>


    {/* lg: 1024px */}
    <div className='hidden sm:hidden  lg:flex xl:hidden  relative bg-slate-900 '>
    <img src='/images/hero/hero4.jpg' className='w-full h-[100vh] object-cover object-center opacity-50 ' alt=''  />
<div className='absolute left-1/2 top-1/2 ml-28'>
<div className='w-1/3 h-1/3'></div>
      <div className='w-full h-1/3 flex flex-col items-start my-0.5 space-y-3 '>
        <h1 className='text-blue-100 lg:text-[35px]  leading-10 tracking-wider opacity-90'>TASPro <br /> Technologies</h1>
        <p className='text-slate-200 lg:text-[16px]  tracking-wider opacity-70'>Delivering business value through <br /><span className='text-[60px] font-bold text-blue-800 bg-slate-100 p-1 rounded-lg  opacity-80 '>Technology</span></p>
        <button className='w-36 h-10 bg-blue-800 rounded-[20px] p-2 text-white font-poppins tracking-wide shadow-2xl hover:text-blue-800 hover:bg-white opacity-80'>Contact us</button>
      </div>
      <div className='w-1/3 h-1/3'></div>
</div>
    </div>


    {/* xl 1280px*/}

    <div className='hidden sm:hidden  lg:hidden xl:flex  relative bg-slate-900'>
    <img src='/images/hero/hero4.jpg' className='w-full h-[100vh] object-cover object-center opacity-50 ' alt=''  />
<div className='absolute left-1/2 top-1/2 ml-48 '>
<div className='w-1/3 h-1/3'></div>
      <div className='w-full h-1/3 flex flex-col items-start my-0.5 space-y-3  '>
        <h1 className='text-blue-100 lg:text-[42px]  leading-10 tracking-wider opacity-90'>TASPro <br />Technologies</h1>
        <p className='text-slate-200 lg:text-[16px]  tracking-wider opacity-70'>Delivering business value through <br /><span className='text-[72px] font-bold text-blue-800 bg-slate-100 p-1 rounded-lg  opacity-80 '>Technology</span></p>
        <button className='w-36 h-10 bg-blue-800 rounded-[20px] p-2 text-white font-poppins tracking-wide shadow-2xl hover:text-blue-800 hover:bg-white opacity-80'>Contact us</button>
      </div>
      <div className='w-1/3 h-1/3'></div>
</div>
    </div>


  
  
  
      
    
</div>
  );
};

export default Hero;
