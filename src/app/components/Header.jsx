
"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Toggle the menu when the hamburger icon is clicked
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className=" pt-3">
        <div className="flex justify-between items-center ">
        <Link href="/movie">
            <img src="/netflix-logo-png-2616.png" alt="" className="w-20 py-4 px-2 " />
          </Link>
          <div className="px-3 mb-2 ">
            <div className="block md:hidden ">
              {/* Hamburger icon */}
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <ul className={`md:flex ${showMenu ? "block" : "hidden"} py-7 font-medium space-x-8  `}>
            <Link href="/" passHref>
          <p className="block py-2 px-4 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out">
              Home
       </p>
          </Link>
          <Link href="/movie" passHref>
          <p className="block py-2 px-4 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out">
              Movie
       </p>
          </Link>
          <Link href="/about" passHref>
          <p className="block py-2 px-4 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out">
              About
       </p>
          </Link>
          <Link href="/Contact" passHref>
          <p className="block py-2 px-4 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out">
              Contact
       </p>
          </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


