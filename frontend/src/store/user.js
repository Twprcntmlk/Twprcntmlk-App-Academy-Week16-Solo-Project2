import { csrfFetch } from './csrf';


const FIND_ONE = 'users/FIND_ONE';

const getOne = user => ({
    type: FIND_ONE,
    user
  });


export const findlistings = (id) => async dispatch => {
const res = await csrfFetch(`/api/users/${id}`);

if (res.ok) {
    const user = await res.json();
    dispatch(getOne(user));
}
};


const usersReducer = (state = {}, action) => {
switch(action.type) {
    case FIND_ONE:
        return {...action.user}
    default:
        return state;
    };
}

export default usersReducer;
