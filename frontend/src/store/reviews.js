import { csrfFetch } from './csrf';


const FIND = 'reviews/FIND';
const ADD = 'reviews/ADD';
const EDIT = 'reviews/EDIT';
const DELETE = 'reviews/DELETE';


const reviewFind = (reviews, id) => ({
  type: FIND,
  reviews,
  id
});

const add = review => ({
  type: ADD,
  review
});

const edit = changedReview => ({
  type: EDIT,
  changedReview
})

const remove = id => ({
  type: DELETE,
  id
})

export const getReviews = (id) => async dispatch => {
  const res = await csrfFetch(`/api/reviews`,);//${id}`

  if (res.ok) {
    const reviews = await res.json();

    dispatch(reviewFind(reviews, id));
  }
};


export const addReview = (newReview) => async dispatch => {
  const res = await csrfFetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({...newReview})
  });

  if (res.ok) {
    const review = await res.json();
   return dispatch(add(review));
  }
};


export const editReview = (updatedReview) => async dispatch => {
  const res = await csrfFetch('/api/reviews/edit', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({...updatedReview})
  });

  if (res.ok) {
    const id = await res.json(); //
    return await dispatch(getReviews(id.Id));////////////edit(review)//////////////
  }
}

export const deleteReview = ( id ) =>  async dispatch => {
  const res = await csrfFetch(`/api/reviews/${id}`, {
    method: 'DELETE'
  });

  if(res.ok) {
    dispatch(remove(id))
  }
}


const reviewReducer = (state = {}, action) => {
  switch(action.type) {
    case FIND:
      {
        const allReviews = {};
        action.reviews.forEach(review => {
          allReviews[review.id] = review;
        });
        return allReviews;

      }
    case ADD:
      {
      const newState = {...state}
      newState[action.review.id] = action.review
      return newState;
      }
    case DELETE:
      {
        const newState = { ...state }
        delete newState[action.id]
        return newState
      }
    case EDIT:
      {//changedReview{id:id,review:review....}
        const newState = { ...state,
        [action.changedReview.id]: {
          ...state[action.changedReview.id],
          review: action.changedReview.review,
          cleanliness: action.changedReview.cleanliness,
          communication: action.changedReview.communication,
          checkIn: action.changedReview.checkIn,
          accuracy: action.changedReview.accuracy,
          location: action.changedReview.location,
          value: action.changedReview.value,
        }
        }
        return newState
      }
    default:
      return state;
  };

}

export default reviewReducer;
