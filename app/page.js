"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/navbar";

export default function Home() {
  const [apiData, setApiData] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjlkNzdlZjE2NDk5YjZjYTM2MjIzYzUxYjdkNmJmYyIsInN1YiI6IjY0NzZhYWRjZDM3MTk3MDExNmE5NjEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lJWSHleoWXrts6JZnfstfEs2Bb_qQv6DyDQamOkb3co",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setApiData(json.results))
      .catch((err) => console.error("error:" + err));
  }, []);
  return (
    <>
      <Navbar />
      <div>
        {apiData.map((card, index) => {
          return (
            <div key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
              />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
