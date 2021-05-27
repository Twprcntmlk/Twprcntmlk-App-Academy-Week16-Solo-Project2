// frontend/src/components/Navigation/ProfileButton.js
import React,{ useEffect} from "react"; // useEffect,,{ useState }
import { useDispatch, useSelector } from 'react-redux';//, useSelector
import { getReservations } from '../../store/reservations'; //,cancelReservation
import { findusers} from '../../store/user';
import { useParams } from 'react-router-dom';
import ReservationEditButton from '../Reservation/reservationEditButton';
import Messages from '../../components/Message/message';
import hostSplash from './images/hostPage.jpeg';
import "./UserPage.css";

function UserPage () { //will probably need to pass id
    const { id } = useParams();
    const dispatch = useDispatch();

    const userState = useSelector(state => state.user);
    const user = Object.values(userState)[0];

    const reservationsState = useSelector(state => state.reservation);
    const reservations = Object.values(reservationsState);
    const allReservations = reservations.filter((el) => (el.userId === Number(id)))

    useEffect(() => {
      dispatch(findusers(id))
      dispatch(getReservations(id));
        }, [dispatch, id])




  return (
    <>
      <div>

        {allReservations?.map((el) =>
        <div className='UserPage-Reservation'>
        <div key={el.id}>{el.checkInDate}-----{el.checkOutDate} Number of Guests-----{el.guests}
        {el.Listings}
        </div>
          <ReservationEditButton el={el}/>

        </div>
         )}
        <div>
            <Messages />
        </div>


        <div className="UserBlock_holder">
        <img src={user?.imageUrl} alt="userPhoto" ></img>
        <div className="UserBlock">
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
        </div>
        </div>
      </div>

      <section>
       <div className="User-page">
         <div className="User-splash">
             <img src={hostSplash} alt="splash2"/>

           <div className="User-title">
             <h1 className ="User-title_title">A space to share, a world to gain </h1>
             <h3 className ="User-title_span">Hosting can help you turn your extra space into extra income and pursue more of what you love.</h3>
             <div className="User-button_div">
               <button className="User-button_Button">Get Hosting</button>
             </div>
           </div>
         </div>
       </div>
      </section>
    </>
  );
}

export default UserPage;
