import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {useQuery} from "@tanstack/react-query"
import swal from 'sweetalert';


const AllUser = () => {

    // const users=useLoaderData()
    const { data: users =[], refetch } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            fetch('http://localhost:5000/user')
            .then(res =>
                res.json())
            
    })
//usr update
    const handleUpdate =id=>{
        fetch(`http://localhost:5000/user/${id}`,{
            method:'PUT',
        })
        .then(res=>res.json())
        .then(result=>{
            refetch()
            console.log(result)
            
        })
    }
//user delete
const handleDelete=id=>{
    fetch(`http://localhost:5000/user/${id}`,{
        method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        refetch()
        swal("Thanks!", "user successfully delete", "success");
    })
}
    return (
        <div>
            <h2 className='text-center mt-10 text-3xl font-bold uppercase mb-8 text-blue-500'>All User</h2>
            
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                        
                            <th className='text-lg'>Name</th>
                            <th className='text-lg'>Email</th>
                            <th className='text-lg'>Make Admin</th>
                            <th className='text-lg'>Delete</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <tr key={user._id}>
                                <td>{user.Name}</td>
                                <td>{user.email}</td>
                                <td><button className='btn btn-secondary' onClick={() => handleUpdate(user._id)}>{user.Option}</button></td>
                                <td><button className='btn btn-secondary' onClick={() => handleDelete(user._id)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;





