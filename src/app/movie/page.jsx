
"use client";
import React from "react";
import Link from "next/link";
import MovieCard from "../components/MovieCard";
import { resolve } from "styled-jsx/css";

const Contact = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "84edb2b4a3mshc3c9d915214437fp186444jsnea11975918ef",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
   
    <div class="grid-container p-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <div class="text-center font-bold text-gray-900 text-2xl col-span-full">
    Series & Movies
  </div>
  <div class="movie-grid  p-4 gap-4 grid-cols-2  grid-rows-3">
  {main_data.map((cruEle) => {
          return <MovieCard key={cruEle.id} {...cruEle} />;
    })}
  </div>
</div>

  );
};

export default Contact;
