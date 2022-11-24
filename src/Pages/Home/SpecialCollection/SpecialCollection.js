import React from 'react';
import img from '../../../Image/images.jpg'
import img2 from '../../../Image/images2.jpg'
import img3 from '../../../Image/images3.jpg'
const SpecialCollection = () => {
    return (
        <div className='mx-10'>
            <h2 className='text-center text-3xl font-bold uppercase my-12 text-blue-500'>Spacial Collection</h2>
            <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-7'>
                <div className='shadow-lg rounded p-10'>
                    <img src={img} alt="" />
                    <h4 className='text-xl uppercase font-semibold ml-10'>ninja 400</h4>
                </div>
                <div className='shadow-lg rounded p-10'>
                    <img src={img2} alt="" />
                    <h4 className='text-xl uppercase font-semibold ml-10'>monster 821</h4>
                </div>
                <div className='shadow-lg rounded p-10'>
                    <img src={img3} alt="" />
                    <h4 className='text-xl uppercase font-semibold ml-10'>suzuki gsxs 750</h4>
                </div>
            </div>
        </div>
    );
};

export default SpecialCollection;