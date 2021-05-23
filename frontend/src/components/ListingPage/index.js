// frontend/src/components/ListingPage/index.js
import React, { useEffect, useState }from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findlistings } from '../../store/listings';
import { getReviews, deleteReview} from '../../store/reviews';//, editReview,
import ReviewForm from '../ReviewForm/index';
import EditReviewForm from '../ReviewForm/editReviewForm';
import Reservation from '../Reservation/index';
import ReservationForm from '../Reservation/ReservationForm';
import './listing.css';


function ListingPage(){
    const { id } = useParams();
    const dispatch = useDispatch();

    let [showEditForm, setShowEditForm]=useState(true);
    const listingState = useSelector(state => state.listings);
    const reviewsState = useSelector(state => state.reviews);
    // const {user} = useSelector(state => state.session);
    const reviews = Object.values(reviewsState);
    const photos= listingState.Photos

    const allListingReview = reviews.filter((review) => (review.listingId === Number(id)))
    const listingId = allListingReview[0]?.listingId

    useEffect(() => {
        dispatch(findlistings(id));
        dispatch(getReviews(id));
        }, [dispatch, id, ])


    // {function(e){setbuttonId(e.target.value);setShowEditForm((prev)=>!prev)}}
    return(
        <>
            <h1>THIS IS LISTING PAGE BY ID</h1>
            <div>{photos?.map((el, i) => <img src={el.photo} key={i} alt="listy2"></img>)}</div>

                <p className='listing-name'>Name---{listingState.name}</p>
                <p className='listing-description'>Description---{listingState.description}</p>
                <p className='listing-address'>Address---{listingState.address}</p>
                <p className='listing-price'>Price Per Night---${listingState.price}</p>
                <p className='listing-guests'># of Guests---{listingState.guests}</p>
                <p className='listing-bedrooms'># of Bedrooms---{listingState.bedrooms}</p>
                <p className='listing-baths'># of Baths---{listingState.baths}</p>
                <p className='listing-coordinates'>latitude:---{listingState.latitude},longitude:---{listingState.longitude}</p>
                {/* <p className='listing-baths'>Rating---{allListingReview[id].review}</p> */}
            <div>

            <h1>This is Reviews that are for this ID Section</h1>
            <div>{allListingReview?.map((el) =><div key={el.id} >
                {el.review}Cleanliness:{el.cleanliness}Communication:{el.communication}CheckIn:{el.checkIn}Accuracy:{el.accuracy}Location:{el.location}Value:{el.value}

                <button className='edit-button' id={el.id} onClick={(e) => {setShowEditForm((prev)=>!prev)}}>Edit</button>

                {<EditReviewForm Id={el.id} listingId={listingId} toggleState={showEditForm}/>}



                <button className='delete-button' id={el.id} onClick={(e) =>  dispatch(deleteReview(e.target.id))}>Delete</button>
                {/* disabled={user && id === el.userId ? false : true} */}
                </div>)}
                </div>

            </div>
            <h1>This is Review FORM
                <div>
                    <ReviewForm Id={id} listingId={listingId}/>
                </div>
            </h1>
            <h1>This is Date Picker
                <div>
                    <Reservation Id={id} listingId={listingId}/>
                    <ReservationForm />
                </div>
            </h1>
        </>
    )
}
  export default ListingPage;
    //   {/* <div className='listing-main'>
    //         <Link className='listing-info' to={`/listings/${listing.id}`}>
    //             {photos.map((el) => <img src={el.photo}></img>)}
    //         </Link> */}
//   const listingsState = useSelector(state => state.listings);
//   const listings = Object.values(listingsState);
//   const dispatch = useDispatch();

//   useEffect(() => {
//       dispatch(getlistings());
//       }, [dispatch])

//       console.log(listingsState)
//       console.log(listings)
