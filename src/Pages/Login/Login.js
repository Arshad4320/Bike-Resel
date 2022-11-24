import React, { useContext } from 'react';
import AuthContext, { AuthProvider } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { swal } from 'sweetalert';

const Login = () => {
    const { loginUser,user }=useContext(AuthProvider)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
 
    if (user) {
        navigate(from, { replace: true });
        swal("welcome!", "You  successfully login", "success");
    }

const handleLogin=(event)=>{
event.preventDefault();
const form =event.target;
const email=form.email.value;
const password=form.password.value;

loginUser(email,password)
.then(result=>{
    const user=result.user
    console.log(user)
})
.catch(error=>console.error(error))

}
 

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:w-2/5">
                <div className="text-center lg:text-left">
                    <h3 className="text-4xl font-bold">Login now</h3>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" >Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" >Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New to Resale Bike? Please <Link className='text-blue-600' to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;