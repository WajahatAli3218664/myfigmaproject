"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/secondheader";
import { FaHeart, FaShareAlt, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/features/cart";
import { AppDispatch } from "@/app/store/store";
import { toast } from "react-toastify";

// Define the Product interface
interface Product {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  price: number;
  strInstructions: string;
}

// Define the type for the API response item
interface ApiMealItem {
  id: string;
  name: string;
  images: string;
  price: number;
  description: string;
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const { shopdetail } = useParams();
  const [isReadMore, setIsReadMore] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    if (typeof shopdetail === "string") {
      fetchProductDetail(shopdetail);
      fetchSimilarProducts();
    }
  }, [shopdetail]);

  const fetchProductDetail = async (id: string) => {
    const res = await fetch(
      `https://677fc83f0476123f76a8134b.mockapi.io/Food/${id}`
    );
    const data = await res.json();
    if (data) {
      setProduct({
        idMeal: data.id,
        strMeal: data.name,
        strMealThumb: data.images || "/placeholder-food.jpg", // Ensure default fallback
        price: data.price,
        strInstructions: data.description,
      });
    }
  };

  const fetchSimilarProducts = async () => {
    const res = await fetch("https://677fc83f0476123f76a8134b.mockapi.io/Food");
    const data = await res.json();
    if (data) {
      const similarProductsData = data.slice(0, 4).map((item: ApiMealItem) => ({
        idMeal: item.id,
        strMeal: item.name,
        strMealThumb: item.images || "/placeholder-food.jpg", // Default fallback
        price: item.price,
        strInstructions: item.description,
      }));
      setSimilarProducts(similarProductsData);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          idMeal: product.idMeal,
          strMeal: product.strMeal,
          strMealThumb: product.strMealThumb,
          price: product.price,
          quantity,
        })
      );
      toast.success(`${product.strMeal} has been added to the cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push("/shopcart");
    }
  };

  if (!product) {
    return (
      <div className="text-center p-10">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-50 py-12 px-4 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-7">
            {/* Main Image Section */}
            <div className="lg:w-1/2 w-full">
              <Image
                src={product.strMealThumb}
                alt={product.strMeal}
                width={500}
                height={500}
                className="w-full h-auto rounded-md object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder-food.jpg";
                }}
              />
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 w-full">
              <h1 className="text-4xl font-bold text-gray-800">{product.strMeal}</h1>
              <p className="mt-4 text-gray-600">
                {isReadMore
                  ? product.strInstructions
                  : `${product.strInstructions.substring(0, 150)}...`}
              </p>
              <button
                className="text-[#FF9F0D] font-semibold mt-2"
                onClick={() => setIsReadMore(!isReadMore)}
              >
                {isReadMore ? "Read Less" : "Read More"}
              </button>
              <p className="text-3xl font-semibold text-gray-800 mt-6">${product.price}</p>

              {/* Add to Cart */}
              <div className="mt-6">
                <button
                  className="w-full py-3 bg-[#FF9F0D] text-white font-bold rounded-md"
                  onClick={handleAddToCart}
                >
                  Add to Cart <FaShoppingCart className="inline ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Similar Products */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Similar Food Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {similarProducts.map((product) => (
                <div key={product.idMeal} className="bg-white rounded-md shadow-md">
                  <Image
                    src={product.strMealThumb}
                    alt={product.strMeal}
                    width={300}
                    height={300}
                    className="w-full h-50 object-cover rounded-md"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder-food.jpg";
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{product.strMeal}</h3>
                    <p className="text-lg">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
  
