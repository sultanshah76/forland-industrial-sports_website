'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import leggings from "@/components/assets/leggings.webp";
import shorts from "@/components/assets/shorts.webp";
import tracksuit from "@/components/assets/tracksuit.webp";
import tanktop from "@/components/assets/tanktop.webp";
import denim from "@/components/assets/denim.webp";
import uniform from "@/components/assets/uniform.png";
import cargo from "@/components/assets/Untitled-1.png";
import bags from "@/components/assets/RetroDuffel.webp";

import WhatsAppButton from "../whatsapp button/page";

const Hero = () => {
  const pictures = [
    { src: leggings, route: "./legging", alt: "Leggings" },
    { src: shorts, route: "./shorts", alt: "Shorts" },
    { src: tracksuit, route: "./tracksuits", alt: "Tracksuit" },
    { src: tanktop, route: "./tanktop", alt: "Tanktop" },
    // { src: denim, route: "./denim", alt: "Denim" },
    { src: uniform, route: "./uniforms", alt: "Cricket/football uniform" },
    { src: cargo, route: "./cargo", alt: "Cargo" },
    { src: bags, route: "./bags", alt: "Bags" },
    

  ];
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPictureIndex((prevIndex) =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change picture every 5 seconds

    return () => clearInterval(interval);
  }, [pictures.length]);

  return (
    <div className="relative bg-white pb-[110px]  dark:bg-dark lg:pt-[120px] p-5">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="mb-5 text-4xl font-bold leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                Custom Sportswear Manufacturer From Sialkot Pakistan
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                Empowering athletes everywhere, forland industrial sports
                delivers innovative and stylish sportswear designed to elevate
                performance and inspire greatness.
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <Link
                    href="./contact-us"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                  >
                    ORDER NOW
                  </Link>
                </li>
                <li>
                  <Link
                    href="./faqs"
                    className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
                  >
                    <span className="mr-2">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                        <rect
                          x="7.99893"
                          y="14.979"
                          width="8.18182"
                          height="1.63636"
                          fill="primary"
                        />
                        <rect
                          x="11.2717"
                          y="7.61523"
                          width="1.63636"
                          height="4.09091"
                          fill="primary"
                        />
                        <path
                          d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                          fill="primary"
                        />
                      </svg>
                    </span>
                    FAQ
                  </Link>
                </li>
              </ul>
              <div className="clients pt-16">
                <h6 className="mb-6 flex items-center text-2xl font-bold text-body-color dark:text-dark-6">
                  Some Of Our Products
                  <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                </h6>
                <div className="flex items-center space-x-4 text-2xl">
                  {pictures.map((pic, index) => (
                    <SingleImage key={index} href={pic.route} imgSrc={pic.src} alt={pic.alt} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative inline-block pt-11 lg:pt-0">
                <Link href={pictures[currentPictureIndex].route}>
                  <Image
                    src={pictures[currentPictureIndex].src}
                    alt={`Image ${currentPictureIndex + 1}`}
                    className="rounded-3xl h-[550px] w-[450px] border-blue-500 border-8"
                    width={450}
                    height={550}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white 
                  text-3xl font-serif opacity-0 transition-opacity duration-300 hover:opacity-50 rounded-3xl  " >
                    {pictures[currentPictureIndex].alt}
                  </div>
                </Link>
                <span className="absolute -bottom-8 -left-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {[...Array(25)].map((_, i) => (
                      <circle key={i} cx={(i % 5) * 22 + 2.5} cy={Math.floor(i / 5) * 22 + 2.5} r="2.5" fill="#3056D3" />
                    ))}
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><WhatsAppButton/></div>
    </div>
  );
};

export default Hero;

const SingleImage = ({ href, imgSrc, alt }: { href: string; imgSrc: any; alt: string }) => {
  return (
    <Link href={href} className="flex w-full items-center justify-center">
      <Image src={imgSrc} alt={alt} className="h-auto w-auto" />
    </Link>
  );
};

// "use client";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import image1 from "@/components/assets/leggings.webp";
// import image2 from "@/components/assets/shorts.webp";
// import image3 from "@/components/assets/tracksuit.webp";
// import image4 from "@/components/assets/tanktop.webp";
// import image5 from "@/components/assets/denim.webp";
// import image6 from "@/components/assets/Top-Quality-Custom-New-Design-Cricket-Jersey-Sets.png";
// // import image7 from "@/components/assets/CB-02-3_612b1548-95d3-413f-9e96-d3cde8727641.webp";
// import Image from "next/image";

// const Hero = () => {
//   const pictures = [
//     { src: image1, route: "/route1", alt: "Leggings" },
//     { src: image2, route: "/route2", alt: "Shorts" },
//     { src: image3, route: "/route3", alt: "Tracksuit" },
//     { src: image4, route: "/route1", alt: "Tanktop" },
//     { src: image5, route: "/route2", alt: "Denim" },
//     { src: image6, route: "/route3", alt: "Cricket/football uniform" },
//     // { src: image7, route: "/route3", alt: "Third Image" },

//   ];
//   const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPictureIndex((prevIndex) =>
//         prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change picture every 5 seconds

//     return () => clearInterval(interval);
//   }, [pictures.length]);
//   return (
//     <>
//       <div className="relative  bg-white pb-[110px] pt-[100px] dark:bg-dark lg:pt-[120px] p-5">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4 lg:w-5/12">
//               <div className="hero-content">
//                 <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
//                   Custom Sportswear Manufacturer From Sialkot Pakistan
//                 </h1>
//                 <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
//                   Empowering athletes everywhere, forland industrial sports
//                   delivers innovative and stylish sportswear designed to elevate
//                   performance and inspire greatness.
//                 </p>
//                 <ul className="flex flex-wrap items-center">
//                   <li>
//                     <Link
//                       href="./contact-us"
//                       className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
//                     >
//                       ORDER-NOW
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="./faqs"
//                       className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
//                     >
//                       <span className="mr-2">
//                         <svg
//                           width="24"
//                           height="25"
//                           viewBox="0 0 24 25"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
//                           <rect
//                             x="7.99893"
//                             y="14.979"
//                             width="8.18182"
//                             height="1.63636"
//                             fill="primary"
//                           />
//                           <rect
//                             x="11.2717"
//                             y="7.61523"
//                             width="1.63636"
//                             height="4.09091"
//                             fill="primary"
//                           />
//                           <path
//                             d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
//                             fill="primary"
//                           />
//                         </svg>
//                       </span>
//                       FAQ
//                     </Link>
//                   </li>
//                 </ul>
//                 <div className="clients pt-16">
//                   <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
//                     Some Of Our products
//                     <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
//                   </h6>

//                   <div className="flex items-center space-x-4">
//                     <SingleImage
//                       href="#"
//                       imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
//                     />

//                     <SingleImage
//                       href="#"
//                       imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
//                     />

//                     <SingleImage
//                       href="#"
//                       imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="hidden px-4 lg:block lg:w-1/12"></div>
//             <div className="w-full px-4 lg:w-6/12">
//               <div className="lg:ml-auto lg:text-right">
//                 <div className="relative inline-block pt-11 lg:pt-0">
//                   <Link href={pictures[currentPictureIndex].route}>
//                     <Image
//                       src={pictures[currentPictureIndex].src}
//                       alt={`Image ${currentPictureIndex + 1}`}
//                       className="rounded-3xl h-[550px] w-[450px] border-blue-500 border-8"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 transition-opacity duration-300 hover:opacity-50">{pictures[currentPictureIndex].alt}</div>
//                   </Link>
//                   <span className="absolute -bottom-8 -left-8 z-[-1]">
//                     <svg
//                       width="93"
//                       height="93"
//                       viewBox="0 0 93 93"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
//                       <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
//                       <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
//                       <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
//                       <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
//                       <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
//                       <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
//                       <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
//                       <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
//                       <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
//                       <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
//                       <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
//                       <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
//                       <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
//                       <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
//                       <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
//                       <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
//                       <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
//                       <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
//                       <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
//                       <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
//                       <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
//                       <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
//                       <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
//                       <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

// const SingleImage = ({ href, imgSrc }: { href: string; imgSrc: string }) => {
//   return (
//     <>
//       <Link href={href} className="flex w-full items-center justify-center">
//         <Image
//           src={imgSrc}
//           alt="brand image"
//           className="h-10 w-full"
//           width={100}
//           height={100}
//         />
//       </Link>
//     </>
//   );
// };
