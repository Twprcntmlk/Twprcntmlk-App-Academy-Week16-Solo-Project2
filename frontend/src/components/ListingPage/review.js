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


function Review({el, listingId}){
    const dispatch = useDispatch();
    const [toggleState, setToggleState] = useState(true);
    const [showEditForm, setShowEditForm] = useState(null);

    return(
    <section>
        {el.review}Cleanliness:{el.cleanliness}Communication:{el.communication}CheckIn:{el.checkIn}Accuracy:{el.accuracy}Location:{el.location}Value:{el.value}
    <div>
        <button className='edit-button' id={el.id} onClick={()=>setToggleState(!toggleState)}>Edit</button>


        {<EditReviewForm Id={el.id} listingId={listingId} toggleState={toggleState} button={showEditForm}/>}


        <button className='delete-button' id={el.id} onClick={(e) =>  dispatch(deleteReview(e.target.id))}>Delete</button>
        {/* disabled={user && id === el.userId ? false : true} */}
    </div>
    </section>
    )
}
  export default Review;
