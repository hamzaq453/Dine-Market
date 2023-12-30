import P1 from '/public/P1.png'
import P3 from '/public/P3.png'
import PrCard from '@/comp/PrCard'
import { Products } from '@/utils/mockup'

const ProductsList = () => {
  const productChunks = Products.slice(0,3)
  console.log(productChunks);
  return (
    <div className='flex justify-evenly mt-16 py-10'>

      {productChunks.map((prod)=>(
        <PrCard key={prod.id} 
        title={prod.name} 
        price={prod.price} 
        img={prod.image}
        category={prod.category}
        tagline={prod.tagline}
        id={prod.id}
        />
      
      )
      ) }

    </div>
  ) 
}

export default ProductsList;