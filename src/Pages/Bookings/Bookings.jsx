/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingsRow from "./BookingsRow";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
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