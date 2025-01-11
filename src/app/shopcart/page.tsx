"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { removeFromCart, updateItemQuantity } from "../store/features/cart";  // Ensure this is imported
import Image from "next/image";
import Navbar from "../components/secondheader";
import Link from "next/link";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);

  const parsePrice = (price: string | number): number => {
    if (typeof price === "string") {
      const priceWithoutSymbol = price.replace("$", "");
      const parsedPrice = parseFloat(priceWithoutSymbol);
      return isNaN(parsedPrice) ? 0 : parsedPrice;
    }
    return price;
  };

  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      dispatch(updateItemQuantity({ index, quantity: newQuantity }));
    }
  };

  const handleRemoveFromCart = (idMeal: string) => {
    dispatch(removeFromCart(idMeal));
  };

  const cartSubtotal = cart.reduce((sum, item) => {
    const price = parsePrice(item.price);
    return sum + price * item.quantity;
  }, 0);

  const shippingCharges = 15.0;
  const totalAmount = cartSubtotal - cartSubtotal * (discount / 100) + shippingCharges;

  return (
    <>
      <Navbar />
      <section className="w-full signup-bg-image py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-6">
              Cart
            </h1>
            <div className="text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center">
              <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors duration-300">
                Home
              </Link>
              <span className="text-white">/</span>
              <Link href="/menu" className="text-[#FF9F0D]">Cart</Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-50 font-sans">
        <div className="py-12 text-black px-6 md:px-16 lg:px-28">
          {/* Cart Items */}
          <div className="grid grid-cols-6 gap-4 bg-gray-200 py-3 px-4 rounded-md text-center font-semibold">
            <span className="hidden sm:block col-span-1">Image</span>
            <span className="col-span-1">Title</span>
            <span className="col-span-1">Price</span>
            <span className="col-span-1">Qty</span>
            <span className="col-span-1">Total</span>
            <span className="col-span-1">Remove</span>
          </div>

          {/* Cart Items */}
          <div className="mt-4">
            {cart.map((item, index) => {
              const price = parsePrice(item.price);
              const total = price * item.quantity;

              return (
                <div key={index} className="grid grid-cols-6 gap-4 items-center border-b border-gray-200 p-4">
                  <div className="hidden sm:block col-span-1">
                    <Image src={item.strMealThumb} alt={item.strMeal} width={80} height={80} className="w-20 h-20 object-cover rounded" />
                  </div>
                  <div className="col-span-1 text-center font-medium">{item.strMeal}</div>
                  <div className="col-span-1 text-center">${price.toFixed(2)}</div>
                  <div className="col-span-1 flex justify-center">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0)}
                      className="w-9 border rounded px-2 py-1 text-center"
                      min="0"
                    />
                  </div>
                  <div className="col-span-1 text-center font-medium">${total.toFixed(2)}</div>
                  <div
                    className="col-span-1 text-center text-red-500 cursor-pointer hover:text-red-700"
                    onClick={() => handleRemoveFromCart(item.idMeal)}
                  >
                    &times;
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coupon and Summary */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start mt-10 px-6 md:px-16 lg:px-28 gap-6">
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-100 p-6 rounded-md">
              <h2 className="text-xl font-semibold mb-3">Apply Coupon</h2>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(Number(e.target.value))}
                  placeholder="Enter coupon code"
                  className="w-full p-2 rounded-md border"
                />
                <button
                  onClick={() => setDiscount(discount)}
                  className="bg-[#FF9F0D] text-white px-6 py-2 rounded-md"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-3">Cart Summary</h2>
            <div className="flex justify-between py-2">
              <span>Subtotal</span>
              <span>${cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Shipping Charges</span>
              <span>${shippingCharges.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Discount</span>
              <span>- ${((cartSubtotal * discount) / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Total Amount</span>
              <span className="font-bold">${totalAmount.toFixed(2)}</span>
            </div>
            <button className="bg-[#FF9F0D] text-white w-full py-2 rounded-md mt-4">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
