const { ADD, REMOVE } = require("./types");


const initialState = [
    { id: 0, from: 'Dhaka', to: 'Sylhet', date: '2023-03-09', guests: '3', ticketClass: 'Economy' }
];

const flightReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD:
            if (state.length > 2) {
                alert('You can only add 3 flights');
                return state;
            }
            return [
                ...state,
                action.payload
            ]
        case REMOVE:
            const flight = state.filter(f => f.id !== action.payload.id)
            return [
                ...flight,
            ]
        default:
            return state;
    }

}

export default flightReducer;