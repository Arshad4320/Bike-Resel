import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Sheard/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex ">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 ">
                        <li ><Link to='/dashboard/admin'>Admin</Link></li>
                        <li><Link to='/dashboard/allUser'>All User</Link></li>
                        <li><Link to='/dashboard/buyers'>Buyers</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;