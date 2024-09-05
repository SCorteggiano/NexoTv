import MyFavorites from '@/components/MyFavorites/MyFavorites'
import React from 'react'

const Favorites = () => {
  return (
    <div>
        <h1 className='text-center text-6xl m-12'>My Favorites</h1>
        <div>
          <MyFavorites/>
        </div>
    </div>
  )
}

export default Favorites