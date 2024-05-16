import React from 'react'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';


function PrCard (props:{
   title:string,
   price: number,
   img:StaticImageData;
   category:string;
   tagline:string;
   id:number;
  }) {
  return (
    <>   
    <Link href={`/products/${props.id}`}>
    <div className='hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer mb-20'>
    <Image src={props.img} alt='P1' width={300} height={300}/>
    <h3 className='font-md font-sans text-xl mt-3 text-purple-600'>{props.title}</h3>
     {/* <p className='text-xl text-gray-400 font-semibold'>{props.tagline}</p>   */}
     <p className='font-md text-purple-700 text-lg mb-16'>{props.price} Rs</p>  

    </div>
    </Link> 
    </>

)
}

export default PrCard