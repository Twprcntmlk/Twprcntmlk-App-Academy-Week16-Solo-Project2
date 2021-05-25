// frontend/src/components/Navigation/ProfileButton.js
import React,{ useEffect} from "react"; // useEffect,,{ useState }
import { useDispatch, useSelector } from 'react-redux';//, useSelector
import { getReservations } from '../../store/reservations'; //,cancelReservation
import { findusers} from '../../store/user';
import { useParams } from 'react-router-dom';
import ReservationEditButton from '../UserPage/reservationEditButton';


function UserPage () { //will probably need to pass id
    const { id } = useParams();
    const dispatch = useDispatch();

    const userState = useSelector(state => state.user);

    const user = Object.values(userState)[0];

    const reservationsState = useSelector(state => state.reservation);
    const reservations = Object.values(reservationsState);
    const allReservations = reservations.filter((el) => (el.userId === Number(id)))
    console.log("ResState",reservationsState)
    console.log("UserState",userState)

    useEffect(() => {
      dispatch(findusers(id))
      dispatch(getReservations(id));
        }, [dispatch, id])




  return (
    <section >
        THIS IS USER PAGE
        {allReservations?.map((el) => <>
        <ReservationEditButton el={el}/>
        </>
         )}


          <div>
            <img src={user?.imageUrl} alt="userPhoto" ></img>
          </div>

          <div>
            {user?.firstName}
          </div>

          <div>
            {user?.lastName}
          </div>
          <div>
            {user?.address}
          </div>
          <div>
            {user?.latitude}
          </div>
          <div>
            {user?.longitude}
          </div>
          <div>
            {user?.personal}
          </div>
          <div>
            Host: {`${user?.isHost}`}
          </div>

    </section>
  );
}

export default UserPage;
