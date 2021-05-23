// frontend/src/components/Navigation/ProfileButton.js
import React,{useEffect} from "react"; // useEffect,,{ useState }
import { useDispatch, useSelector } from 'react-redux';//, useSelector
import { getReservations } from '../../store/reservations';
import { useParams } from 'react-router-dom';

function UserPage () { //will probably need to pass id
    const { id } = useParams();
    const dispatch = useDispatch();
    const reservationsState = useSelector(state => state.reservation);
    const reservations = Object.values(reservationsState);

    const allReservations = reservations.filter((el) => (el.userId === Number(id)))
    console.log(allReservations)

    useEffect(() => {
        dispatch(getReservations(id));
        }, [dispatch])

  return (
    <section >
        THIS IS USER PAGE
        {allReservations?.map((el) => <div>THIS IS THE CHECKOUT AND CHECKIN FOR ONE RESERVATION{el.checkInDate}-----{el.checkOutDate}</div>)}
    </section>
  );
}

export default UserPage;
