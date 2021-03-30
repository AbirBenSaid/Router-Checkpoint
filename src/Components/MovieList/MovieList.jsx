import MovieCard from '../MovieCard/MovieCard';
import React from 'react';

function MovieList({myMovies, rateSearch, titleSearch}) {
    return (
            <div>
            {myMovies
            .filter(el=> el.rate>= rateSearch && el.title.toLowerCase().includes(titleSearch.toLowerCase()) )
            .map((el) => <MovieCard movie={el}/>)} 
            

            </div>
        );
    
}

export default MovieList;
