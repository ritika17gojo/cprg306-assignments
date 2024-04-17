"use client"
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useUserAuth} from './useUserAuth';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import Items from './items';
import {getItems, addItem} from './shopping-list-services.js';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth= getAuth(firebaseApp);

  const Page = () => {
    const [selectedItemName, setSelectedItemName] = useState('');
    const [items, setItems] = useState(Items);
    const user = useUserAuth();
    const history = useHistory();

    useEffect(() => {
        if (!user) {
            history.push('/');
        }
    }, [user, history]);

    useEffect(() => {

    }, []);

    const handleItemSelect = (itemName) => {
        console.log('Selected item:', itemName);

        const cleanedItemName = itemName.name.replace(/ingredients/g, '').split(",")[0];
        setSelectedItemName(cleanedItemName);
    };

    const handleSortByName = () => {
        const sortedItemsByName = [...items].sort((a,b) => a.category.localeCompare(b.category));
        setItems(sortedItemsByName);
    };

    const handleSortByCategory = () => {
        const sortedItemsByCategory = [...items].sort((a,b) => a.category.localCompare(b.category));
        setItems(sortedItemsByCategory);
    };

    const handleAddItem= async (item) => {
        const newItem = await(user.uid, item);
        setItems([...items, newItem]);
    }
    
    return (
        <div className="flex">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
                <div className="mb-4">
                    <button onClick={handleSortByName} className="bg-gray-700 text-white px-4 py-2 mr-2"> Sort by Name</button>
                    <button onClick={handleSortByCategory} className="bg-gray-700 text-white px-4 py-2">Sort ByCategory</button>
                </div>
                <ItemList onItemSelect={handleItemSelect} items={items} />
            </div>
            <div className="container mx-auto p-4">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </div>
    );
  };

  async function loadItems() {
    const items = await getItems(user.uid);
    setItems(items);

    useEffect(() => {
        loadItems();
    }, [user.uid]);
  }
  export default Page;