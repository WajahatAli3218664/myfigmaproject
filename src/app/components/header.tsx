"use client";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoClose, IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="w-full bg-black top-0 z-50 flex flex-col lg:px-[100px] px-[20px] lg:py-[20px] py-[10px]">
      {/* Logo Section */}
      <section className="flex items-center justify-center px-4 lg:min-h-[40px] max-lg:min-h-[30px]">
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white z-10"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>
      </section>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center">
        <ul className="flex gap-[10px] text-white font-medium text-[18px]">
          <Link href="/" className="hover:text-[#FF9F0D]">
            Home
          </Link>
          <Link href="/shop" className="hover:text-[#FF9F0D]">
            Shop
          </Link>
          <Link href="/about" className="hover:text-[#FF9F0D]">
            About
          </Link>
          <Link href="/blog" className="hover:text-[#FF9F0D]">
            Blog
          </Link>
          <Link href="/signin" className="hover:text-[#FF9F0D]">
            Contact
          </Link>
        </ul>

        {/* Search Bar & Cart */}
        <div className="flex items-center gap-[15px]">
          <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-[#FF9F0D] rounded-2xl">
            <input
              type="search"
              placeholder="Search..."
              className="bg-transparent outline-none text-white text-[14px] placeholder:text-white"
            />
            <IoSearch className="text-white w-[20px] h-[20px]" />
          </div>
          <div className="relative">
            <Link href="/shopcart">
              <HiOutlineShoppingBag className="text-white text-[24px] cursor-pointer" />
            </Link>
            <span className="absolute top-[-5px] right-[-10px] bg-[#FF9F0D] text-white text-[12px] font-bold rounded-full px-[6px] py-[2px]">
              {cartItemCount}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex justify-between items-center px-[30px]">
        {/* Hamburger Menu */}
        <GiHamburgerMenu
          className="text-white text-[34px] cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        {/* Cart Icon */}
        <div className="relative">
          <Link href="/shopcart">
            <HiOutlineShoppingBag className="text-white text-[24px] cursor-pointer" />
          </Link>
          <span className="absolute top-[-5px] right-[-10px] bg-[#FF9F0D] text-white text-[12px] font-bold rounded-full px-[6px] py-[2px]">
            {cartItemCount}
          </span>
        </div>
      </div>

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#0D0D0D] shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <Link
            href="/"
            className="text-[20px] sm:text-[24px] font-bold text-white px-4"
            onClick={() => setMenuOpen(false)}
          >
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>
          <button
            className="text-white"
            onClick={() => setMenuOpen(false)}
          >
            <IoClose size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 mt-4 px-8 text-white">
          <li>
            <Link
              href="/"
              className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/signin"
              className="text-[16px] leading-6 hover:text-[#FF9F0D] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
