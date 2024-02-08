import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import imagee from '/public/Heroimg.webp'
import Image from 'next/image'
import Link from 'next/link'
const HeroSec = () => {
  return (
  
    <section className='flex flex-col gap-y-10 py-6 lg:flex-row mt-8'>
      

    <div className='flex-1'>
        <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-300'>Sale 70%</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold mt-6 tracking-tight lg:text-5xl">
        An Industrial Take on Streetwear
      </h1>
      <br/>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
        <br/>
        <Link href={'/products'}>
      <Button className='bg-black h-12 px-8 py-10 mt-4'>Start Shopping</Button>
      </Link>
    </div>
    

        <div className='flex-1'>
            <Image src={imagee} alt='img' />
        </div>
        </section>
  )
}

export default HeroSec