import { csrfFetch } from './csrf';


const FIND_ONE = 'users/FIND_ONE';
const SET_USER = "users/setUser";

const getOne = user => ({
    type: FIND_ONE,
    user
});

  const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const findusers = (id) => async dispatch => {
const res = await csrfFetch(`/api/users/${id}`);

if (res.ok) {
    const user = await res.json();
    dispatch(getOne(user));
}
};

export const updateImage = (user) => async (dispatch) => {
    const {image, id} = user;
    const formData = new FormData();
    // console.log(image, id)
    // for single file
    if (image) formData.append("image", image);

    const res = await csrfFetch(`/api/users/photo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    const data = await res.json();
    dispatch(findusers(id));
  };

const usersReducer = (state = {}, action) => {
switch(action.type) {
    case FIND_ONE:
        return {...action.user}
    case SET_USER:
        return { ...state, user: action.payload };
    default:
        return state;
    };
}

export default usersReducer;
