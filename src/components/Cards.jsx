import React from 'react';
import { RiFocus3Fill } from "react-icons/ri";
import { AiOutlineRise } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";

const Cards = () => {
  return (
    <div className='w-full mt-28  mb-10 px-4 bg-transparent font-poppins  '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <RiFocus3Fill color='#2563eb' size={"4rem"} className=' mx-auto mt-[3rem] bg-white'  />
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 leading-10 tracking-wider text-slate-700'>At TASPro, we strongly focus on business outcome, thus we treat technology as a value driver rather as constraint.</p>

              </div>
              {/* <button className='bg-[#f43f5e] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
          <div className='w-full shadow-xl bg-slate-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <FaThumbsUp color='#2563eb' size={"4rem"} className=' mx-auto mt-[3rem] bg-transparent'  />

              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 leading-10 tracking-wider text-slate-600'>Our business focused technology ranges from Enterprise Business System,application customer experience & engagement, Data management & practices, Decision support systems, Legislation & compliance, Cyber security and Virtual desktop support
</p>

              </div>
              {/* <button className=' bg-[#f43f5e] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <AiOutlineRise color='#2563eb' size={"4rem"} className=' mx-auto mt-[3rem] bg-white'  />

              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 leading-10 tracking-wider text-slate-700'> We provide technical solution that are customized and specific to the business needs.</p>

              </div>
              {/* <button className='bg-[#f43f5e] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
          </div>
      </div>
    </div>
  );
};

export default Cards;
