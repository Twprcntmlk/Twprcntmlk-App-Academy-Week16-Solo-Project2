// frontend/src/components/ListingPage/reiews.js
import React, { useState }from 'react';//useEffect,
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../store/reviews';//, editReview,getReviews,
import EditReviewForm from '../ReviewForm/editReviewForm';
import './SingleListingReview.css';



function Review({el, listingId}){
    const dispatch = useDispatch();
    const [toggleState, setToggleState] = useState(false);
    const {user} = useSelector(state => state.session);

    return(
    <section className="SingleReview_container">
        
        <div>
            {el.review}
        </div>
        <div className='rating'>
            <div >
                Cleanliness:{el.cleanliness}
            </div>
            <div >
                Communication:{el.communication}
            </div>
            <div >
                CheckIn:{el.checkIn}
            </div>
            <div >
                Accuracy:{el.accuracy}
            </div>
            <div >
                Location:{el.location}
            </div>
            <div >
                Value:{el.value}
            </div>
        </div>

        <div>
        <button className='delete-button' disabled={user && user.id === el.userId ? false : true} id={el.id} onClick={(e) =>  dispatch(deleteReview(e.target.id))}>Delete</button>
            <button className='edit-button' disabled={user && user.id === el.userId ? false : true} id={el.id} onClick={()=>setToggleState(!toggleState)}>Edit</button>
            {<EditReviewForm  Id={el.id} listingId={listingId} toggleState={toggleState} />}

        </div>

    </section>
    )
}
  export default Review;
