import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import imagee from '/public/HeroSec.webp'
import image2 from './public/Image2.jpg'
import Image from 'next/image'
import Link from 'next/link'


const HeroSec = () => {
  return (
    <section className='flex flex-col gap-y-10 py-6 lg:flex-row mt-8'>
      

    <div className='flex-1'>
        <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-300'>Sale 20%</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold mt-6 tracking-tight lg:text-5xl">
        <span className='text-green-400'>Scrunchies </span>
         <span className='text-blue-400'>That </span>
         <span className='text-orange-400'>Speak </span>
         <span className='text-pink-400'>Your </span>
         <br/>
         <span className='text-red-400'>Style</span>
      </h1>
      <br/>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
      Discover our collection of vibrant, high-quality scrunchies designed to complement your unique style.
      </p>
        <br/>
        <Link href={'/products'}>
      <Button className='bg-purple-700 h-12 px-8 py-10 mt-4 text-md'>Start Shopping</Button>
      </Link>
    </div>
    

    <div className='relative left-12 mb-40 mr-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
            <Image
             
             src={imagee}
             alt='HeroImage'
             className='h-full w-full object-cover object-center'
             width={500}
             height={500}
             priority

            />
            </div>
        </section>
  )
}

export default HeroSec