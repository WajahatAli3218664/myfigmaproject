import Image from "next/image";

export default function Testimonial() {
  return (
    <main className="bg-black w-full h-auto text-white flex justify-center items-center py-12 px-4 lg:px-6 xl:px-12">
      <div className="w-full lg:w-[1320px] flex flex-col items-center">
        {/* Heading */}
        <div className="w-full text-center mb-10">
          <h2 className="text-[#FF9F0D] text-lg font-bold font-Great Vibes">
            Testimonial
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] mt-2 leading-tight">
            <span className="text-[#FF9F0D]">Wh</span>at Our Clients are Saying
          </h1>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-[510px] w-full">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full overflow-hidden absolute left-1/2 -translate-x-1/2 -top-12">
            <Image
              src="/images/testinomial.png" // Image from public folder
              alt="Profile"
              layout="responsive"
              width={96}
              height={96}
            />
          </div>

          <div className="mt-16 text-center">
            {/* Quote Icon */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/Quote.png" // Image from public folder
                alt="Quote"
                width={40}
                height={40}
              />
            </div>

            {/* Testimonial Content */}
            <p className="text-sm text-gray-800 leading-relaxed">
              Alamin Hasan, a renowned food specialist, brings a wealth of
              experience and passion for culinary excellence. With a deep
              understanding of flavors, ingredients, and cooking techniques,
              Alamin consistently creates exceptional dishes that captivate the
              senses. His expertise has made him a trusted figure in the world
              of food, inspiring others with his skills.
            </p>

            {/* Star Ratings */}
            <div className="flex justify-center space-x-1 mt-6">
              {Array(4)
                .fill(" ")
                .map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 fill-[#FF9F0D]"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              <svg
                className="w-5 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            {/* Client Info */}
            <div className="mt-6">
              <h4 className="text-lg font-bold text-gray-800">Alamin Hasan</h4>
              <p className="text-sm text-gray-500">Food Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
