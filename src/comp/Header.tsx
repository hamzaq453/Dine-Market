import Link from 'next/link';
import Logo from '/public/Logo.png';
import Image from 'next/image';
import { ShoppingCart, Search } from 'lucide-react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='flex justify-between items-center py-6 px-8 border-b'>
        <div>
          <Link href={"/"}>
            {/* <Image src={Logo} alt='Logo' /> */}
            <h1 className='font-bold text-3xl text-purple-600'>DIA HUB</h1>
          </Link>
        </div>

        <div className='lg:hidden'>
          <button onClick={toggleMobileMenu} className='text-gray-800'>
            {isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>

        <ul className={`lg:flex gap-x-10 text-xl font-medium text-gray-800 ${isMobileMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white px-8 py-4 z-10' : 'hidden'}`}>
          <li className='py-2 lg:py-0'>
            <Link href={"/"}>Home</Link>
          </li>
          <li className='py-2 lg:py-0'>
            <Link href={"/category/scrunchies"}>Scrunchies</Link>
          </li>
          <li className='py-2 lg:py-0'>
            <Link href={"/products"}>All Products</Link>
          </li>
        </ul>

        <div className='hidden lg:flex items-center justify-center gap-x-4'>
          <h1 className='text-lg font-medium text-purple-600'>Enjoy Free Delivery on All Products!</h1>
          <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center'>
            <ShoppingCart className='h-6 w-6' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
