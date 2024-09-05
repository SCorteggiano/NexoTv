"use client";
import Chatbot from "@/components/Chatbot/Chatbot";
import ChatButton from "@/components/ChatButton/ChatButton";
import Rating from "@/components/Rating/Rating";
import RatingButton from "@/components/RatingButton/RatingButton";
import React from "react";

const Testpage = () => {
  const movieRating = 3;

  return (
    <div id="wholeContainer" className="m-6">
      <h1 className="m-4 text-5xl text-center">Test Page</h1>
      <div className="border p-4">
        <h1>Rating</h1>
        <RatingButton />
        <h1>Movie Rating</h1>
        <Rating rating={movieRating} />
      </div>
      <br />
      <div className="border p-4">
        <h1>Chatbot</h1>
        <Chatbot/>
        <ChatButton/>
      </div>
    </div>
  );
};

export default Testpage;
