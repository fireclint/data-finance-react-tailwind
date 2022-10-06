import React from 'react';
import Cards from './Cards';

function Analytics() {
  return (
    <div className='w-full    justify-center relative   bg-transparent font-poppins  '>

      <div className='flex mx-28'>
      <div className='w-1/2  text-center m-auto  h-48   flex flex-col '>
        <h1 className='text-blue-500 text-4xl font-bold leading-loose font-poppins'>What we do? </h1>
        <p className=' font-poppins font-normal text-slate-700 text-lg  leading-10 tracking-wider  '>Concentrating primarily on financial services industry, TASPro Technologies is laser focused on delivering purpose built IT systems for financial advisory services and fintech firms in APAC region.</p>
      </div>

      <div className='w-1/3'>
        <img src="images/business/business2.jpg" alt='' className=''/>
      </div>
      </div>
      <Cards />
      
   </div>
  )
}

export default Analytics