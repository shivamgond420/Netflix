"use client";
import React from "react";

const MovieCard = (cruEle) => {
  const { id, title, synopsis } = cruEle.jawSummary;

  return (
    <div className="max-w-sm w-full mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={cruEle.jawSummary.backgroundImage.url}
        alt={title}
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title.substring(0, 12)}
        </h5>

        <p className="mb-3 text-gray-700 dark:text-gray-400">
          {synopsis.substring(0, 60)}
        </p>
        <a
          href={`/movie/${id}`}
          className="block w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-center"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
