"use client";
import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => { 
  const [sortBy, setSortBy] = useState('name');

  const getSortedItems = () => {
    return [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0; 
    });
  };

  const sortedItems = getSortedItems(); 
  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <button
          className={`py-2 px-4 rounded-lg ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
