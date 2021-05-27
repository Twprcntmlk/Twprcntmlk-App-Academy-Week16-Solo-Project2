import { csrfFetch } from './csrf';

const LOAD = 'messages/LOAD';
const ADD = 'messages/ADD';


const load = messages => ({
  type: LOAD,
  messages
});

const add = message => ({
    type: ADD,
    message
  });

//Get messages from database//////////////////////////////
export const getmessages = () => async dispatch => {
const res = await csrfFetch('/api/messages'); // problem is here?
if (res.ok) {
    const messages = await res.json();

    dispatch(load(messages));
    }
}

//Get Specific messages from database//I might not need this
export const addmessages = (messages) => async dispatch => {
    const res = await csrfFetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...messages})
    });

    if (res.ok) {
      const review = await res.json();
     return dispatch(getmessages());
    }
  };

//Edit messages from database//////////////////////////////
// export const editlistings = (message) => async dispatch => {
//     const res = await csrfFetch(`/api/messages/${message.id}`, {
//                 method: "PUT",
//                 body: JSON.stringify(message),
//             });

//     if (res.ok) {
//         const listingId = await res.json();
//         dispatch(findmessages(listingId));
//     }
//     };


const messagesReducer = (state = {}, action) => {
switch(action.type) {
    case LOAD:{
        const allmessages = {};
        action.messages.forEach(message => {
            allmessages[message.id] = message;
        });
        return {...allmessages}
    }

    case ADD:
        return {...action.message}
    default:
        return state;
};

}

export default messagesReducer;
