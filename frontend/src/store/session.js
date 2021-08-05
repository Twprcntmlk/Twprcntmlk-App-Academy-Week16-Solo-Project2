// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const SET_USER = "session/setUser"
const REMOVE_USER = "session/removeUser"

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export const removeUser = () => ({
    type: REMOVE_USER,
})

// export const createUser = (user) => async (dispatch) => {
//   const { imageUrl, firstName, lastName, email, password, username } = user;
//   console.log("THE BACK",imageUrl, firstName, lastName, email, password, username )
//   const formData = new FormData();
//   formData.append("firstName", firstName);
//   formData.append("lastName", lastName);
//   formData.append("username", username);
//   formData.append("email", email);
//   formData.append("password", password);

//   // // for multiple files
//   // if (images && images.length !== 0) {
//   //   for (var i = 0; i < images.length; i++) {
//   //     formData.append("images", images[i]);
//   //   }
//   // }

//   // for single file
//   if (imageUrl) formData.append("imageUrl", imageUrl);
//   console.log(formData)

//   const res = await csrfFetch('/api/users/', {
//     method: "POST",
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//     body: formData,
//   });

//   const data = await res.json();
//   dispatch(setUser(data.user));
// };

export const signup = (user) => async (dispatch) => {
  const { username, firstName, lastName, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      firstName,
      lastName,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};




export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();

  dispatch(setUser(data.user));
  return response;
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};





export const updateUser = (user) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${user.id}/`, {
    method: "PATCH",
    body: JSON.stringify(user),
  });
  if(!res.ok) throw res;

  const data = await res.json();
  dispatch(setUser(data.user));
  return res;
};


export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
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
  dispatch(setUser(data.user));
};

const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    // case SET_USER:
    //   newState = Object.assign({}, state);
    //   newState.user = action.payload;
    //   return newState;
    case SET_USER:
        return { ...state, user: action.payload };
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer
