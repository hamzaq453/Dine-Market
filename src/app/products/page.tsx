import { Products } from "@/utils/mockup"
import PrCard from '../../comp/PrCard'

const Allproducts = () => {

  return (

    <div className='flex justify-evenly flex-wrap mt-16 py-10'>
    {Products.map((prod)=>(
      <PrCard key={prod.id} 
       title={prod.name} 
      price={prod.price} 
      tagline={prod.tagline}
      img={prod.image}
      category={prod.category}
      id={prod.id}
      /> 
    )
    ) }
    
  </div>
)
}

export default Allproducts