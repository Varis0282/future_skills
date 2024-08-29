import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between px-24 bg-black text-white h-20 items-center text-[18px]">
      <div className="flex flex-row gap-2 items-center">
        <p className='font-bold'>Abstract</p>
        <p className='font-thin text-[24px]'>|</p>
        <p>Help Center</p>
      </div>
      <p className='pr-16'>
        <button className='border-white border rounded px-4 py-1 bg-[#292929]'>Submit a request</button>
      </p>
    </div>
  )
}

export default Navbar