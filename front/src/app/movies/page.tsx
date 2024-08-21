import MovieCard from '@/components/MovieCard/MovieCard'
import React from 'react'

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

      <div id='wholeContainer' className='border m-6'>
        <div id='movieContainer'>
          <MovieCard/>
        </div>
      </div>
    </div>
  )
}

export default Movies