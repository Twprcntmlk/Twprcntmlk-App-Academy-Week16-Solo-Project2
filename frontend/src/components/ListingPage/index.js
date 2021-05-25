// frontend/src/components/ListingPage/index.js
import React, { useEffect, useState }from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findlistings } from '../../store/listings';
import { getReviews, deleteReview} from '../../store/reviews';//, editReview,
import ReviewForm from '../ReviewForm/index';
import EditReviewForm from '../ReviewForm/editReviewForm';
import Reservation from '../Reservation/index';
import ReservationForm from '../Reservation/index';
import './listing.css';
import Review from '../ListingPage/review';

function ListingPage(){
    const { id } = useParams();
    const dispatch = useDispatch();

    let [clean, setClean]=useState(0);
    let [communication, setCommunication]=useState(0);
    let [checkIn, setCheckIn]=useState(0);
    let [accuracy, setAccuracy]=useState(0);
    let [location, setLocation]=useState(0);
    let [value, setValue]=useState(0);

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
        if(allListingReview.length){
            clean = allListingReview.reduce((accum,nums) =>{
                console.log(nums.cleanliness)
                return accum+nums.cleanliness
            },0)
            setClean(clean/allListingReview.length)
            communication = allListingReview.reduce((accum,nums) =>{
                console.log(nums.communication)
                return accum+nums.communication
            },0)
            setCommunication(communication/allListingReview.length)
            checkIn = allListingReview.reduce((accum,nums) =>{
                console.log(nums.checkIn)
                return accum+nums.checkIn
            },0)
            setCheckIn(checkIn/allListingReview.length)
            accuracy = allListingReview.reduce((accum,nums) =>{
                console.log(nums.accuracy)
                return accum+nums.accuracy
            },0)
            setAccuracy(accuracy/allListingReview.length)
            location = allListingReview.reduce((accum,nums) =>{
                console.log(nums.location)
                return accum+nums.location
            },0)
            setLocation(location/allListingReview.length)
            value = allListingReview.reduce((accum,nums) =>{
                console.log(nums.value)
                return accum+nums.value
            },0)
            setValue(value/allListingReview.length)
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
                    <p className='stats SingleList-reviews_stats_rating'>
                        &#11088; {((clean+communication+checkIn+accuracy+location+value)/6).toFixed(2)} {`(${allListingReview.length} reviews)`}
                    </p>
                    <p className='stats SingleList-reviews_stats_cleanliness'>CLEANLINESS---{Math.ceil(clean)}</p>
                    <p className='stats SingleList-reviews_stats_communication'>COMMUNICATION---{Math.ceil(communication)}</p>
                    <p className='stats SingleList-reviews_stats_checkin'>CHECKIN---{Math.ceil(checkIn)}</p>
                    <p className='stats SingleList-reviews_stats_accuracy'>ACCURACY---{Math.ceil(accuracy)}</p>
                    <p className='stats SingleList-reviews_stats_location'>LOCATION---{Math.ceil(location)}</p>
                    <p className='stats SingleList-reviews_stats_value'>VALUE---{Math.ceil(value)}</p>
                    <ReviewForm className='SingleList-ReviewForm' userId={id} listingId={listingId} />
                </div>

                <div>{allListingReview?.map((el) =>
                    <div key={el.id} >
                        <Review el={el} listingId={el.listingId}/>
                    </div>)}
                </div>

            </div>


            <div className='SingleList-reservation'>
                <Reservation userId={id} listingId={listingId}/>

            </div>

        </>
    )
}
  export default ListingPage;
