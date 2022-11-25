import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const AddBike = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key
    const navigate = useNavigate()

    const handleProduct = (data) => {
        console.log(data)
        const image = data.picture[0];
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);

                if (imgData.success) {
                    const bike = {
                        name: data.name,
                        phone: data.phone,
                        productName: data.productName,
                        picture: imgData.data.url,
                        location: data.location,
                        brandNewPrice: data.BrandNewPrice,
                        resalePrice: data.resalePrice,
                        usedYear: data.usedYear,
                        PostDate: data.PostDate,
                        categories: data.categories

                    }

                    fetch('http://localhost:5000/categories', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(bike)
                    })
                        .then(res => res.json())
                        .then(result => {
                            // navigate('/')
                            console.log(result)
                            swal("Thanks", `${data.productName} Bike is successfully added`, "success");
                        })

                }

            })

    }

    return (
        <div className=' flex justify-center '>
            <div className=' p-7'>
                <h2 className='text-2xl text-center'>Add Bike</h2>
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
                            <select {...register("categories")} className="select select-ghost w-full max-w-xs input input-bordered">
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
    );
};

export default AddBike;