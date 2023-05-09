/* eslint-disable no-unused-vars */
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import login from "../../assets/images/login/login.svg"
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-sky-100">
            <div className="hero-content flex-col lg:flex-row gap-14">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img className="w-full" src={login} alt="" />
                </div>
                <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>

                        <form>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-600 border-none" type="submit" value="Sign In" />
                            </div>
                        </form>

                        <p className="text-center text-orange-600 font-bold mt-2">Or Log in With</p>

                        <div className="flex justify-evenly">
                            <span className="p-4 btn-ghost rounded-full text-sky-600 text-lg"><FaFacebookF></FaFacebookF></span>
                            <span className="p-4 btn-ghost rounded-full text-lg"><FaGithub></FaGithub></span>              
                            <span className="p-4 btn-ghost rounded-full text-sky-600 text-lg"><FaLinkedin></FaLinkedin></span>
                        </div>

                        <p className="text-md font-bold text-center">New Here ? <Link className="text-orange-500" to="signup">Sign Up</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;