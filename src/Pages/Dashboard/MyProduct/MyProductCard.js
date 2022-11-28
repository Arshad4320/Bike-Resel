import React from 'react';

const MyProductCard = ({ order }) => {
    console.log(order)
    const { categories, resalePrice, BuyerName, PostDate
,
Email
}=order
    return (
        <div >
            <div className="card  bg-slate-900 shadow-xl ">
                <div className="card-body text-center justify text-blue-500">
                   
                    <h3 className='text-xl font-bold '>Product Brand : {categories}</h3>
                    <p className='font-semibold text-lg'>Name : {BuyerName}</p>
                    <p className='font-semibold text-lg'>Email : {Email}</p>
                    <p className='font-semibold text-lg'>Price : {resalePrice}</p>
                    <p className='font-semibold text-lg'>Date : {PostDate}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;