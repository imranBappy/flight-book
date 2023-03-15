import { ADD, REMOVE } from "./types"


export const add = (flight) => {
    return {
        type: ADD,
        payload: flight
    }
}

export const remove = (flight) => {
    return {
        type: REMOVE,
        payload: flight
    }
}

