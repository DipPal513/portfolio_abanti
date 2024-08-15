"use client";
import React, { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import Link from "next/link";
import { monoton } from "@/app/layout";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="max-w-screen-xl mx-auto bg-white">
        <nav className="flex px-2 pt-8 pb-3 justify-between">
          <button className="toggle" onClick={toggleMenu}>
            <IoIosMenu className="text-2xl" />
          </button>
          <span
            className={`${monoton.className} text-4xl block text-center logo`}
          >
            Abanti <br /> Sarkar
          </span>
          <button>
            <BsBag className="text-3xl" />
          </button>
        </nav>
      </div>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-4">
          <button onClick={toggleMenu} className="self-end mb-4">
            <IoMdClose className="text-2xl" />
          </button>
          <Link href="/" className="mb-4 text-lg">
            Home
          </Link>
          <Link href="/about" className="mb-4 text-lg">
            About
          </Link>
          <Link href="/services" className="mb-4 text-lg">
            Services
          </Link>
          <Link href="/contact" className="mb-4 text-lg">
            Contact
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </header>
  );
}
