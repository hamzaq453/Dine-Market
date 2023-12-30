'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Quantity = () => {

const [num, setnum] = useState(1)
  return (
    <div className='flex gap-x-4 items-center'>
    <div className='flex items-center hover:cursor-pointer justify-center text-2xl h-9 w-9 bg-slate-100 ml-3 rounded-full'
    onClick={()=>{
        setnum(num<=1 ? 1 : num - 1)
    }}>
            - 
    </div>
    <span className='text-lg'>
        {num}
    </span>
    <div className='flex hover:cursor-pointer items-center justify-center text-2xl h-9 w-9 bg-slate-100 rounded-full'
    onClick={()=>{
        setnum(num + 1)
    }}>
            +
</div>


</div>
  )
}

export default Quantity
