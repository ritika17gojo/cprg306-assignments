import React from 'react';
import ItemList from './item-list';

const Page = () =>{
    return(
        <main className="min-h-screen p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold mb-6">Shopping List</h1>
        <div className="w-full max-w-3xl bg-white/80 backdrop-blur-lg rounded-xl shadow-xl p-6">
            <ItemList/>
        </div>
        </main>
    );
};
export default Page;