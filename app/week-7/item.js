import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
    
    const handleClick = () => {
        onSelect(name); 
    };

    return (
        <li 
            className="flex justify-between items-center py-3 px-4 bg-white/90 backdrop-blur-md rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out m-2 cursor-pointer"
            onClick={handleClick} 
        >
            <span className="text-gray-800 font-medium">{name}</span>
            <span className="text-blue-600 font-semibold">{quantity} ({category})</span>
        </li>
    );
};

export default Item;
