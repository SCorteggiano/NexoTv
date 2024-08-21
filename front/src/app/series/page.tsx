import React from 'react';
import SeriesCard from '@/components/SeriesCard/SeriesCard';
import series from '@/helpers/series.helper';

const Series = () => {
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
        <div id='seriesContainer' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {series.map((series, id) => (
            <SeriesCard
              key={id}
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
