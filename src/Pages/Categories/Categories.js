import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Categories = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

 const  handleProduct=(data)=>{
    console.log(data);
 }

    return (
        <div className=' flex justify-center '>
            <div className=' p-7'>
                <h2 className='text-xl text-center'>Add Bike</h2>
                <form onSubmit={handleSubmit(handleProduct)}>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Seller Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Phone</span></label>
                            <input type="number" {...register("phone", {
                                required: "phone number is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Product Name</span></label>
                            <input type="text" {...register("productName", {
                                required: "Product Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Picture</span></label>
                            <input type="file" {...register("picture", {
                                required: "picture is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.picture && <p className='text-red-500'>{errors.picture.message}</p>}
                        </div>

                    
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Location</span></label>
                            <input type="text" {...register("location", {
                                required: "Location is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Brand New Price</span></label>
                            <input type="Number" {...register("BrandNewPrice", {
                                required: "Brand new price is required",
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.BrandNewPrice && <p className='text-red-500'>{errors.BrandNewPrice.message}</p>}
                        </div>




                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Resale Price</span></label>
                            <input type="number" {...register("resalePrice", {
                                required: "Resale Price is required",
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Used Time</span></label>
                            <input type="text" {...register("usedYear", {
                                required: " Used time is required",
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.usedYear && <p className='text-red-500'>{errors.usedYear.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Post Date</span></label>
                            <input type="date" {...register("PostDate", {
                                required: "Post Date is required",
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.PostDate && <p className='text-red-500'>{errors.PostDate.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Select Categories</span></label>
                            <select className="select select-ghost w-full max-w-xs input input-bordered">
                                <option defaultChecked>BMW</option>
                                <option>Suzuki </option>
                                <option>KTM</option>
                            </select>
                        </div>
                    </div>

                    <input className='btn btn-primary  w-2/5 mt-4' value="Submit" type="submit" />
                   
                </form>
            </div>
        </div>
    );
};

export default Categories;