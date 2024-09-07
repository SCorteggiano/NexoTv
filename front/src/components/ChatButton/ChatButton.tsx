"use client";
import React, { useState } from "react";
import Chatbot from "../Chatbot/Chatbot";

const ChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={handleToggleChat}
        className="p-3 bg-violet dark:bg-darkviolet text-white rounded-full hover:bg-darkviolet dark:hover:bg-violet transition-all"
      >
        💬
      </button>
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 shadow-lg rounded-lg p-4 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-300">
          <Chatbot />
        </div>
      )}
    </div>
  );
};

export default ChatButton;
