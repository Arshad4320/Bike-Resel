import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryItem from './CategoryItem';

const CategoryId = () => {
    const data=useLoaderData()
 
    return (
        <div>
            <h2 className='text-center text-3xl font-bold uppercase m-8 text-blue-500'>All Collection</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 '>
                {
                    data?.map(items => <CategoryItem key={items._id} items={items}></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default CategoryId;