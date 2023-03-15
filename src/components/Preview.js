import React from 'react';
import Flight from './Flight';
import { useSelector } from 'react-redux';

const Preview = () => {
    const state = useSelector(state => state);
    return (
        <div className="table-container">
            <table className="booking-table">
                <thead className="bg-gray-100/50">
                    <tr className="text-black text-left">
                        <th>Destination From</th>
                        <th>Destination To</th>
                        <th className="text-center">Journey Date</th>
                        <th className="text-center">Guests</th>
                        <th className="text-center">Class</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                    {
                        state.map(flight => <Flight key={flight.id} flight={flight} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Preview;