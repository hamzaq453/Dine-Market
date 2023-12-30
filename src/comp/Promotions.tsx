import React from 'react'
import P1 from '/public/E1.png'
import P2 from '/public/E2.png'
import P3 from '/public/E3.png'
import P4 from '/public/E4.png'
import Image from 'next/image'

const Promotions = () => {
  return (
    <div>
    <div className='text-center text-[10] mt-14 text-blue-700 font-bold'>
        PROMOTIONS
    </div>
    
    <h1 className='font-bold  text-center text-3xl mt-4 mb-8'>Our Promotions Events</h1>
    <div className='flex justify-evenly'>
    <div className='flex-col'>
        <div className='mb-4'>
    <Image src={P1} alt='P1'></Image>
    </div>
    <Image src={P2} alt='P1'></Image>
    </div>
    <Image src={P3} alt='P1'></Image>
    <Image src={P4} alt='P1'></Image>


    </div>

    </div>
  )
}

export default Promotions