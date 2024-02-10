import React from 'react';
import Image from 'next/image';
import photo1 from "@/components/assets/products/sports bags/back pack.jpg";
import photo2 from "@/components/assets/products/sports bags/gym-duffle-bag.jpg";
import photo3 from "@/components/assets/products/sports bags/gym-fanny-pack.jpg";
import photo4 from "@/components/assets/products/sports bags/leather laptop bag.jpeg";
import photo5 from "@/components/assets/products/sports bags/gym-running-waistpack.jpg";
import photo6 from "@/components/assets/products/sports bags/golf bag.jpeg";

import WhatsAppButton from '@/components/whatsapp button/page';

const Cargo = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Forland Industrial Sports(Bags collection)</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo1}
              alt="Sample Image 1"
              width={400}
              height={300}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary text-white p-2">
            back-pack
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo2}
              alt="Sample Image 2"
              width={400}
              height={300}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary text-white p-2">
            gym-duffle-bag
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo3}
              alt="Sample Image 3"
              width={400}
              height={300}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary text-white p-2">
            gym-fanny-pack
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo4}
              alt="Sample Image 4"
              width={400}
              height={300}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary text-white p-2">
            leather-laptop-bag
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo5}
              alt="Sample Image 5"
              width={400}
              height={300}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary text-white p-2">
            gym-running-waistpack
          </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo6}
              alt="Sample Image 5"
              width={400}
              height={300}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary text-white p-2">
            golf-bag
          </div>
            </div>
          </div>
        </div>
        <WhatsAppButton/>
      </div>
  );
};

export default Cargo;