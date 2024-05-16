import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, LinkedinIcon, ShoppingCart, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="flex lg:flex-row flex-col py-2 gap-10 ml-8">
      {/* one */}
      <div className="flex flex-col flex-1 gap-10">
        <h1 className="font-bold text-xl ">DIA HUB</h1>

        <p className="leading-7  [&:not(:first-child)]:mt-0">
        Discover our collection of vibrant, high-quality scrunchies designed to complement your unique style.
        </p>


        </div>

      {/* FOur */}
      <div className="flex-1">
        <ul className="ml-6 flex flex-col gap-2">
        <li className="text-xl font-bold mb-6">Follow us on</li>
        <div className="flex flex-row gap-5 ">
        <div className="bg-gray-200 rounded-lg h-10 w-10 flex justify-center items-center">
          <Twitter className="h-6 w-6" />
        </div>
        <div className="bg-gray-200 rounded-lg h-10 w-10 flex justify-center items-center">
          <Facebook className="h-6 w-6" />
        </div>
        <div className="bg-gray-200 rounded-lg h-10 w-10 flex justify-center items-center">
          <LinkedinIcon className="h-6 w-6" />
        </div>
      </div>
      </ul>
      </div>
      
    </footer>
    
  );
}

export default Footer;