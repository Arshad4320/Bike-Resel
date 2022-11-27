import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Buyers = () => {
    const buyers=useLoaderData()
    return (
        <div>
            <h2 className='text-center mt-10 text-3xl font-bold uppercase mb-8 text-blue-500'>All Buyers</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Role</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers?.map(buyer => <tr>
                                    <th>{buyer.Name}</th>
                                    <td>{buyer.Email}</td>
                                    <td>{buyer.Address}</td>
                                    <td>{buyer.Option}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Buyers;