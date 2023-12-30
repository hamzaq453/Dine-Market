import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-black
    font-medium text-lg text-center  '>
        <div className='py-8 flex justify-evenly text-center'>
        <span className='-ml-40'>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex'>
        Made By &nbsp;<Link href="mailto:qhamza4532@gmail.com"
         className='underline '>
             Hamza Qureshi</Link>
        </div>
    
        </div>
    </footer>
    )
}

export default Footer