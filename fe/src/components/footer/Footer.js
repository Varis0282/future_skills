import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-row bg-black text-white py-8 px-16 justify-around h-[20rem]">
      <div className="flex flex-col items-start">
        <p className='font-semibold text-[24px] mb-3'>Abstract</p>
        <p>Branches</p>
      </div>
      <div className="flex flex-col items-start">
        <p className='font-semibold text-[24px] mb-3'>Resources</p>
        <p>Blog</p>
        <p>Help Center</p>
        <p>Release Notes</p>
        <p>Status</p>
      </div>
      <div className="flex flex-col items-start">
        <p className='font-semibold text-[24px] mb-3'>Community</p>
        <p>Twitter</p>
        <p>Linkedin</p>
        <p>Facebook</p>
        <p>Dribble</p>
        <p>Podcast</p>
      </div>
      <div className="flex flex-col items-start">
        <p className='font-semibold text-[24px] mb-3'>Company</p>
        <p>About us</p>
        <p>Careers</p>
        <p>Legal</p>
        <p className='font-semibold text-[16px] mt-6'>Contact us</p>
        <p>info@abstract.com</p>
      </div>
      <div className="flex flex-col items-start justify-end">
        <p className='font-semibold text-[24px] mb-3'>Abstract</p>
        <p>&copy; Copyright 2022</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer