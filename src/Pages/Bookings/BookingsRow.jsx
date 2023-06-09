

const BookingsRow = ({ booking, hundleDelete, handleConfimBookings }) => {

    const { _id, price, service, service_img, date, status } = booking;

    return (
        <tr>
            <td>
                <button onClick={() => hundleDelete(_id)} className="btn-ghost p-2 rounded-full btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>

            <td>
                <div className="w-28 h-24">
                    <img className="rounded-lg border-4 border-gray-200" src={service_img} alt="Avatar" />
                </div>
            </td>

            <td>
                <div>
                    <div className="font-bold">{service}</div>
                </div>
            </td>

            <td>
                {date}
            </td>
            <td>
                {price}
            </td>
            <th>
                {
                    status 
                    ?
                        <button className="btn btn-success">
                            Confirmed
                        </button>
                    :   <button onClick={() => handleConfimBookings(_id)} className="btn btn-ghost p-3 btn-outline">
                            Please Confirm
                        </button>
                }

            </th>
        </tr>
    );
};

export default BookingsRow;