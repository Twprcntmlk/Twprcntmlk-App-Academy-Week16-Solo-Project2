import { csrfFetch } from './csrf';

const ADD_RESERVATION = "reservation/ADD";
const STORE_RESERVATION  = "reservation/STORE";
const GET_RESERVATION  = "reservation/GET";
const DELETE_RESERVATION  = "reservation/DELETE";
const EDIT_RESERVATION = "reservation/EDIT";
/////////////////// ACTION CREATORS ////////////////////

const addReservation  = reservation => ({
    type: ADD_RESERVATION ,
    reservation
});

const newReservation = reservation => ({
    type: STORE_RESERVATION ,
    reservation
});

const getReservation  = (reservation) => ({
    type: GET_RESERVATION ,
    reservation
});

const deleteReservation  = (reservationId) => ({
    type: DELETE_RESERVATION,
    reservationId
});

const editReservation  = (changedReservation) => ({
    type: EDIT_RESERVATION,
    changedReservation

});


//////////////// THUNK ACTION CREATORS ////////////////////

export const createReservation  = reservation => async (dispatch) => {

    const response = await csrfFetch(`/api/reservation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservation)
    });

    if (response.ok) {
        const reservation = await response.json();
        dispatch(addReservation (reservation));
        return reservation;
    }
}

export const storeNewReservation  = reservation => async (dispatch) => {
    dispatch(newReservation (reservation))
    return reservation;
}

export const getReservations = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservation`);

    if (response.ok) {
        const reservation = await response.json();
        dispatch(getReservation (reservation));
        return reservation;
    };
}

export const cancelReservation  = (reservationId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservation/${reservationId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const reservationId = await response.json();
        dispatch(deleteReservation (reservationId));
    };
}

export const editReservations  = (reservation) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservation/${reservation.Id}`, {
        method: "PUT",
        body: JSON.stringify(reservation),
    });

    if (response.ok) {
        const changedReservation = await response.json();
        dispatch(editReservation(changedReservation));
    };
}

/////////////////////// REDUCER //////////////////////////

const initialState = {};

const reservationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RESERVATION :
            return action.reservation;
        case STORE_RESERVATION :
            return action.reservation;
        case GET_RESERVATION :
            const allreservations = {};
            action.reservation.forEach(res => {
                allreservations[res.id] = res;
            });
            return {...allreservations}
        case DELETE_RESERVATION :
            const newState={...state}
            delete newState[action.reservationId]
            return newState;
        case EDIT_RESERVATION :
            const newState2 = { ...state,
            [action.changedReservation.id]: {
            ...state[action.changedReservation.id],
            checkInDate: action.changedReservation.checkInDate,
            checkOutDate: action.changedReservation.checkOutDate,
            }
            }
            return newState2

        default:
            return state;
    }
};

export default reservationReducer;
