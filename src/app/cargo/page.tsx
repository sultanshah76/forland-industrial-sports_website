import React from 'react';
import Image from 'next/image';
import photo1 from "@/components/assets/products/cargo/Men Dark Gray Twill Cargo Trouser.jpg";
import photo2 from "@/components/assets/products/cargo/Men NAVY BLUE Twill Cargo Trouser.jpg";
import photo3 from "@/components/assets/products/cargo/Men Dark Gray Twill Cargo Trouser.jpg";
import photo4 from "@/components/assets/products/cargo/Men Camel Twill Cargo Trouser.jpg";
import photo5 from "@/components/assets/products/cargo/Men Brown Twill Cargo Trouser.jpg";

const Cargo = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Forland Industrial Sports(Cargo collection)</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo1}
              alt="Sample Image 1"
              width={400}
              height={300}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary text-white p-2">
            Men Dark Gray Twill Cargo Trouser
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
            Men NAVY BLUE Twill Cargo Trouser
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
            Men Dark Gray Twill Cargo Trouser
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
            Men Camel Twill Cargo Trouser
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
            Men Brown Twill Cargo Trouser.jpg
          </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Cargo;
