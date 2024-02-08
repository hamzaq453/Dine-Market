import Link from 'next/link'
import Logo from '/public/Logo.png'
import Image from 'next/image'
import { ShoppingCart, Search } from 'lucide-react'


const Header = () => {
    return(
      <>
      <div className='flex justify-between items-center py-6 px-8'>
        <div><Link href={"/"}>   
           <Image src={Logo} alt='Logo'/>
           </Link> 
        </div>

      <ul className='flex gap-x-10'>
        <li className='text-lg'>
          <Link href={"/category/female"}>Female</Link>
          </li>
          <li className='text-lg'>
          <Link href={"/category/male"}>Male</Link>
          </li>
          <li className='text-lg'>
          <Link href={"/category/kids"}>Kids</Link>
          </li>        
          <li className='text-lg'>
          <Link href={"/products"}>All Products</Link>
          </li>
      </ul>
        {/* <div>
       
        <input  className='border border-black '
        placeholder=' What are you looking for?'/>  
       </div>  */}
      <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center'>
      <ShoppingCart className='h-6 w-6'/>
      </div>

      </div>
      </>
      )}

export default Header