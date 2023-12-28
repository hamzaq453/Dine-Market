import { Products } from "@/utils/mockup"
import PrCard from '../../comp/PrCard'

const Allproducts = () => {

  return (

    <div className='flex justify-evenly flex-wrap mt-16 py-10'>
    {Products.map((prod)=>(
      <PrCard key={prod.id} 
      title={prod.name} 
      price={prod.price} 
      img={prod.image}
      category={prod.category}
      /> 
    )
    ) }
    
  </div>
)
}

export default Allproducts