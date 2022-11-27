import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllUser = () => {

    const users=useLoaderData()
    const { Name, Email, Option, Address }=users
//    console.log(Name,Address,Email,Option);
   console.log(users);
   
    return (
        <div>
            <h2 className='text-center mt-10 text-3xl font-bold uppercase mb-8 text-blue-500'>All User</h2>
            
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                        
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <tr key={user._id}>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Option}</td>
                                <td><button className='btn btn-secondary'>Delete</button></td>
                        

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;





