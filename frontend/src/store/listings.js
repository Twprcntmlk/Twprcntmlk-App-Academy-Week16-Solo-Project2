import { csrfFetch } from './csrf';

const LOAD = 'listings/LOAD';
const FIND_ONE = 'listings/FIND_ONE';


const load = listings => ({
  type: LOAD,
  listings
});

const getOne = listing => ({
    type: FIND_ONE,
    listing
  });

//Get listings from database//////////////////////////////
export const getlistings = () => async dispatch => {
const res = await csrfFetch('/api/listings'); // problem is here?
if (res.ok) {
    const listings = await res.json();
    dispatch(load(listings));
    }
}

//Get Specific listings from database//I might not need this
export const findlistings = (id) => async dispatch => {
const res = await csrfFetch(`/api/listings/${id}`);

if (res.ok) {
    const listing = await res.json();
    dispatch(getOne(listing));
}
};
//Edit listings from database//////////////////////////////
export const editlistings = (listing) => async dispatch => {
    const res = await csrfFetch(`/api/listings/${listing.id}`, {
                method: "PUT",
                body: JSON.stringify(listing),
            });

    if (res.ok) {
        const listingId = await res.json();
        dispatch(findlistings(listingId));
    }
    };


const listingsReducer = (state = {}, action) => {
switch(action.type) {
    case LOAD:{
        const alllistings = {};
        action.listings.forEach(listing => {
            alllistings[listing.id] = listing;
        });
        return {...alllistings}
    }

    case FIND_ONE:
        return {...action.listing}
    default:
        return state;
};

}

export default listingsReducer;
