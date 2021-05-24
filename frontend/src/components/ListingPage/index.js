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
import Review from '../ListingPage/review';

function ListingPage(){
    const { id } = useParams();
    const dispatch = useDispatch();


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

    useEffect(() => {
        let clean;
        if(allListingReview.length){
            clean = allListingReview.reduce((accum,nums) =>{
                console.log(nums.cleanliness)
                return accum+nums.cleanliness
            },0)
        }
        }, [allListingReview])



    return(
        <>
            <div className='SingleList-title'>
                <h1>{listingState.name}</h1>
                <h3>{listingState.address}</h3>
            </div>
            <div className='SingleList-Photos'>
                {photos?.map((el, i) => <img src={el.photo} id={`photo-${el.id}`} key={i} alt="listy2"></img>)}
            </div>
            <div className='SingleList-description'>
                <p className='listing-description'>Description---{listingState.description}</p>
                <p className='listing-price'>Price Per Night---${listingState.price}</p>
                <p className='listing-guests'># of Guests---{listingState.guests}</p>
                <p className='listing-bedrooms'># of Bedrooms---{listingState.bedrooms}</p>
                <p className='listing-baths'># of Baths---{listingState.baths}</p>
                <p className='listing-coordinates'>latitude:---{listingState.latitude},longitude:---{listingState.longitude}</p>
                {/* <p className='listing-baths'>Rating---{allListingReview[id].review}</p> */}
            </div>

            <div className='SingleList-reviews'>
                <div className='SingleList-reviews_stats'>

                </div>

                <div>{allListingReview?.map((el) =><div key={el.id} >
                  <Review el={el} listingId={el.listingId}/>

                    </div>)}
                </div>

                <ReviewForm userId={id} listingId={listingId} />
            </div>


            <div>
                <Reservation />
                <ReservationForm userId={id} listingId={listingId}/>
            </div>

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
