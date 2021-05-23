// frontend/src/components/Navigation/ProfileButton.js
import React,{ useState } from "react"; // useEffect,
import { useDispatch } from 'react-redux';//, useSelector
import { editReservations } from '../../store/reservations';//getReviews, deleteReview,

function EditReservationForm ({Id,userId,listingId, toggleState=true}) {

  const dispatch = useDispatch();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);


  const updatedcheckInDate = (e) => setCheckInDate(e.target.value);
  const updatedcheckOutDate = (e) => setCheckOutDate(e.target.value);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      Id,
      userId,
      listingId,
      checkInDate,
      checkOutDate,
    };
    console.log(payload)
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
      <button type="submit">Submit Review</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  </section>
  );
}

export default EditReservationForm;
