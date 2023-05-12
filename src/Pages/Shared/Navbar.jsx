import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {

    const {user, Logout} = useContext(AuthContext);

    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        {
            user
            ?
            <li><Link to="/bookings">Bookings</Link></li>
            :
            <li><Link to="/login">Login</Link></li>
        }
        
    </>

   
    
    const handleLogout = ()=>{
        Logout()
        .then(() => {
           alert("Log out done");
           
           localStorage.removeItem('car-access-token');

          }).catch((er) => {
           alert(er.message);
           return;
          });
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="w-16" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {
                    user && <span className="btn btn-ghost">{user.displayName}</span>
                }
                {
                    user && <span className="btn btn-warning" onClick={handleLogout}> Sign Out </span>
                }
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;