"use client";
import React, { useState, useEffect } from "react";
import faq from "@/helpers/chatbot.helper";

const Chatbot: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [displayedAnswer, setDisplayedAnswer] = useState<string>("");
  const [fullAnswer, setFullAnswer] = useState<string>("");

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(question);
    const answer = faq.find((item) => item.question === question)?.answer || "";
    setFullAnswer(answer);
    setDisplayedAnswer("");
  };

  const handleBackClick = () => {
    setSelectedQuestion(null);
    setDisplayedAnswer("");
    setFullAnswer("");
  };

  useEffect(() => {
    if (fullAnswer) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullAnswer.length) {
          setDisplayedAnswer((prev) => prev + (fullAnswer[index] || ""));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 5);

      return () => clearInterval(interval);
    }
  }, [fullAnswer]);

  return (
    <div className="shadow-md rounded-lg p-6 w-full max-w-md mx-auto mt-10 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-300">
      <h1 className="text-xl font-bold mb-4 text-center">Chatbot</h1>
      {selectedQuestion === null ? (
        <div>
          {faq.map((item, index) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(item.question)}
              className="w-full text-left bg-violet dark:bg-darkviolet text-white p-3 my-2 rounded-md hover:bg-darkviolet dark:hover:bg-violet transition-colors duration-300"
            >
              {item.question}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <p className="mb-4">{displayedAnswer}</p>
          <button
            onClick={handleBackClick}
            className="bg-gray-500 dark:bg-gray-700 text-white p-2 rounded-md hover:bg-gray-600 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
