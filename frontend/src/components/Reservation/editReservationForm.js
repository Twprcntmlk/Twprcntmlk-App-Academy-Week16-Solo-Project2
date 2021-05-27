// frontend/src/components/Navigation/ProfileButton.js
import React,{ useState } from "react"; // useEffect,
import { useDispatch } from 'react-redux';//, useSelector
import { editReservations } from '../../store/reservations';//getReviews, deleteReview,

function EditReservationForm ({Id,userId,listingId, toggleState}) {

  const dispatch = useDispatch();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuest] = useState(0);


  const updatedcheckInDate = (e) => setCheckInDate(e.target.value);
  const updatedcheckOutDate = (e) => setCheckOutDate(e.target.value);
  const updatedguest = (e) => setGuest(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      Id,
      userId,
      listingId,
      checkInDate,
      checkOutDate,
      guests
    };

    const editedReservation = await dispatch(editReservations(payload));
    if (editedReservation) {
     setCheckInDate('');
     setCheckOutDate('');

    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();

  };

  return (
    <section className="edit-form-holder centered middled" hidden={toggleState}>
    <form onSubmit={handleSubmit}>
      <input value={checkInDate} type='date' onChange={updatedcheckInDate}></input>
      <input value={checkOutDate} type='date' onChange={updatedcheckOutDate}></input>
      <input value={guests} type='number' onChange={updatedguest}></input>
      <button type="submit">Modify Reservations</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  </section>
  );
}

export default EditReservationForm;
