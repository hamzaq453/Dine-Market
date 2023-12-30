import React from 'react'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';


function PrCard (props:{
   title:string,
   price: number,
   img:StaticImageData
   tagline:string;
   category: string
   id:number;
  }) {
  return (
    <>   
    <Link href={`/products/${props.id}`}>
    <div>
    <Image src={props.img} alt='P1'/>
    <h3 className='font-bold font-sans text-xl mt-3'>{props.title}</h3>
     <p className='text-xl text-gray-400 font-semibold'>{props.tagline}</p>  
     <p className='font-semibold text-lg mb-16'>${props.price}</p>  

    </div>
    </Link> 
    </>

)
}

export default PrCard