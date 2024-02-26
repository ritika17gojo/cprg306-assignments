"use client";
import React, { useState } from 'react';
import Item from './item'; 
import itemsData from './items.json'; 

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = (items) => {
    return items.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  };

  const orderedItems = sortItems([...itemsData]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSortBy("name")}
          className= { ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"} px-4 py-2 m-2 rounded}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={ ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}px-4 py-2 m-2 rounded}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-4 animate-fadeIn">
        {order.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;