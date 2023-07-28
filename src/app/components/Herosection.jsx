import Link from "next/link";
import Image from "next/image";
import React from "react";

const Herosection = ({ title, description, ImgURL }) => {
  return (
    <div className="bg-netflix">
      <div className="bigcontainer py-6 h-[70vh]">
        <div className="bigfirstc flex flex-col md:flex-row justify-between items-center">
          <div className="smallsecondC md:px-16 px-3">
            <div className="text-gray-900 text-3xl md:text-4xl font-bold mb-4">
              {title}
            </div>
            <div className="text-gray-600 text-base md:text-lg mb-4 max-w-md">
              {description}
            </div>
            <Link href="/movies">
              <button className="mt-4 mb-3 md:mt-8 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm md:text-base px-5 py-3 md:py-4 text-center">
                Explore Movies
              </button>
            </Link>
          </div>
          <div className="md:w-80 mx-auto md:mx-0">
            <Image src={ImgURL} alt="" width={250} height={250} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
