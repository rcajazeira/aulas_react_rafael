//import { Scanner } from "@yudiel/react-qr-scanner";
//import styles from './index.module.css';
import Movie from "../../components/Movie/Movie";
import { useState, useEffect  } from "react";
import styles from "./index.module.css";

export default function Index() {
  const [movies, setMovies] = useState([])
  
  async function getMovieData() {
    const response = await fetch("https://www.freetestapi.com/api/v1/movies")
    const data = await response.json()
    setMovies(data)
  }
  useEffect(() => getMovieData, [])
  return (
    <>
      <div className={styles.movieGrid}>
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              year={movie.year}
              poster={movie.poster}
              genres={movie.genre}
              rating={movie.rating}
            />
          )
        })} 
      </div>
    </>
  )
}
