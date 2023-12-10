import React, { useState, useEffect } from "react";
import styles from "./Movie.module.css";

const Movie = ({ title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${title}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "f4b3fab204msh9625715ceea7946p142403jsn717bc1daffc7",
          "X-RapidAPI-Host": "imdb188.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setMovies(result.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [title]);
  // console.log("Movies:", movies);

  return (
    <div>
      <h4>SuperApp</h4>
      <p>Entertainment according to your choice</p>
      <div className={styles.movie_image}>
        {movies.map((movie, index) => (
          <div className={styles.movie_data} key={index}>
            <p>{movie.title}</p>
            {movie.primaryImage && movie.primaryImage.url ? (
              <img src={movie.primaryImage.url} alt="hi" />
            ) : (
              <p>No image available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
