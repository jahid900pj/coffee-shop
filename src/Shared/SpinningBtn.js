import React from 'react';
import { useState } from 'react';

const SpinningBtn = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
        setIsLoading(true);

        // Simulating an asynchronous action
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };
    return (
        <button
            className={`px-4 py-2 rounded-full ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
            onClick={handleClick}
            disabled={isLoading}
        >
            {isLoading ? 'Loading...' : 'Click Me'}
        </button>
    );
};

export default SpinningBtn;