import React from 'react'

function Copywrite() {
  return (
    <footer className="flex lg:flex-row flex-col gap-5 justify-between px-8 py-6 border-t border-black">
      <p className="leading-7 [&:not(:first-child)]:mt-0">
      Copyright © 2024 Dine Market
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-0">
        Design by. <span className='font-bold'> Hamza Qureshi</span>
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-0">
        Code by. <span className='font-bold'>Hamza Qureshi</span> 
        </p>
  </footer>
  )
}

export default Copywrite;