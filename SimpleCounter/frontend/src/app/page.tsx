'use client';

import { useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);

  // Increment, Decrement, and Reset functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);  // Reset function

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* "J Bias Dev" in top-left */}
      <div
        className="fixed top-4 left-4 text-4xl font-semibold"
        style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }} // Increased font size to 24px
      >
        J Bias Dev
      </div>

      {/* Connect Wallet button in top-right corner */}
      <div
        className="fixed top-4 right-4 z-10"
        style={{ position: 'fixed', top: '1rem', right: '1rem' }}
      >
        <button
          className="bg-red-600 text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-red-700 focus:outline-none"
          style={{
            fontSize: '20px', // Large text
            fontWeight: 'bold', // Bold text
            padding: '12px 24px', // Large padding
            borderRadius: '8px', // Rounded corners
            color: 'white', // White text
            backgroundColor: '#dc2626', // Red background (same as Tailwind bg-red-600)
            border: '2px solid #b91c1c', // Slightly darker red border
          }}
          onClick={() => console.log("Connect wallet button clicked")}
        >
          Connect Wallet
        </button>
      </div>

      {/* Centered container for counter */}
      <div className="flex items-center justify-center min-h-screen pt-20">
        {/* Hovering box with rounded corners, padding, and drop shadow */}
        <div
          className="bg-black text-white p-8 rounded-[30px] shadow-xl space-y-6 flex flex-col items-center"
          style={{
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.7)', // Moderate shadow
            backgroundColor: '#333', // Darker background for the box
            width: '500px', // Adjusted width for balance
            minHeight: '400px', // Adjusted height for balance
          }}
        >
          {/* Title with red color */}
          <h1
            className="text-4xl font-semibold"
            style={{ color: 'red', fontWeight: 'bold' }}
          >
            Simple Counter
          </h1>

          {/* Counter value with larger font */}
          <div className="text-[100px] font-bold">{count}</div>

          {/* Buttons with 12px space between them */}
          <div className="flex" style={{ gap: '12px' }}>
            <button
              onClick={decrement}
              className="bg-black text-white font-bold flex items-center justify-center border border-gray-600 focus:outline-none"
              style={{
                width: '70px',
                height: '70px',
                fontSize: '40px',
                color: 'white', // White text
                backgroundColor: 'black', // Black background
                borderRadius: '12px', // Rounded edges while keeping them square
              }}
            >
              -
            </button>
            <button
              onClick={increment}
              className="bg-black text-white font-bold flex items-center justify-center border border-gray-600 focus:outline-none"
              style={{
                width: '70px',
                height: '70px',
                fontSize: '40px',
                color: 'white', // White text
                backgroundColor: 'black', // Black background
                borderRadius: '12px', // Rounded edges while keeping them square
              }}
            >
              +
            </button>
          </div>

          {/* Reset button */}
          <button
            onClick={reset}
            className="font-bold py-3 px-10 mt-[1cm] rounded-[15px] border border-gray-600 focus:outline-none"
            style={{
              backgroundColor: 'black', // Black background
              color: 'white', // White text
              fontSize: '20px', // Smaller font size
              width: '250px', // Smaller width
              height: '60px', // Smaller height
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
