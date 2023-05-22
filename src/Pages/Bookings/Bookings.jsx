/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingsRow from "./BookingsRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {

    const { user, Logout } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect(() => {

        fetch(url,{
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("car-access-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookings(data)
                }
                else{
                    Logout()
                    .then(() => {})
                    .catch((er) => {
                       alert(er.message);
                       return;
                    });
                    
                    navigate("/login");
                }
            })
            .catch(er => console.log(er.message));

    }, [])

    const hundleDelete = (id) => {
        const procced = confirm("Are you sure !! you want to delete?");
        if (procced) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("delete successfully done");
                        const remaining = bookings.filter(bok=> bok._id !=id);
                        setBookings(remaining);
                    }
                })
                .catch(er => console.log(er.message));
        }
    }

    const handleConfimBookings = (id)=>{
        const procced = confirm("Are you sure, you want to Confirm ?");
        if(procced){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: "PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify({status: "confirm"})
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                if(data.modifiedCount > 0){
                    alert("Confirm done");
                    const remaining = bookings.filter(bok => bok._id !== id);
                    const updated = bookings.find(bok=> bok._id === id);
                    updated.status="confirm";
                    const newBookings= [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
        }
    }

    return (
        <div>

            <h2>Total Bookings: {bookings.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="">
                        <tr>
                            <th>Remove</th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <BookingsRow
                                key={booking._id}
                                booking={booking}
                                hundleDelete={hundleDelete}
                                handleConfimBookings={handleConfimBookings}
                            >

                            </BookingsRow>)
                        }

                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default Bookings;