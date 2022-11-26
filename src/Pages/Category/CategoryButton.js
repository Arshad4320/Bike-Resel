import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import BookingModal from './BookingModal/BookingModal';

const CategoryButton = () => {

    const [bikeCategory,setBikeCategory]=useState();
// console.log(bikeCategory)
    useEffect(()=>{
        fetch('http://localhost:5000/bikeCategory')
        .then(res=>res.json())
        .then(data => setBikeCategory(data))
    },[])

    return (
  
            <div>
            <h2 className='text-center text-2xl font-bold uppercase my-12 text-blue-500'>Category</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 my-16 '>
                {
                    bikeCategory?.map(category => <Link className='btn bg-primary  text-xl ' to={`/categoryItem/${category._id}`}>
                        <button   key={category._id}>{category.categoryName}
                        </button>
                    </Link>)
                }
            </div>
          
            </div>
    
    );
};

export default CategoryButton;