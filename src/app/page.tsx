import Image from 'next/image'
import HeroSec from '@/views/HeroSec'
import Products from '@/views/ProductsList'
import Newsletter from '@/comp/Newsletter'
export default function Home() {
  return (
    <>
    <main>
    <HeroSec/>
    <h1 className='font-bold font-serif text-4xl flex justify-center p-10 -mb-20 text-centrer'>
      Top Trending</h1>
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
      </div>
   </main>
   </>
  )
}
