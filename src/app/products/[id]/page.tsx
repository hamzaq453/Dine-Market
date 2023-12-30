import Quantity from "@/comp/Quantity"
import { Button } from "@/components/ui/button"
import { Products } from "@/utils/mockup"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

const getProductsDetail = (id:number) => {
  return Products.filter((product)=>product.id==id)
}
 const sizes =["XS","S","M","L","XL"]
export default function Page({ params }: { params: { id: number } }) {

  const result= getProductsDetail(params.id)

    return (
    <div className='flex mt-16 py-10 flex-wrap justify-evenly'>

    { result.map((prod)=>(
      <div  key={prod.id} className="flex justify-between gap-6">
      <div>
      <Image src={prod.image} alt={prod.name}/>
      </div>
      <div>
      <div>
     <h1 className="text-3xl font-mono"> {prod.name}</h1>
     <h2 className="text-xl  text-gray-400 font-semibold"> {prod.tagline}</h2> 
     </div>

     <div>
      <br />
     <h3 className="text-small mt-6  font-semibold">SELECT SIZE</h3>
     {/* Sizes */}

     <div className="flex gap-x-5">
     {sizes.map((item)=>{
        return(
          <div className="w-10 h-10 mt-4 rounded-full bg-slate-100  hover:bg-slate-200 duration-300 flex justify-center items-center">
      <span className="text-center text-lg text-gray-600 font-semibold">
          {item}
      </span>
      
     </div>
     
    )})
    }
</div>
{/* Quantity */}
<br />
    <div className="flex mt-5 items-center">
      <h3 className="font-semibold text-lg"> Quantity: </h3>
      <Quantity/>
    </div>
    <br />
    <div className="flex items-center">
    
      <Button className="bg-black"> <ShoppingCart className="mr-4"/> ADD TO CART</Button>
      <h3 className="text-2xl font-semibold ml-4">{prod.price.toFixed(2)}$</h3>
    </div>

     </div>
     </div>
     </div>
    ))}
  </div>
  )
  }