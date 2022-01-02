import React, { useEffect, useState }from 'react';//
import { Link, useHistory} from 'react-router-dom'; //, Redirect
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';
import { getlistings } from '../../store/listings';
import { getphotos } from '../../store/photo';
import GoogleApiWrapper from '../GoogleMapApi/GoogleMapApi'

import styles from './ListingCard.module.css';
import Slider from './slider.js'

function ListingCard ({ list }) {
    const dispatch = useDispatch();
    //////////////////////////////////////////
    let [clean, setClean]=useState(0);
    let [communication, setCommunication]=useState(0);
    let [checkIn, setCheckIn]=useState(0);
    let [accuracy, setAccuracy]=useState(0);
    let [location, setLocation]=useState(0);
    let [value, setValue]=useState(0);
//////////////////////////////////////////////////////
    const reviewsState = useSelector(state => state.reviews);
    const reviews = Object.values(reviewsState);
    const allListingReview = reviews.filter((review) => (review.listingId === Number(list.id)))
///////////////////////////////////////////////
    const PhotosState= useSelector(state => state.photos);
    const allphotos = Object.values(PhotosState);
    const OnePhoto = allphotos?.filter((el) => (el.listingId === list.id))
 ////////////////////////////////////////////////
    const listingsState = useSelector(state => state.listings);
    const listings = Object.values(listingsState)
 ////////////////////////////////////////////////
    useEffect(() => {
        dispatch(getlistings(list.id));
        dispatch(getReviews(list.id));
        dispatch(getphotos())
        }, [dispatch])

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

    return (
        <div className={styles.listingsMain}>

            <div className={styles.listingPhoto}>
                <Slider prop={OnePhoto} />
            </div>

            <a href={`/listings/${list.id}`} className={styles.listingDescription_link}>
            <div className={styles.listing_description}>

                <div className={styles.listing_title_component}>
                    <p className={styles.listing_name_parts}>Name---{list.name}</p>
                    <p className={styles.listing_description_parts}>Description---{list.description}</p>
                </div>

                <div className={styles.listing_description_component}>
                    <p className={styles.listpart, styles.listing_address_parts}>Address---{list.address}</p>
                    <p className={styles.listpart, styles.listing_guests_parts}># of Guests---{list.guests}</p>
                    <p className={styles.listpart, styles.listing_bedrooms_parts}># of Bedrooms---{list.bedrooms}</p>
                    <p className={styles.listpart, styles.listing_baths_parts}># of Baths---{list.baths}</p>
                </div>

                <div className={styles.listing_ratings_parts}>
                    <div>
                        Cleanliness: {Math.ceil(clean)}
                    </div>
                    <div>
                        Communication:{Math.ceil(communication)}
                    </div>
                    <div>
                        Check In:{Math.ceil(checkIn)}
                    </div>
                    <div>
                        Accuracy:{Math.ceil(accuracy)}
                    </div>
                    <div>
                        Location:{Math.ceil(location)}
                    </div>
                    <div>
                        Value:{Math.ceil(value)}
                    </div>
                </div>

                <div className={styles.listing_price_parts}>
                    <p>Price Per Night---$ {list.price}</p>
                </div>
            </div>
            </a>
            
            <div id={styles.GoogleMaps}>
                <GoogleApiWrapper  props={ listings } />
            </div>
        </div>
    )
}

export default ListingCard;
