'use client'
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";




const Contact = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);


  return (

<section className="text-black  md:my-6 my-12 w-full  gap-4 relative " id="contact">
      {/* circule Effect */}
     <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
     </div>
      <div className="z-10 mb-10 ">
        <h5 className="text-xl font-bold  my-2">Please Enter your Details to Place Order</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
        </p>
      </div>

      <form action="https://formspree.io/f/mdoqjbzl" method="POST" className="flex flex-col justify-between " >
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Full Name
          </label>
          <input
            name="Name"
            type="text"
            id="text"
            required
            placeholder="Enter your Full Name"
            className=" border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-[50%] p-2.5"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="text" className="block mb-2 text-sm font-medium">
            Product Name
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            placeholder="Ex: Silk Scrunchies Pack of 10"
            className=" border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-[50%] p-2.5"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="text" className="block mb-2 text-sm font-medium">
            Contact Number
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            placeholder="0300-1234567"
            className=" border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-[50%] p-2.5"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Address
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter Full Home Address: House No, Block, Area, City , Province  "
            className=" border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-[50%] p-2.5"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-primary-600 text-medium py-2.5 px-5 mb-10 rounded-lg w-full"
        >
          Place Order
        </button>
        {emailSubmitted && (
          <p className="text-green-500 mt-2 text-sm">
            Order Placed Successfully
          </p>
        )}
      </form>
    </section>
  )
}

export default Contact