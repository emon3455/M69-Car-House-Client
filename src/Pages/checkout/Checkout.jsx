/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";


const Checkout = () => {

    const service = useLoaderData();
    const { _id, title, price } = service;

    return (
        <div>
            <h2>Services: {title}</h2>

            <div className="card-body bg-gray-100 mt-2 mb-5 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name="fName" placeholder="F Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name="lName" placeholder="L Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" name="phone" placeholder="phone" className="input input-bordered" />
                    </div>
                </div>

                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea name="message" id="message" className="input input-bordered p-2 h-40"></textarea>
                </div>

                <input type="submit" className="btn bg-orange-500 border-none mt-1" value="Confirm Order" />
            </div>
        </div>

    );
};

export default Checkout;