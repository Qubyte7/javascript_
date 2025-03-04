import React from 'react'

const MovieCard = ({movie:{title,vote_average,poster_path,release_date,original_language}}) => {
    return (
        <div className="movie-card">
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/No-Poster.png'} alt={title} />
            <div className="mt-4">
                <div className="content">
                    <div className="rating">
                        <img src="/star.svg" alt="star"/>
                        {/*//here we are getting the rating of every movie and rounding its rating to the first decimal digit*/}
                        <p>{vote_average ? vote_average.toFixed(1):'N/A'}</p>
                    </div>
                    <span>.</span>
                    <p className="lang">{original_language}</p>
                    <span>.</span>
                    <p className="year">
                        {/*// here we are getting the date split it based on - and then get the first part which in the "year"*/}
                        {release_date ? release_date.split('-')[0]:'N/A'}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default MovieCard
