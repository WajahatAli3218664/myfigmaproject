"use client";
import { useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Cart logic: Fetching total item count from Redux
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="w-full bg-[#0D0D0D] px-4 sm:px-6 lg:px-[15.62%] py-4 lg:py-7 z-50 relative">
      <nav className="flex items-center justify-between">
        {/* Mobile Menu Toggle + Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <LuMenu size={24} />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica"
          >
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex lg:flex-row lg:gap-[32px] text-white">
          <li>
            <Link href="/" className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/shop" className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors">Shop</Link>
          </li>
          <li>
            <Link href="/about" className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors">About</Link>
          </li>
          <li>
            <Link href="/signin" className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors">Contact</Link>
          </li>
        </ul>

        {/* Icons for Both Screen Sizes */}
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden lg:block text-white hover:text-[#FF9F0D] transition-colors">
            <IoIosSearch size={24} />
          </Link>
          <Link href="/signup" className="text-white hover:text-[#FF9F0D] transition-colors">
            <LuUserRound size={24} />
          </Link>
          <div className="relative">
            <Link href="/shopcart" className="text-white hover:text-[#FF9F0D] transition-colors">
              <HiOutlineShoppingBag size={24} />
            </Link>
            <span className="absolute top-[-5px] right-[-10px] bg-[#FF9F0D] text-white text-[12px] font-bold rounded-full px-[6px] py-[2px]">
              {cartItemCount}
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#0D0D0D] shadow-lg z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <Link
            href="/"
            className="text-[20px] sm:text-[24px] font-bold text-white px-4"
            onClick={() => setIsDrawerOpen(false)}
          >
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>
          <button
            className="text-white"
            onClick={() => setIsDrawerOpen(false)}
          >
            <IoClose size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 mt-4 px-8 text-white">
          <li>
            <Link
              href="/"
              className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setIsDrawerOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setIsDrawerOpen(false)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setIsDrawerOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/signin"
              className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setIsDrawerOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay when Drawer is Open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </header>
  );
}
