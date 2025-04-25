import styles from './Movie.module.css';

export default function Movie({title, year, genres, rating, poster}){
    return (
        <div className={styles.Movie}>
            <h2>{title}</h2>
            <h3>{year}</h3>
            <h4>Generos:</h4>
            <ul>
                {genres.map(genre => {
                    return <li key={genre}>{genre}</li>
                })}
            </ul>
            <p>Nota:{rating}</p>
            <img src={poster} alt={title} />
        </div>

    )
}