import React from 'react';
import Image from 'next/image';
import photo1 from "@/components/assets/products/cricket uniforms/1.png";
import photo2 from "@/components/assets/products/cricket uniforms/2.png";
import photo3 from "@/components/assets/products/cricket uniforms/3.png";
import photo4 from "@/components/assets/products/cricket uniforms/4.png";
import WhatsAppButton from '@/components/whatsapp button/page';

const Uniforms = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Forland Industrial Sports(cricket/football-uniform collection)</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo1}
              alt="Sample Image 1"
              width={400}
              height={300}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary text-white p-2">
            cricket/football-uniform
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
            cricket/football-uniform
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
            cricket/football-uniform
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo4}
              alt="Sample Image 2"
              width={400}
              height={300}
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary text-white p-2">
            cricket/football-uniform
            </div>
          </div>
          </div>
        </div>
        <WhatsAppButton/>
      </div>
  );
};

export default Uniforms;
