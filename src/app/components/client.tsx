import React from 'react';
import Image from 'next/image';

// Use direct public paths instead of imports for static images
const clients = [
  { src: '/images/client1.png', title: 'Professional Chefs', value: '420' },
  { src: '/images/client2.png', title: 'Items of Food', value: '320' },
  { src: '/images/client3.png', title: 'Years of Experience', value: '30+' },
  { src: '/images/client4.png', title: 'Happy Customers', value: '220' },
];

export default function Client() {
  return (
    <section className="relative text-gray-600 client-bg-image py-9">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative px-5 py-14 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap justify-center -m-4 text-center">
          {clients.map((client, index) => (
            <div key={index} className="p-4 sm:w-1/4 w-1/2 flex flex-col items-center">
              {/* Image */}
              <div className="w-24 h-24 flex items-center justify-center rounded-full mb-4 overflow-hidden">
                <Image 
                  src={client.src} 
                  alt={client.title} 
                  width={96} 
                  height={96} 
                  priority 
                />
              </div>

              {/* Text */}
              <h2 className="font-bold sm:text-xl text-2xl text-[#FF9F0D]">{client.title}</h2>
              <p className="leading-relaxed text-gray-300 text-[30px] font-bold">{client.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
