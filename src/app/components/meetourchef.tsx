import React from 'react'
import Image from 'next/image'

export default function MeetOurChef() {
    return (
        <section className="text-[#FFFFFF] bg-black">
            {/* Main container with left-right padding */}
            <div className="px-4 sm:px-6 lg:px-8 py-14 mx-auto max-w-screen-xl">
                {/* Heading */}
                <div className="flex flex-col text-center w-full mb-12">
                    <h2 className="text-[#FF9F0D] text-lg font-bold font-Great Vibes">
                        Chefs
                    </h2>
                    
                    <p className="text-[38px] font-bold">
                        <span className="text-[#FF9F0D]">Me</span>et Our Chef
                    </p>
                </div>

                {/* Chef Cards */}
                <div className="flex flex-wrap -m-4 justify-center">
                    {/* Card 1 */}
                    <div className="p-4 sm:w-1/2 lg:w-1/4 flex justify-center">
                        <div className="h-[300px] relative w-full max-w-[250px]">
                            <Image
                                src="/images/chef1.png"  // Updated path
                                alt="chef1"
                                className="rounded-lg w-full h-[300px] object-cover object-center"
                                width={250}   // Specify width and height
                                height={300}
                            />
                            <div className="w-[200px] h-[70px] absolute bottom-0 bg-[#FFFFFF] text-black px-3 py-2 rounded-bl-md flex flex-col items-start justify-center font-bold">
                                <p className="text-[18px]">D.Estwood</p>
                                <p className="text-[14px]">Chief Chef</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-4 sm:w-1/2 lg:w-1/4 flex justify-center">
                        <div className="h-[300px] relative w-full max-w-[250px]">
                            <Image
                                src="/images/chef2.png"  // Updated path
                                alt="chef2"
                                className="rounded-lg w-full h-[300px] object-cover object-center"
                                width={250}
                                height={300}
                            />
                            <div className="w-[200px] h-[70px] absolute bottom-0 bg-[#FFFFFF] text-black px-3 py-2 rounded-bl-md flex flex-col items-start justify-center font-bold">
                                <p className="text-[18px]">D.Scoriesh</p>
                                <p className="text-[14px]">Assistant Chef</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-4 sm:w-1/2 lg:w-1/4 flex justify-center">
                        <div className="h-[300px] relative w-full max-w-[250px]">
                            <Image
                                src="/images/chef3.png"  // Updated path
                                alt="chef3"
                                className="rounded-lg w-full h-[300px] object-cover object-center"
                                width={250}
                                height={300}
                            />
                            <div className="w-[200px] h-[70px] absolute bottom-0 bg-[#FFFFFF] text-black px-3 py-2 rounded-bl-md flex flex-col items-start justify-center font-bold">
                                <p className="text-[18px]">M. William</p>
                                <p className="text-[14px]">Advertising Chef</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="p-4 sm:w-1/2 lg:w-1/4 flex justify-center">
                        <div className="h-[300px] relative w-full max-w-[250px]">
                            <Image
                                src="/images/chef4.png"  // Updated path
                                alt="chef4"
                                className="rounded-lg w-full h-[300px] object-cover object-center"
                                width={250}
                                height={300}
                            />
                            <div className="w-[200px] h-[70px] absolute bottom-0 bg-[#FFFFFF] text-black px-3 py-2 rounded-bl-md flex flex-col items-start justify-center font-bold">
                                <p className="text-[18px]">W.Readfroad</p>
                                <p className="text-[14px]">Chef</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
