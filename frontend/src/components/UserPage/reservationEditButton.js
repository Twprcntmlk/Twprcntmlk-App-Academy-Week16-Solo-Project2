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
import { getReservations,cancelReservation } from '../../store/reservations';
import EditReservationForm from '../Reservation/editReservationForm';


function ReservationEditButton({el}){
    const {id} =useParams()
    const dispatch = useDispatch();
    const [toggleState, setToggleState] = useState(true);

    return(
        <section>
            <div key={el.id}>{el.checkInDate}-----{el.checkOutDate}</div>
            <button id={el.id} onClick={()=> {dispatch(cancelReservation(el.id))}}>Delete</button>
            <button id={el.id} onClick={() => {setToggleState(!toggleState)}}>Edit</button>
            <EditReservationForm Id={el.id} userId={id} listingId={el.listingId} toggleState={toggleState}/>
        </section>
    )
}
  export default ReservationEditButton;
