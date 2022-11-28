import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import AddBike from '../AddBike/AddBike';
import { AuthProvider } from '../Context/AuthContext';
import useAdmin from '../Hooks/useAdmin';
import Navbar from '../Sheard/Navbar/Navbar';
import { isAdmin } from '@firebase/util';
import useBuyer from '../Hooks/useBuyer';
import useSeller from './../Hooks/useSeller';

const Dashboard = () => {
    const { user } = useContext(AuthProvider);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content 0">
                    {/* <AddBike></AddBike> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-blue-500 text-xl font-semibold bg-slate-900 ">
                        
                        {
                            isAdmin &&
                            <>
                                <li ><Link to='/dashboard/admin'>Admin</Link></li>
                                <li><Link to='/dashboard/allUser'>All User</Link></li>
                                <li><Link to='/dashboard/buyers'>Buyers</Link></li>
                                <li><Link to='/dashboard/seller'>Seller</Link></li>
                            </>
                        }
                        {
                            isSeller && <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                        }

                        {
                            isBuyer &&
                            <>
                                <li><Link to='/dashboard/orders'>My Orders</Link></li>
                                <li><Link to='/dashboard/myProduct'>My Product</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;