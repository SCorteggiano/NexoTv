"use client";
import MainCarousel from "@/components/MainCarousel/MainCarousel";
import Rating from "@/components/Rating/Rating";
import RatingButton from "@/components/RatingButton/RatingButton";
import React from "react";

const Testpage = () => {

  return (
    <div id="wholeContainer" className="m-6">
      <h1 className="m-4 text-5xl text-center">Test Page</h1>
      <div>
        <MainCarousel/>
      </div>
    </div>
  );
};

export default Testpage;
