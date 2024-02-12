import React from 'react';

const Item= ({ name,quantity, category}) =>{
    return (
        <li className="flex justify-between items-center py-2 px-4 border-b border-gray-200">
        <span className="text-gray-600">{name}</span>
        <span className="text-gray-800">{quantity} ({category})</span>
        </li>
    );
};
export default Item;