/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect(()=>{

        fetch(url)
        .then(res=> res.json())
        .then(data=>setBookings(data))
        .catch(er=> console.log(er.message));
        
    },[])

    return (
        <div>

            <h2>Total Bookings: {bookings.length}</h2>
            <div className="">
                {

                }
            </div>


        </div>
    );
};

export default Bookings;