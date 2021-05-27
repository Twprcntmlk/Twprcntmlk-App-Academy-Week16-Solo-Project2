// frontend/src/components/ListingPage/index.js
import React, { useEffect, useState }from 'react';
import { useParams,Redirect  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findlistings } from '../../store/listings';
import { getReviews } from '../../store/reviews';//, editReview, deleteReview
import ReviewForm from '../ReviewForm/index';
import GoogleApiWrapper from '../GoogleMapApi/GoogleMapApi'

import Reservation from '../Reservation/index';
import { } from 'react-router-dom';

import './SingleListing.css';
import Review from './review';


function SingleListingPage(){
    const { id } = useParams();
    const dispatch = useDispatch();

    let [clean, setClean]=useState(0);
    let [communication, setCommunication]=useState(0);
    let [checkIn, setCheckIn]=useState(0);
    let [accuracy, setAccuracy]=useState(0);
    let [location, setLocation]=useState(0);
    let [value, setValue]=useState(0);


    const {user}= useSelector(state => state.session);
    const listingState = useSelector(state => state.listings);


    const reviewsState = useSelector(state => state.reviews);
    const reviews = Object.values(reviewsState);


    const allListingReview = reviews.filter((review) => (review.listingId === Number(id)))
    const listingId = allListingReview[0]?.listingId

    const photos= listingState.Photos

    useEffect(() => {
        dispatch(findlistings(id));
        dispatch(getReviews(id));
        }, [dispatch, id])

    useEffect(() => {
        if(allListingReview.length){
            let cleanE = allListingReview.reduce((accum,nums) =>{
                return accum+nums.cleanliness
            },0)
            setClean(cleanE/allListingReview.length)
            let communicationE = allListingReview.reduce((accum,nums) =>{

                return accum+nums.communication
            },0)
            setCommunication(communicationE/allListingReview.length)
            let checkInE = allListingReview.reduce((accum,nums) =>{

                return accum+nums.checkIn
            },0)
            setCheckIn(checkInE/allListingReview.length)
            let accuracyE = allListingReview.reduce((accum,nums) =>{

                return accum+nums.accuracy
            },0)
            setAccuracy(accuracyE/allListingReview.length)
            let locationE = allListingReview.reduce((accum,nums) =>{

                return accum+nums.location
            },0)
            setLocation(locationE/allListingReview.length)
            let valueE = allListingReview.reduce((accum,nums) =>{

                return accum+nums.value
            },0)
            setValue(valueE/allListingReview.length)
        }
        }, [allListingReview,clean,communication,checkIn,accuracy,location,value])

    return(
        <>
            <div className='SingleList-title'>
                <h1>{listingState.name}</h1>
                <h3>{listingState.address}</h3>
                <p>	&#11088; {((clean+communication+checkIn+accuracy+location+value)/6).toFixed(2)} {`(${allListingReview.length} reviews)`} </p>
            </div>
            <div className='SingleList-Photos'>
                {photos?.map((el, i) => <img src={el.photo} id={`photo-${i}`} key={i} alt="listy2"></img>)}
            </div >
            <div className='SingleList-description_holder'>
                <div className='SingleList-description'>
                    <p className='SingleList-listing-description'>Description---{listingState.description}</p>
                    <p className='SingleList-listing-price'>Price Per Night---${listingState.price}</p>
                    <p className='SingleList-listing-guests'># of Guests---{listingState.guests}</p>
                    <p className='SingleList-listing-bedrooms'># of Bedrooms---{listingState.bedrooms}</p>
                    <p className='SingleList-listing-baths'># of Baths---{listingState.baths}</p>
                    <p className='SingleList-listing-coordinates'>latitude:---{listingState.latitude},longitude:---{listingState.longitude}</p>
                </div>
                <div className='SingleList-reservation'>
                    <Reservation userId={id} listingId={listingId} price={listingState.price}/>
                </div>
                <div className="GoogleMap">
                    <GoogleApiWrapper lat={listingState.latitude} lon={listingState.longitude}/>
                </div>
            </div>

            <div className='SingleList-reviews'>
                <div className='SingleList-reviews_stats'>
                    <p className='stats SingleList-reviews_stats_rating'>
                        &#11088; {((clean+communication+checkIn+accuracy+location+value)/6).toFixed(2)} {`(${allListingReview.length} reviews)`}
                    </p>
                    <p className='stats SingleList-reviews_stats_cleanliness'>CLEANLINESS---{Math.ceil(clean)}</p>
                    <p className='stats SingleList-reviews_stats_communication'>COMMUNICATION---{Math.ceil(communication)}</p>
                    <p className='stats SingleList-reviews_stats_checkin'>CHECKIN---{Math.ceil(checkIn)}</p>
                    <p className='stats SingleList-reviews_stats_accuracy'>ACCURACY---{Math.ceil(accuracy)}</p>
                    <p className='stats SingleList-reviews_stats_location'>LOCATION---{Math.ceil(location)}</p>
                    <p className='stats SingleList-reviews_stats_value'>VALUE---{Math.ceil(value)}</p>
                    <ReviewForm className='SingleList-ReviewForm' userId={user.id} listingId={listingId}  />
                </div>

                <div>{allListingReview?.map((el) =>
                    <div key={el.id} >
                        <Review el={el} listingId={el.listingId}/>
                    </div>)}
                </div>



            </div>



        </>
    )
}
  export default SingleListingPage;
