/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const Checkout = () => {

    const service = useLoaderData();
    const { _id, title, price , img } = service;
    const { user } = useContext(AuthContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const booking = {
            customerName: name,
            date,
            email,
            price,
            service: title,
            service_img: img,
            service_id: _id,
        }

        fetch('http://localhost:5000/bookings',{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                alert("Booking Confirm");
            }
        })
        .catch(er=> console.log(er.message))

    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-2">Services: {title}</h2>

            <div className="card-body bg-gray-100 mt-2 mb-5 rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input type="text" name="price" defaultValue={`$${price}`} className="input input-bordered" readOnly />
                        </div>
                    </div>

                    <input type="submit" className="btn bg-orange-500 border-none mt-4 btn-block" value="Confirm Order" />

                </form>
            </div>
        </div>

    );
};

export default Checkout;