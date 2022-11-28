import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext, { AuthProvider } from '../../Context/AuthContext';


const MyOrders = () => {
    const {user} = useContext(AuthProvider)
    console.log(user?.email)
    const { data: orders = [], refetch } = useQuery({
        queryKey: ["orders"],
        queryFn: () =>
            fetch(`http://localhost:5000/user/booking?Email=${user.email}`)
                .then(res =>
                    res.json())

    })
   
    return (
        <div>
            <h2 className='text-center mt-10 text-3xl font-bold uppercase mb-8 text-blue-500'>My Orders</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr >
                                <th className='text-lg'>Product Name</th>
                                <th className='text-lg'>Price</th>
                                <th className='text-lg'>Payment</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map(order => <tr>
        
                                    <td>{order.categories}</td>
                                    <td>{order.resalePrice}</td>
                                    <td><button className='btn btn-secondary'>Pay</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;