"use client";

import React, {useState} from 'react';

export default function NewItem() {
    const [name, setName]= useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory]= useState('produce');

    const handleSubmit = (e) => {
        e.preventDefault();

        const item= {name,quantity, category};
        console.log(item);

        alert('Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}');
    alert
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <div className="container mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto py-8 px-4">
                {/*Name Field*/}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input 
                    type="text"
                    id="name"
                    value={quantity}
                    onChange={(e) => setQuantity(parse.Int(e.target.value)) }
                    min="1"
                    max="99"
                    required
                    className="w-full px-3 py-2 border rounded shadow appearance-none "
                    />
                </div>

                {/*Category form*/}
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
                    <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow appearance-none"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen</option>
                        <option value="canned">Canned</option>
                        <option value="dry">Dry</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/*Submit Button*/}
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                </button>
            </form>
        </div>
    );
};

