import { EDIT_STREAM } from "../actions/types";

// sample code
// array - based approach

const streamReducer = (state = [], action) => {
    switch (action.type) {
        case EDIT_STREAM:
            return state.map(stream => {
                if (stream.id === action.payload.id) {
                    return action.payload;
                } else {
                    return stream;
                }
            })
        default:
            return state;
    }
}



// object - based approach

const streamReducer = (state = {}, action) => {
    switch(action.type) {
        case EDIT_STREAM:
            // const newState = {...state};
            // // using property accessor notation
            // newState[action.payload.id] = action.payload;
            // return newState;

            // [action.payload.id] = create a new key with the new id and assign it to that new action payload
            // action.payload is the value for the key [action.payload.id]
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}