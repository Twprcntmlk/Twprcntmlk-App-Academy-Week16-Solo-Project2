// frontend/src/components/Navigation/ProfileButton.js
import React,{ useEffect, useState} from "react"; // useEffect,,{ useState }
import { useDispatch, useSelector } from 'react-redux';//, useSelector
import { getReservations,cancelReservation } from '../../store/reservations';
import { findlistings} from '../../store/user';
import { useParams } from 'react-router-dom';
import EditReservationForm from '../Reservation/editReservationForm';
// import { reservationEditButton } from '../../store/reservations';
import ReservationEditButton from '../UserPage/reservationEditButton';


function UserPage () { //will probably need to pass id
    const { id } = useParams();
    const dispatch = useDispatch();

    const userState = useSelector(state => state.user);
    const user = Object.values(userState);
    const reservationsState = useSelector(state => state.reservation);
    const reservations = Object.values(reservationsState);
    const allReservations = reservations.filter((el) => (el.userId === Number(id)))

    useEffect(() => {
        dispatch(getReservations(id));
        dispatch(findlistings(id))
        }, [dispatch, id])
        console.log(user)



  return (
    <section >
        THIS IS USER PAGE
        {allReservations?.map((el) => <>
        <ReservationEditButton el={el}/>
        </>
         )}
        <div>
          <img src={user[0].imageUrl} alt="listy" ></img>
        </div>

        <div>
          {user[0].firstName}
        </div>
        <div>
          {user[0].lastName}
        </div>
        <div>
          {user[0].address}
        </div>
        <div>
          {user[0].latitude}
        </div>
        <div>
          {user[0].longitude}
        </div>
        <div>
          {user[0].personal}
        </div>
        <div>
          Host: {`${user[0].isHost}`}
        </div>
    </section>
  );
}

export default UserPage;
