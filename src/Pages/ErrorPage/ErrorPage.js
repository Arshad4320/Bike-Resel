import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import error from './../../Image/error.jpg'
const ErrorPage = () => {
    return (
        <div >
            <div className="p-12 ">
                <img src={error} className='mx-auto' alt="" />
                <div className='flex justify-center'>
                    <Link to='/' className='btn btn-primary  '> <span className='mr-2'><FaArrowLeft/></span> back to home</Link>
                </div>
                </div>
        </div>
    );
};

export default ErrorPage;