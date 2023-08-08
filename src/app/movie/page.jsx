"use client";
import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";


const Contact = () => {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url =
      "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=700&limit_suggestions=20&lang=en";
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '12944cb6f7mshe86951629eb3061p15cb16jsn118dfa245597',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      const main_data = data.titles;
      setMainData(main_data);
      console.log(main_data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="grid-container p-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="text-center font-bold text-gray-900 text-2xl col-span-full">
        Series & Movies
      </div>
      <div className="movie-grid p-4 gap-4 grid-cols-2 grid-rows-3">
        {mainData &&
          mainData.map((cruEle) => <MovieCard key={cruEle.id} {...cruEle} />)
        }
      </div>
    </div>
  );
};

export default Contact;
