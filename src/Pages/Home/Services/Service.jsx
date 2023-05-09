/* eslint-disable react/prop-types */

import { FaArrowRight } from 'react-icons/fa';

const Service = ({service}) => {

    const {title, img , price} = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                
                <div className="flex justify-between px-2">

                    <h4 className="text-2xl font-bold text-red-500">{price}</h4>

                    <button className="text-red-500 btn-ghost p-4 rounded-full"> <FaArrowRight/> </button>
                </div>
            </div>
        </div>
    );
};

export default Service;