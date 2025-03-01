'use client';

import { useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);

  // Increment and Decrement functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Hovering box with rounded corners, padding, and drop shadow */}
      <div
        className="bg-black text-white p-8 rounded-[30px] shadow-xl space-y-6 flex flex-col items-center"
        style={{
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.7)', // Moderate shadow
          backgroundColor: '#333', // Darker background for the box
          width: '400px', // Set fixed width for the box
          minHeight: '350px', // Min height to ensure there's enough space
        }}
      >
        {/* Title with red color */}
        <h1
          className="text-4xl font-semibold"
          style={{ color: 'red', fontWeight: 'bold' }}
        >
          J Bias Simple Counter
        </h1>

        {/* Counter value with larger font */}
        <div className="text-[100px] font-bold">{count}</div>

        {/* Buttons with larger size, plus and minus signs */}
        <div className="flex space-x-[1.5rem]"> {/* Reduced spacing */}
          <button
            onClick={decrement}
            className="bg-red-600 text-white px-8 py-4 rounded-full text-2xl font-semibold hover:bg-red-700 focus:outline-none"
          >
            - Decrement
          </button>
          <button
            onClick={increment}
            className="bg-green-600 text-white px-8 py-4 rounded-full text-2xl font-semibold hover:bg-green-700 focus:outline-none"
          >
            + Increment
          </button>
        </div>
      </div>
    </div>
  );
}
