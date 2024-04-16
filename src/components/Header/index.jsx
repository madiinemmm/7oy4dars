import React from 'react'

function Header() {
  return (
    <div className='flex gap-[350px] w-[1080px] ml-auto mr-auto bg-[#1A2038] p-2 rounded-lg text-white mt-[80px]'>
        <div>
            <p>Brand</p>
        </div>
        <div className='flex gap-[130px]'>
            <p>Category</p>
            <p>Price</p>
            <p>Status</p>
            <p>Action</p>
        </div>
    </div>
  )
}

export default Header