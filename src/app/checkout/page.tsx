"use client";
import React, { useState } from "react";
import Navbar from "../components/secondheader";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/features/cart"

const CheckoutPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "creditCard",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setIsSubmitted(true); // Set form as submitted
    toast.success("Thank you for your purchase!");
    dispatch(clearCart()); // Clear cart after successful purchase
  };

  return (
    <>
      <Navbar />
      <section className='w-full signup-bg-image py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-6'>
              Checkout
            </h1>
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/menu" className='text-[#FF9F0D]'>
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-50 font-sans">
        <div className="max-w-4xl mx-auto py-12 text-black px-6 md:px-16 lg:px-24">
          {/* Checkout Form */}
          {!isSubmitted ? (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-semibold mb-4">Checkout Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border rounded px-4 py-2 mt-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border rounded px-4 py-2 mt-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border rounded px-4 py-2 mt-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border rounded px-4 py-2 mt-2"
                    required
                  />
                </div>

                {/* Payment Method */}
                <div className="mb-4">
                  <label htmlFor="paymentMethod" className="block text-sm font-semibold">
                    Payment Method
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full border rounded px-4 py-2 mt-2"
                  >
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cod">Cash on Delivery</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#FF9F0D] text-white py-3 rounded font-semibold"
                >
                  Complete Order
                </button>
              </form>
            </div>
          ) : (
            // After submission, show the Continue Shopping button
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Thank you for your purchase!</h3>
              <button
                onClick={() => router.push("/shop")}
                className="bg-[#FF9F0D] text-white py-3 px-6 rounded font-semibold"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Toast Container for toast notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeButton />
    </>
  );
};

export default CheckoutPage;
