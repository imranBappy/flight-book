import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/flight/action';

const Flight = (props) => {
    const { from, to, date, guests, ticketClass } = props.flight;
    const dispatch = useDispatch();
    return (
        <tr className="lws-bookedTable text-black">
            <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                    <p className="lws-bookedFrom">{from}</p>
                </div>
            </td>
            <td className="px-6 py-4">
                <p className="lws-bookedTo">{to}</p>
            </td>
            <td className="px-6 py-4 text-center">
                <p className="lws-bookedDate">{date}</p>
            </td>
            <td className="px-6 py-4 text-center">
                <p className="lws-bookedGustes">{guests}</p>
            </td>
            <td className="px-6 py-4 text-center">
                <span className="lws-bookedClass"> {ticketClass} </span>
            </td>
            <td className="px-6 py-4 text-center">
                <div className="flex justify-center gap-4">
                    <button className="lws-remove" onClick={() => dispatch(remove(props.flight))} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default Flight;