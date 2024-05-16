import Image from 'next/image'
import HeroSec from '@/views/HeroSec'
import Products from '@/views/ProductsList'
import Newsletter from '@/comp/Newsletter'
import Promotions from '@/comp/Promotions'
import Footer from '@/comp/Footer'
export default function Home() {
  return (
    <>
    <main>
    <HeroSec/>
    <div className='p-4'>
    <h2 className=' text-purple-600 text-center text-xl font-bold'>TRENDING</h2>
    <br />
    
      </div>
    <Products/>
    <div className='py-20'>
    {/* <div className='text-center text-4xl font-bold'>
        Subscribe Our Newsletter
        </div>
        <h2 className='text-center text-lg mt-4'>Get the latest information and promo offers directly
        </h2>

        <div className='flex mt-6 justify-center items-center text-lg'>
      <Newsletter />
      </div> */}
      <Footer/>
      </div>
   </main>
   </>
  )
}
