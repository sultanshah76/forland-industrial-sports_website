import React from 'react';
import Image from 'next/image';
import photo1 from "@/components/assets/products/legging/footed legging.jpeg";
import photo2 from "@/components/assets/products/legging/knee leggings.jpeg";
import photo3 from "@/components/assets/products/legging/mesh legging.jpeg";
import photo4 from "@/components/assets/products/legging/stirrup leggings.jpeg";
import photo5 from "@/components/assets/products/legging/tregging legging.jpeg";
import photo6 from "@/components/assets/products/legging/ENHANCE SPORTS LINEAR LEGGING.webp";
import WhatsAppButton from '@/components/whatsapp button/page';

const Legging = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Forland Industrial Sports(Legging collection)</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo1}
              alt="Sample Image 1"
              width={400}
              height={300}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary text-white p-2">
            footed leggings
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
            knee leggings
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
            mesh leggings
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
            stirrup leggings
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
            tregging leggings
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo6}
              alt="Sample Image 6"
              width={400}
              height={300}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary text-white p-2">
              knee lenght leegings

            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton/>
    </div>
  );
};

export default Legging;
