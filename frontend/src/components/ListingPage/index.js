// frontend/src/components/ListingPage/index.js
import React, { useEffect, useState, useCallback }from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findlistings } from '../../store/listings';
import { getReviews, deleteReview} from '../../store/reviews';//, editReview,
import ReviewForm from '../ReviewForm/index';
import EditReviewForm from '../ReviewForm/editReviewForm';
import './listing.css';


function ListingPage(){
    const { id } = useParams();
    const dispatch = useDispatch();

    let [showEditForm, setShowEditForm]=useState(true);
    const [buttonId, setbuttonId] = useState(0);

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
            <div>

            <h1>This is Reviews that are for this ID Section</h1>
            <div>{allListingReview?.map((el) =><div key={el.id} >{el.review}
                {console.log(allListingReview)}
                <button className='edit-button' id={el.id} onClick={(e) => {{setbuttonId(e.target.id);setShowEditForm((prev)=>!prev)}}}>Edit</button>
                {console.log(buttonId)}
                {(setbuttonId===id)?null:<EditReviewForm Id={id} listingId={listingId} toggleState={showEditForm}/>}

                {console.log(buttonId)}

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
