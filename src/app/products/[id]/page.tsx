import Quantity from "@/comp/Quantity";
import { Button } from "@/components/ui/button";
import { Products } from "@/utils/mockup";
import { ShoppingCart, Star, Truck } from "lucide-react";
import Image from "next/image";
import ImageGallery from "@/comp/Image-gallery";
import Link from "next/link";


const getProductsDetail = (id: number) => {
  return Products.filter((product) => product.id == id);
};

const sizes = [ "M", "L"];

export default function Page({ params }: { params: { id: number } }) {
  const result = getProductsDetail(params.id);

  return (
    <div className='flex py-6 flex-wrap justify-evenly '>
      {result.map((prod) => (
        <div key={prod.id} className="flex justify-between gap-6 ">
          <div>
            <ImageGallery images={undefined}/>
          </div>
          <div className="ml-20">
            <div>
              <h1 className="text-3xl font-bold mb-2">{prod.name}</h1>
              <h2 className="text-xl text-gray-400 font-semibold mb-4">{prod.tagline}</h2>
            </div>
            <div className="flex items-center gap-3 ">
                    <Button variant={"outline"} className="rounded-full gap-x-2 text-white bg-purple-700">
                        <span className="text-sm"> 4.2 </span>
                        <Star className="h-6 w-6  "/>
                    </Button>
                    <span className="text-sm text-gray-500 transition duration-100">
                        56 Ratings
                    </span>
              </div>
              <div className="flex items-end gap-2">
                        <span className="text-xl font-bold text-gray-800 md:text-2xl mt-10">
                            Rs. {prod.price}
                        </span>
                        <span className="mb-0.5 text-red-500 line-through">
                            {prod.price +50}
                        </span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-gray-500">
                        <Truck/>
                    <span>
                        2 - 4 Day Shipping
                    </span>
                    </div>

            <div>
              <br />
              {/* <h3 className="text-small font-semibold">SIZES</h3>
              {/* Sizes
              <div className="flex gap-x-5">
                {sizes.map((item) => (
                  <div
                    key={item}
                    className="w-10 h-10 mt-4 rounded-full bg-slate-100 hover:bg-slate-200 duration-300 flex justify-center items-center"
                  >
                    <span className="text-center text-lg text-gray-600 font-semibold">{item}</span>
                  </div>
                ))}
              </div> */}
              <div>
                <h1 className="font-bold tet-lg mt-6 text-gray-600">Delivery Charges = 0</h1>
              </div>
              <br />
              <div className="flex items-center">
                <Link href={"/buyNow"}>
                <Button className="bg-purple-700">
                  <ShoppingCart className="mr-4" /> Buy Now
                </Button>
                </Link>
                <h3 className="text-2xl font-semibold ml-4">{prod.price.toFixed(2)}Rs</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
