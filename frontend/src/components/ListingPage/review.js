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
    const [toggleState, setToggleState] = useState(false);
    const [showEditForm, setShowEditForm] = useState(null);
    const {user} = useSelector(state => state.session);
    console.log(user)
    console.log(el.userId)
    return(
    <section>
        <div>
            {el.review}
        </div>
        <div>
            <div>
                Cleanliness:{el.cleanliness}
            </div>
            <div>
                Communication:{el.communication}
            </div>
            <div>
                CheckIn:{el.checkIn}
            </div>
            <div>
                Accuracy:{el.accuracy}
            </div>
            <div>
                Location:{el.location}
            </div>
            <div>
                Value:{el.value}
            </div>
        </div>

        <div>
        <button className='delete-button' disabled={user && user.id === el.userId ? false : true} id={el.id} onClick={(e) =>  dispatch(deleteReview(e.target.id))}>Delete</button>
            <button className='edit-button' disabled={user && user.id === el.userId ? false : true} id={el.id} onClick={()=>setToggleState(!toggleState)}>Edit</button>
            {<EditReviewForm  Id={el.id} listingId={listingId} toggleState={toggleState} button={showEditForm}/>}

        </div>
    </section>
    )
}
  export default Review;
