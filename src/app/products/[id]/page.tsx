import { Products } from "@/utils/mockup"
import Image from "next/image"

const getProductsDetail = (id:number) => {
  return Products.filter((product)=>product.id==id)
}
 
export default function Page({ params }: { params: { id: number } }) {

  const result= getProductsDetail(params.id)

    return (
    <div className='flex mt-16 py-10 flex-wrap justify-evenly '>

    { result.map((prod)=>(
      <div  key={prod.id} className="flex justify-between">
     <div> 
     </div>
     <div className="flex justify-between gap-10">
      <Image src={prod.image} alt={prod.name}/>
      

<div className="font-bold">
     <div className="font-bold text-lg underline"> Product Details:</div>
      <br />
     <p>Name: {prod.name}</p>
     <br />
     <p>Price: ${prod.price}</p>
     <br />
     <p>Category: {prod.category}</p>
     </div>
</div>
    
     </div>
    ))}
  </div>
  )
  }