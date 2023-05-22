import { useEffect, useRef, useState } from "react";
import Service from "./Service";

const Services = () => {

    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {

        fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? "asc" : "dec"}`)
            .then(res => res.json())
            .then(data => setServices(data))

    }, [asc, search]);

    const handleChange = () => {
        console.log(inputRef.current.value);
        setSearch(inputRef.current.value);
    }

    return (
        <div className="my-8">

            <div className="text-center my-4 space-y-2">
                <h4 className="text-2xl font-bold text-red-500">Service</h4>
                <h2 className="text-4xl font-bold">
                    Our Service Area
                </h2>
                <p className="text-gray-700">
                    the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.
                </p>
            </div>

            <div className="my-4 flex justify-between">

                <button className="btn btn-primary " onClick={() => setAsc(!asc)}>
                    {asc ? "Sort In Descending Order" : "Sort In Ascending Order"}
                </button>

                <div className="w-96">
                    <input onChange={handleChange} ref={inputRef} type="text" placeholder="Search here…" className="input input-bordered w-full" />
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {

                    services.map(ser => <Service key={ser._id} service={ser} ></Service>)

                }

            </div>

        </div>
    );
};

export default Services;