'use client'
import React, { useState } from 'react';
import SeriesCard from '@/components/SeriesCard/SeriesCard';
import CategoryNavbar from '@/components/CategoryNavbar/CategoryNavbar';
import series from '@/helpers/series.helper';

const Series = () => {

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const categories = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Sci-Fi' },
    { id: 3, name: 'Drama' },
    { id: 4, name: 'Horror' },
  ];

  const filteredSeries = selectedCategory
    ? series.filter((serie) => serie.categoryId === selectedCategory)
    : series;

  return (
    <div>
    <div className='text-center'>
      <h1 className='text-4xl font-extrabold'>SERIES</h1>
    </div>
    <CategoryNavbar
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}
    />

    <div id='wholeContainer' className='m-6'>
      <div id='movieContainer' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {filteredSeries.map((series) => (
          <SeriesCard
            key={series.id}
            img={series.img}
            title={series.title}
            description={series.description}
            episodes={series.episodes}
          />
        ))}
      </div>
    </div>
  </div>
  );
}

export default Series;
