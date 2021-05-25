// frontend/src/components/ListingPage/index.js
import React, { useState }from 'react';//useEffect,
import { useParams } from 'react-router-dom';
import { useDispatch} from 'react-redux'; //, useSelector
import {cancelReservation } from '../../store/reservations'; // getReservations,
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
