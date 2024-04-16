import React from 'react'
import TableImg from '../../assets/TableImg.png'
import Phone from '../../assets/phone.png'
import Samsung from '../../assets/samsung.png'
import Nokia from '../../assets/nokia.png'
import Blackberry from '../../assets/Blackberry.png'
import { MdOutlineModeEdit } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import { LuEye } from "react-icons/lu";

function Main() {
  return (
    <div>
  <div className='flex ml-auto mr-auto bg-[#1F2A40] w-[1080px] text-white mt-[20px] items-center p-[12px] rounded-lg  '>
       <div>
        <img src={TableImg} alt="" className='ml-[10px]'/>
       </div>
       <div>
        <p className='ml-[20px]'>Apple</p>
        <p className='ml-[20px] text-[#6C757D]'>mail@gmail.com!</p>
       </div>
       <div className='flex gap-[110px]'>
        <p className='ml-[185px]'>Technology</p>
        <p>200.00$</p>
        <p className='p-[3px] bg-[#04D58D] rounded-[20px] cursor-pointer pl-[10px] pr-[10px]'>Available</p>
       </div>
       <div className='flex gap-4 '>
       <LuEye className='ml-[75px] text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500'/>
       <MdOutlineModeEdit className=' text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500'/>
       <TbTrash className=' text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500' />
      
       </div>
   
    </div>
    <div className='flex ml-auto mr-auto bg-[#1F2A40] w-[1080px] text-white mt-[20px] items-center p-[12px] rounded-lg  '>
       <div>
        <img src={Phone} alt="" className='ml-[10px]'/>
       </div>
       <div>
        <p className='ml-[20px]'>Realme</p>
        <p className='ml-[20px] text-[#6C757D]'>mail@gmail.com!</p>
       </div>
       <div className='flex gap-[110px]'>
        <p className='ml-[185px]'>Technology</p>
        <p>200.00$</p>
        <p className='p-[3px] bg-[#EB5757] rounded-[20px] cursor-pointer pl-[10px] pr-[10px]'>No Stock</p>
       </div>
       <div className='flex gap-4 '>
       <LuEye className='ml-[75px] text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500'/>
       <MdOutlineModeEdit className=' text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500'/>
       <TbTrash className=' text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500' />
      
       </div>
   
    </div>
    <div className='flex ml-auto mr-auto bg-[#1F2A40] w-[1080px] text-white mt-[20px] items-center p-[12px] rounded-lg   '>
       <div>
        <img src={Samsung} alt="" className='ml-[10px]'/>
       </div>
       <div>
        <p className='ml-[20px]'>Samsung</p>
        <p className='ml-[20px] text-[#6C757D]'>mail@gmail.com!</p>
       </div>
       <div className='flex gap-[110px]'>
        <p className='ml-[185px]'>Technology</p>
        <p>200.00$</p>
        <p className='p-[3px] bg-[#F2C94C] rounded-[20px] cursor-pointer pl-[10px] pr-[10px]'>Flash Sale</p>
       </div>
       <div className='flex gap-4 '>
       <LuEye className='ml-[75px] text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500'/>
       <MdOutlineModeEdit className=' text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500'/>
       <TbTrash className=' text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500' />
      
       </div>
   
    </div>
    <div className='flex ml-auto mr-auto bg-[#1F2A40] w-[1080px] text-white mt-[20px] items-center p-[12px] rounded-lg  '>
       <div>
        <img src={Nokia} alt="" className='ml-[10px]'/>
       </div>
       <div>
        <p className='ml-[20px]'>Nokia</p>
        <p className='ml-[20px] text-[#6C757D]'>mail@gmail.com!</p>
       </div>
       <div className='flex gap-[110px]'>
        <p className='ml-[185px]'>Technology</p>
        <p>200.00$</p>
        <p className='p-[3px] bg-[#EB5757] rounded-[20px] cursor-pointer pl-[10px] pr-[10px]'>No Stock</p>
       </div>
       <div className='flex gap-4 '>
       <LuEye className='ml-[75px] text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500'/>
       <MdOutlineModeEdit className=' text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500'/>
       <TbTrash className=' text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500' />
      
       </div>
   
    </div>
    <div className='flex ml-auto mr-auto bg-[#1F2A40] w-[1080px] text-white mt-[20px] items-center p-[12px] rounded-lg mb-[200px]  '>
       <div>
        <img src={Blackberry} alt="" className='ml-[10px]'/>
       </div>
       <div>
        <p className='ml-[20px]'>Blackberry</p>
        <p className='ml-[20px] text-[#6C757D]'>mail@gmail.com!</p>
       </div>
       <div className='flex gap-[110px]'>
        <p className='ml-[185px]'>Technology</p>
        <p>200.00$</p>
        <p className='p-[3px] bg-[#04D58D] rounded-[20px] cursor-pointer pl-[10px] pr-[10px]'>Available</p>
       </div>
       <div className='flex gap-4 '>
       <LuEye className='ml-[75px] text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500'/>
       <MdOutlineModeEdit className=' text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500'/>
       <TbTrash className=' text-[22px] text-[#6C757D] cursor-pointer hover:text-[#4c5258] transition duration-500' />
      
       </div>
   
    </div>
    </div>
    
    
   
  )
}

export default Main