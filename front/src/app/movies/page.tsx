import React from 'react';
import MovieCard from '@/components/MovieCard/MovieCard';
import movies from '@/helpers/movies.helper';

const Movies = () => {
  return (
    <div>
      <div className='border h-12 flex items-center justify-around'>
        <h1>CATEGORY1</h1>
        <h1>CATEGORY2</h1>
        <h1>CATEGORY3</h1>
        <h1>CATEGORY4</h1>
        <h1>CATEGORY5</h1>
      </div>

      <div id='wholeContainer' className='m-6'>
        <div id='movieContainer' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {movies.map((movie, id) => (
            <MovieCard
              key={id}
              img={movie.img}
              title={movie.title}
              description={movie.description}
              duration={movie.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
