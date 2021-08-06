// frontend/src/components/LoginFormModal/LoginForm.js
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
// import * as sessionActions from "../../store/session";
// import { createReservation} from '../../store/session';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReservation} from '../../store/reservations';
import './reservationform.css';
let today = new Date().toLocaleDateString()

function ReservationForm({price, guests}) {
  console.log(today)
  const { id } = useParams()
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guest, setGuest] = useState(1);
  const [error, setError] = useState("");
  const [errorin, setErrorin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkOutDate < checkInDate){
      setErrorin("Checkin date must be before Checkout Date")
      setTimeout(() =>{setErrorin("")},1000)
    }

    else{
      setError("Confirmed")
      setTimeout(() =>{setError("")},1000)
      const payload={ userId:sessionUser.id , listingId:id, checkInDate, checkOutDate, guests:guest }
      return dispatch(createReservation(payload))
    }
  };

  useEffect(() => {
    if (checkInDate < today){
      setErrorin("Checkin date already past")
      setTimeout(() =>{setErrorin("")},1000)
    }
  },[checkInDate])

  return (
    <div className='Reservation_Form-Holder'>
      <form className='Reservation_Form' onSubmit={handleSubmit}>
        <label className='Reservation_Form-checkin'>
          <div>Check-In Date</div>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
          <div id="In-error">&nbsp;&nbsp;{errorin}</div>
        </label>
        <label className="Reservation_Form-checkout">
          <div>Check-Out Date</div>
          <div className="Reservation_Form-checkout--date">
            <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />

          </div>
        </label>

        <label>
          <div>Guests</div>
          <input
            type="number"
            value={guest}
            min="1"
            max={guests}
            onChange={(e) => setGuest(e.target.value)}
            required
          />
        </label>
        <button type="submit">Make Reservation</button>
      </form>
      <div className="Confirm-Box">
        <div>Total:----${price*Number(guest)}</div>
        <div id="Res-error">&nbsp;&nbsp;{error}</div>
      </div>
    </div>
  );
}

export default ReservationForm;
