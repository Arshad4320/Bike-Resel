import React from 'react';


const CategoryItem = ({ items }) => {
    const { PostDate, brandNewPrice, categories, location, name, phone, picture, productName, resalePrice, usedYear}=items;
    return (
        <div>
            <div className="card card-compact   shadow-xl p-3">
                <figure><img src={picture} alt="Shoes"className='rounded-lg' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-blue-500">{productName}</h2>
                    <div className=' text-gray-700 font-semibold grid grid-cols-2'>
                        <p >Seller Name : {name}</p>
                        <p>Phone : {phone}</p>
                        <p>Post Date : {PostDate}</p>
                        <p>Location : {location}</p>
                        <p>Brand New Price : {brandNewPrice}</p>
                        <p>Resale Price : {resalePrice}</p>
                        <p>Used Year : {usedYear}</p>
                        <p>Category : {categories}</p>
                       
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full mt-10">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;