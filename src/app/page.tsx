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
    <Promotions/>
    <div className='p-10 -mb-20 mt-10'>
    <h2 className=' text-blue-700 text-center text-[10] font-bold'>TRENDING</h2>
    <br />
    <h1 className='font-bold font-serif text-4xl flex justify-center text-centrer'>
      Top Trending</h1>
      </div>
    <Products/>
    <div className='py-20'>
    <div className='text-center text-4xl font-bold mt-10'>
        Subscribe Our Newsletter
        </div>
        <h2 className='text-center text-lg mt-4'>Get the latest information and promo offers directly
        </h2>

        <div className='flex mt-6 justify-center items-center text-lg'>
      <Newsletter />
      </div>
      <Footer/>
      </div>
   </main>
   </>
  )
}
