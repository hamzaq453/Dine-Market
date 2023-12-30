import PrCard from "@/comp/PrCard"
import { Products } from "@/utils/mockup"
import { CaseUpper } from "lucide-react"

const getProductsByCategory = (category:string) => {
  return Products.filter((product)=>product.category===category)
}

export default function Page({ params }: { params: { slug: string } }) {

  const result= getProductsByCategory(params.slug)

    return <div className='flex justify-evenly flex-wrap mt-16 py-10'>

    {
      result.length>0 ? result.map((prod)=>(
        <PrCard key={prod.id} 
        title={prod.name} 
        price={prod.price} 
        img={prod.image}
        category={ prod.category }
        tagline={prod.tagline}
        id={prod.id}

        /> 
      )
      ) : <p className="flex bg- bg-slate-400 text-2xl">No Products Found !</p>
    }

    {}
    
  </div>
  }