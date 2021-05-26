import React, { useEffect, useState }from 'react';//
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';
// import { getlistings } from '../../store/listings';
import './Listing.css';
import GoogleApiWrapper from '../GoogleMapApi/GoogleMapApi'
function Listing ({ list }) {
    const dispatch = useDispatch();
    const reviewsState = useSelector(state => state.reviews);
    const reviews = Object.values(reviewsState);
    const allListingReview = reviews.filter((review) => (review.listingId === Number(list.id)))

    let [photos, setPhoto]=useState([]);
    let [clean, setClean]=useState(0);
    let [communication, setCommunication]=useState(0);
    let [checkIn, setCheckIn]=useState(0);
    let [accuracy, setAccuracy]=useState(0);
    let [location, setLocation]=useState(0);
    let [value, setValue]=useState(0);

    useEffect(() => {
        dispatch(getReviews(list.id));
        }, [dispatch])

    useEffect(() => {
        setPhoto(list.Photos[0]);
        }, [list])

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
        }, [allListingReview,clean,communication,checkIn,accuracy,location,value, list.id])


    return (
        <div className='listings-main'>
            <div className='listing-photo'>
            <Link to={`/listings/${list.id}`}>
                {[photos].map((el) => <img key={el.id} className='photo'src={el.photo} alt="listy"></img>)}
            </Link>
            </div>
            <div className='listing-description'>

                <div className='listing-title_component'>
                    <p className='listing-name_parts'>Name---{list.name}</p>
                    <p className='listing-description_parts'>Description---{list.description}</p>
                </div>

                <div className='listing-description_component'>
                    <p className='listpart listing-address_parts'>Address---{list.address}</p>
                    <p className='listpart listing-guests_parts'># of Guests---{list.guests}</p>
                    <p className='listpart listing-bedrooms_parts'># of Bedrooms---{list.bedrooms}</p>
                    <p className='listpart listing-baths_parts'># of Baths---{list.baths}</p>
                </div>

                <div className='listing-ratings_parts'>
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

                <div className='listing-price_parts'>
                    <p>Price Per Night---${list.price}</p>
                </div>
                
                <div className="GoogleMaps">
                    <GoogleApiWrapper lat={list.latitude} lon={list.longitude}/>
                </div>
            </div>
        </div>
    )
}

export default Listing;
