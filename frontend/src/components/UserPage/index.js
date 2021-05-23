// frontend/src/components/Navigation/ProfileButton.js
import React,{ useEffect, useState} from "react"; // useEffect,,{ useState }
import { useDispatch, useSelector } from 'react-redux';//, useSelector
import { getReservations,cancelReservation } from '../../store/reservations';
import { useParams } from 'react-router-dom';
import EditReservationForm from '../Reservation/editReservationForm';
// import { editReservations } from '../../store/reservations';

function UserPage () { //will probably need to pass id
    const { id } = useParams();
    const dispatch = useDispatch();
    let [showEditForm, setShowEditForm]=useState(true);
    const reservationsState = useSelector(state => state.reservation);
    const reservations = Object.values(reservationsState);
    console.log(reservations)
    const allReservations = reservations.filter((el) => (el.userId === Number(id)))


    useEffect(() => {
        dispatch(getReservations(id));
        }, [dispatch, id])

  return (
    <section >
        THIS IS USER PAGE
        {allReservations?.map((el) => <>
        <div key={el.id}>{el.checkInDate}-----{el.checkOutDate}</div>
        <button id={el.id} onClick={()=> {dispatch(cancelReservation(el.id))}}>Delete</button>
        <button id={el.id} onClick={(e) => {setShowEditForm((prev)=>!prev)}}>Edit</button>
        <EditReservationForm Id={el.id} userId={id} listingId={el.listingId} toggleState={showEditForm}/>
        </>

        )}
    </section>
  );
}

export default UserPage;
