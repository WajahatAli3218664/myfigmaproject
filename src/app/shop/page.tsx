"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaShareAlt, FaShoppingCart, FaHeart } from "react-icons/fa";
import Navbar from "../components/secondheader";

interface Product {
  id: string;
  name: string;
  image: string; // Changed from object to string
  price: string;
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchProducts = (query: string) => {
    fetch(`https://677fc83f0476123f76a8134b.mockapi.io/Food?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          // Map the data to ensure image URLs are properly formatted
          const formattedData = data.map((product: any) => ({
            ...product,
            image: product.image?.imageUrl || product.image || '/placeholder-image.jpg'
          }));
          setProducts(formattedData);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  };

  useEffect(() => {
    fetchProducts(searchTerm);
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = (e.target as HTMLFormElement)["search"].value.trim();
    setSearchTerm(query);
  };

  return (
    <>
      <Navbar />
      {/* Rest of the JSX remains the same until the product mapping */}
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-8 px-6 lg:px-12">
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            <div className="w-full lg:w-3/4">
              <form onSubmit={handleSearch} className="flex w-full mb-6">
                <input
                  type="text"
                  name="search"
                  placeholder="Search your keyword..."
                  className="flex-1 px-4 py-2 border border-gray-300 bg-white rounded-l-md focus:outline-none focus:ring-0 focus:ring-[#FF9F0D] focus:border-[#FF9F0D] text-gray-700"
                />
                <button
                  type="submit"
                  className="bg-[#FF9F0D] px-4 rounded-r-md text-white flex items-center justify-center"
                >
                  <FaSearch />
                </button>
              </form>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-md shadow-md overflow-hidden group relative"
                    >
                      <div className="relative w-full h-[300px]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                          href="#"
                          className="text-white bg-gray-800 p-2 rounded-full hover:bg-[#FF9F0D]"
                        >
                          <FaShareAlt />
                        </Link>
                        <Link
                          href={`/shop/${product.id}`}
                          className="text-white bg-gray-800 p-2 rounded-full hover:bg-[#FF9F0D]"
                        >
                          <FaShoppingCart />
                        </Link>
                        <Link
                          href="#"
                          className="text-white bg-gray-800 p-2 rounded-full hover:bg-[#FF9F0D]"
                        >
                          <FaHeart />
                        </Link>
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold">{product.name}</h4>
                        <p className="text-sm text-[#FF9F0D]">{product.price}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center">
                    <p className="text-xl text-gray-700">Loading...</p>
                  </div>
                )}
              </div>
            </div>

            {/* Rest of the code remains the same */}
            <aside className="w-full lg:w-1/4 p-4 border-l-2">
              {/* ... rest of the aside content ... */}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
