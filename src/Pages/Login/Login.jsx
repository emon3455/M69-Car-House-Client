/* eslint-disable no-unused-vars */
import login from "../../assets/images/login/login.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Social from "../Shared/Social";

const Login = () => {

    const {loginUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const  handleSubmitLogin =(e)=>{

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);

        loginUser(email,password)
        .then(res=> {
            const userd= res.user;
            if(userd){
                alert("user Login successfully");
                form.reset();
            }
            
            navigate(from , {replace: true});

            
        })
        .catch(er=> {
            alert(er.message);
            return;
        })


    }

    return (
        <div className="hero min-h-screen bg-sky-100">
            <div className="hero-content flex-col lg:flex-row gap-14">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img className="w-full" src={login} alt="" />
                </div>
                <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>

                        <form onSubmit={handleSubmitLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-600 border-none" type="submit" value="Sign In" />
                            </div>
                        </form>

                        <p className="text-center text-orange-600 font-bold mt-2">Or Log in With</p>

                        <Social></Social>

                        <p className="text-md font-bold text-center">New Here ? <Link className="text-orange-500" to="/signup">Sign Up</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;