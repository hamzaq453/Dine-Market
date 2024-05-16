'use client'
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import P1 from '/public/Pack10.jpg'
import P2 from '/public/10.jpg'
import P3 from '/public/Pack.jpg'
import P4 from '/public/Pack50.jpg'
import P5 from '/public/4.jpg'

interface iAppProps {
    images: any,
}

export default function ImageGallery({ images }: iAppProps) {
    const [bigImage, setBigImage] = useState(P1); // Set initial big image

    const handleImageClick = (image: StaticImageData) => {
        setBigImage(image);
    }

    return (
        <div className="grid gap-4 lg:grid-cols-5">
            {/* Small Images */}
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {[P2, P3, P4, P5].map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
                        <Image
                            src={image}
                            width={80}
                            height={80}
                            alt="Small Image"
                            className="h-full w-full object-cover object-center cursor-pointer"
                            onClick={() => handleImageClick(image)}
                        />
                    </div>
                ))}
            </div>
            {/* Big Image */}
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image
                    src={bigImage}
                    alt="Big Image"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover object-center"
                />
            </div>
        </div>
    )
}
