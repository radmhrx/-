"use client";

import { useState } from "react";

export default function SimpleTapGame() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleTap = () => {
    setMessages((prev) => [...prev, "کون لق آرش"]);
  };

  return (
    <main className="w-screen h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <button
        onClick={handleTap}
        className="w-32 h-32 rounded-full bg-red-600 flex items-center justify-center text-lg font-bold hover:scale-105 transition duration-200 shadow-lg focus:outline-none"
      >
        بزن!
      </button>

      <div className="mt-8 space-y-2 max-h-80 overflow-y-auto w-full text-center">
        {messages.map((msg, idx) => (
          <p
            key={idx}
            className="text-pink-400 font-semibold text-sm break-words"
          >
            {msg}
          </p>
        ))}
      </div>
    </main>
  );
}
