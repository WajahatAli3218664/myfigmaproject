"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaHeart, FaShareAlt, FaShoppingCart } from "react-icons/fa";

interface Product {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  price: number;
}

interface MealApiResponse {
  meals: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }[];
}

export default function Menu() {
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchSimilarProducts();
  }, []);

  const fetchSimilarProducts = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
      );
      const data: MealApiResponse = await res.json();

      if (data.meals) {
        const similarProductsData: Product[] = data.meals.slice(0, 4).map((item) => ({
          idMeal: item.idMeal,
          strMeal: item.strMeal,
          strMealThumb: item.strMealThumb,
          price: 19.99, // Default price
        }));
        setSimilarProducts(similarProductsData);
      }
    } catch (error) {
      console.error("Error fetching similar products:", error);
    }
  };

  return (
    <div className="w-full bg-black text-[#FF9F0D]">
      {/* Main container with left-right padding */}
      <section className="text-[#FFFFFF] bg-black">
        <div className="px-4 sm:px-6 lg:px-8 py-14 mx-auto max-w-screen-xl">
          {/* Similar Products Section */}
          <p className="text-[38px] font-bold text-center mb-5">
            <span className="text-[#FF9F0D]">Our</span> Shop
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <div
                key={product.idMeal}
                className="bg-[#1a1a1a] rounded-md shadow-lg overflow-hidden group relative transform hover:scale-105 transition-transform duration-300"
              >
                {/* Main Image */}
                <Image
                  src={product.strMealThumb}
                  alt={product.strMeal}
                  className="w-full h-50 object-cover"
                  width={300}
                  height={300}
                />

                {/* Hover Overlay with Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href="#"
                    className="text-[#FF9F0D] bg-gray-800 p-2 rounded-full hover:bg-[#FF9F0D] hover:text-black"
                  >
                    <FaShareAlt />
                  </Link>
                  <Link
                    href={`/shop/${product.idMeal}`}
                    className="text-[#FF9F0D] bg-gray-800 p-2 rounded-full hover:bg-[#FF9F0D] hover:text-black"
                  >
                    <FaShoppingCart />
                  </Link>
                  <Link
                    href="#"
                    className="text-[#FF9F0D] bg-gray-800 p-2 rounded-full hover:bg-[#FF9F0D] hover:text-black"
                  >
                    <FaHeart />
                  </Link>
                </div>

                {/* Product Details */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold">{product.strMeal}</h4>
                  <p className="text-sm text-[#FF9F0D] font-medium">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-block bg-[#FF9F0D] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#e08e0c]"
            >
              Show More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
