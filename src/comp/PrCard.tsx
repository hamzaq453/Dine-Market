import React from 'react'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';


function PrCard (props:{
   title:string,
   price: number,
   img:StaticImageData
   category: string
   id:number;
  }) {
  return (
    <>   
    <Link href={`/products/${props.id}`}>
    <div>
    <Image src={props.img} alt='P1'/>
    <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
     <p className='font-bold text-lg'>${props.price}</p>  
     <p className='font-bold text-lg'>{props.category}</p>  

    </div>
    </Link> 
    </>

)
}

export default PrCard