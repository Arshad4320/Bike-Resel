import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Seller = () => {
    const sellers=useLoaderData()
    return (
        <div>
            <h2 className='text-center mt-10 text-3xl font-bold uppercase mb-8 text-blue-500'>All Seller</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th className='text-lg'>Name</th>
                                <th className='text-lg'>Email</th>
                                <th className='text-lg'>Address</th>
                                <th className='text-lg'>Role</th>
                    
                            </tr>
                        </thead>
                        <tbody>
                        {
                                sellers?.map(seller => <tr>
                                    <th>{seller.Name}</th>
                                    <td>{seller.email}</td>
                                    <td>{seller.Address}</td>
                                    <td>{seller.Option}</td>
                                </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Seller;