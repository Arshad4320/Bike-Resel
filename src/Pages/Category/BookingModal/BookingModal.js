import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


const BookingModal = ({ loadData }) => {
    const { register, handleSubmit, } = useForm();
    const { productName, name, phone,  location, BrandNewPrice, resalePrice,
        usedYear, PostDate, categories }=loadData;

    const handleProduct = (data) => {
    

            //         fetch('http://localhost:5000/categories', {
            //             method: 'POST',
            //             headers: {
            //                 'content-type': 'application/json'
            //             },
            //             body: JSON.stringify(bike)
            //         })
            //             .then(res => res.json())
            //             .then(result => {
            //                 // navigate('/')
            //                 console.log(result)
            //                 swal("Thanks", `${data.productName} Bike is successfully added`, "success");
            //             })

            //     }

            // })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <div className=' flex justify-center '>
                        <div className=' p-7'>
                            <h2 className='text-2xl text-center'>Add Bike</h2>
                            <form onSubmit={handleSubmit(handleProduct)}>
                                <div >

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Seller Name</span></label>
                                        <input type="text" readOnly defaultValue={name} {...register("name", {
                                            required: "Name is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                       
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Phone</span></label>
                                        <input type="number" readOnly defaultValue={phone} {...register("phone", {
                                            required: "phone number is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                       
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Product Name</span></label>
                                        <input type="text" readOnly defaultValue={productName} {...register("productName", {
                                            required: "Product Name is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Location</span></label>
                                        <input type="text" readOnly defaultValue={location} {...register("location", {
                                            required: "Location is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Brand New Price</span></label>
                                        <input type="Number" readOnly defaultValue={BrandNewPrice} {...register("BrandNewPrice", {
                                            required: "Brand new price is required",
                                        })} className="input input-bordered w-full max-w-xs" />
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Resale Price</span></label>
                                        <input type="number" readOnly defaultValue={resalePrice} {...register("resalePrice", {
                                            required: "Resale Price is required",
                                        })} className="input input-bordered w-full max-w-xs" />
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Used Time</span></label>
                                        <input type="text" readOnly defaultValue={usedYear} {...register("usedYear", {
                                            required: " Used time is required",
                                        })} className="input input-bordered w-full max-w-xs" />
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Post Date</span></label>
                                        <input type="date" readOnly defaultValue={PostDate} {...register("PostDate", {
                                            required: "Post Date is required",
                                        })} className="input input-bordered w-full max-w-xs" />
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Select Categories</span></label>
                                        <select {...register("categories")} readOnly defaultValue={categories} className="select select-ghost w-full max-w-xs input input-bordered">
                                            <option defaultChecked>BMW</option>
                                            <option>SUZUKI </option>
                                            <option>KTM</option>
                                        </select>
                                    </div>
                                </div>

                                <input className='btn btn-primary  w-1/3 mt-4' value="Submit" type="submit" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;