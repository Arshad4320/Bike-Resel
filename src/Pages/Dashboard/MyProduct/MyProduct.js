import React, { useContext } from 'react';
import { AuthProvider } from '../../Context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
    const { user } = useContext(AuthProvider)
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
            <div className='grid gap-5 mx-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    orders.map(order => <MyProductCard order={order} key={order._id}></MyProductCard>)
                }
            </div>
        </div>
    );
};

export default MyProduct;