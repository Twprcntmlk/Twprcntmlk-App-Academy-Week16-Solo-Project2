// frontend/src/components/Navigation/ProfileButton.js
import React,{ useEffect} from "react"; // useEffect,,{ useState }
import { useDispatch, useSelector } from 'react-redux';//, useSelector
import { getReservations,cancelReservation } from '../../store/reservations';
import { useParams } from 'react-router-dom';

function UserPage () { //will probably need to pass id
    const { id } = useParams();
    const dispatch = useDispatch();
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
        </>
        )}
    </section>
  );
}

export default UserPage;
