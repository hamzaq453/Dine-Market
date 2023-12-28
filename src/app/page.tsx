import Image from 'next/image'
import HeroSec from '@/views/HeroSec'
import Products from '@/views/ProductsList'
export default function Home() {
  return (
    <>
    <main>
    <HeroSec/>
    <h1 className='font-bold text-2xl flex justify-center p-10 -mb-20 text-centrer'>Top Trending</h1>
    <Products/>

   </main>
   </>
  )
}
