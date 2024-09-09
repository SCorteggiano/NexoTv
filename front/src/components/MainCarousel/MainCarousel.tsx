/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import { Carousel } from "flowbite-react";
import Link from "next/link";

const MainCarousel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <Link href="/movie/ed1aa897-b0e5-4ed7-a1da-b83a6899a7d1">
          <img
            src="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
            alt="Texto alternativo"
            className="dark:filter dark:brightness-75"
          />
        </Link>
        <Link href="/movie/17cd7092-bb3b-4b69-87ea-d35cb0c83620">
          <img
            src="https://pbs.twimg.com/media/GPJ7yBxXYAE9sPS.jpg:large"
            alt="Texto alternativo"
            className="dark:filter dark:brightness-75"
          />
        </Link>
        <Link href="/movie/0cabcdc9-287f-4a02-a382-f27107c7c647">
          <img
            src="https://www.hdwallpapers.in/download/arcane_vi_hd_league_of_legends-1920x1080.jpg"
            alt="Texto alternativo"
            className="dark:filter dark:brightness-75"
          />
        </Link>
        <Link href="/movie/80a9be04-ebc3-4856-a400-4281b5b1acd1">
          <img
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/05/imagery-from-mufasa-the-lion-king.jpg"
            alt="Texto alternativo"
            className="dark:filter dark:brightness-75"
          />
        </Link>
      </Carousel>
    </div>
  );
};

export default MainCarousel;
