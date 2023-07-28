import React from "react";
import Image from "next/image";
const page = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "84edb2b4a3mshc3c9d915214437fp186444jsnea11975918ef",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;
 

  return (
    <div>
      <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={main_data.backgroundImage.url}
          alt=""
          width={234} height={234}
        ></Image>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         {main_data.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           {main_data.synopsis}
          </p>
        </div>
      </a>
    </div>
  );
};

export default page;
