import { csrfFetch } from './csrf';

const LOAD = 'photos/LOAD';
// const FIND_ONE = 'photos/FIND_ONE';


const load = photos => ({
  type: LOAD,
  photos
});

// const getOne = photo => ({
//     type: FIND_ONE,
//     photo
//   });

//Get photos from database//////////////////////////////
export const getphotos = () => async dispatch => {
const res = await csrfFetch('/api/photos'); // problem is here?
if (res.ok) {
    const photos = await res.json();
    dispatch(load(photos));
    }
}

//Get Specific photos from database//I might not need this
// export const findphotos = (id) => async dispatch => {
// const res = await csrfFetch(`/api/photos/${id}`);

// if (res.ok) {
//     const photo = await res.json();
//     dispatch(getOne(photo));
// }
// };
//Edit photos from database//////////////////////////////
// export const editlistings = (photo) => async dispatch => {
//     const res = await csrfFetch(`/api/photos/${photo.id}`, {
//                 method: "PUT",
//                 body: JSON.stringify(photo),
//             });

//     if (res.ok) {
//         const PhotoId = await res.json();
//         dispatch(findphotos(PhotoId));
//     }
//     };


const PhotosReducer = (state = {}, action) => {
switch(action.type) {
    case LOAD:{
        const allPhotos = {};
        action.photos.forEach(photo => {
            allPhotos[photo.id] = photo;
        });
        return {...allPhotos}
    }
    default:
        return state;
    };
}

export default PhotosReducer;
