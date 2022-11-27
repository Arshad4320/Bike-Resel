import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Admin = () => {
    const admins =useLoaderData();
    console.log(admins);
    return (
        <div>
            <h2 className='text-center mt-10 text-3xl font-bold uppercase mb-8 text-blue-500'>Admin</h2>
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
                            admins?.map(admin => <tr>
                                <th>{admin.Name}</th>
                                <td>{admin.email}</td>
                                <td>{admin.Address}</td>
                                <td>{admin.Option}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;