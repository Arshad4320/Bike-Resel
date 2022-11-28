import { stringify } from '@firebase/util';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthProvider } from '../../Context/AuthContext';


const BookingModal = ({ loadData }) => {
    const {user}=useContext(AuthProvider)
    console.log(loadData)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { productName, name, phone, location, BrandNewPrice, resalePrice,
        usedYear, PostDate, categories, picture }=loadData;
   console.log(productName)
    const handleProduct = (data) => {
        const buyer={
            PhoneNumber: data.number,
            MeetLocation: data.location,
            BuyerName:data.name,
            phone: data.phone,
            Email:data.email,
            productName: data.productName,
            location: data.location,
            resalePrice: data.resalePrice,
            usedYear: data.usedYear,
            PostDate: data.PostDate,
            categories: data.categories,
            picture:data.picture

        }
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(buyer)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            swal("Thanks", `Product is successfully booking`, "success");
          
        })

     
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-semibold md-5 text-center">{productName}</h3>
                    <div className=' flex justify-center '>
                        <div className=' p-7'>
                           
                            <form onSubmit={handleSubmit(handleProduct)}>
                                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 '>

                                   

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Resale Price</span></label>
                                        <input type="number" readOnly defaultValue={resalePrice} {...register("resalePrice", {
                                            required: "Resale Price is required",
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
                            
                               
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Buyer Name</span></label>
                                        <input type="text" readOnly defaultValue={user?.displayName} {...register("name", {
                                            required: "Name is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                    </div>

                                    

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Phone</span></label>
                                        <input type="number"  {...register("phone", {
                                            required: "phone number is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Email</span></label>
                                        <input type="email" readOnly defaultValue={user?.email}  {...register("email", {
                                            required: "email is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Meet Location</span></label>
                                        <input type="text"   {...register("location", {
                                            required: "Location is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                                    </div>
                                </div>
                               {
                                    user?.uid ?
                                        <input className='btn btn-primary  w-1/3 mt-4' value="Submit" type="submit" />
                                        : <>
                                            <input disabled className='btn btn-primary  w-1/3 mt-4' value="Submit" type="submit" />
                                           <Link to='/login'>
                                                <input className='btn btn-primary  w-1/3 ml-2 mt-4' value="Login" type="submit" />
                                           </Link>
                                            
                                        </>
                               }

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;