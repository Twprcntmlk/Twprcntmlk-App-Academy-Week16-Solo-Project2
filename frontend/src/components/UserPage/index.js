// frontend/src/components/Navigation/ProfileButton.js
import React,{ useEffect, useState} from "react"; // useEffect,,{ useState }
import { useDispatch, useSelector } from 'react-redux';//, useSelector
import { getReservations,cancelReservation } from '../../store/reservations';
import { useParams } from 'react-router-dom';
import EditReservationForm from '../Reservation/editReservationForm';
// import { reservationEditButton } from '../../store/reservations';
import ReservationEditButton from '../UserPage/reservationEditButton';

function UserPage () { //will probably need to pass id
    const { id } = useParams();
    const dispatch = useDispatch();

    const reservationsState = useSelector(state => state.reservation);
    const reservations = Object.values(reservationsState);
    const allReservations = reservations.filter((el) => (el.userId === Number(id)))

    useEffect(() => {
        dispatch(getReservations(id));
        }, [dispatch, id])

  return (
    <section >
        THIS IS USER PAGE
        {allReservations?.map((el) => <>
        <ReservationEditButton el={el}/>


        </>

        )}
    </section>
  );
}

export default UserPage;
