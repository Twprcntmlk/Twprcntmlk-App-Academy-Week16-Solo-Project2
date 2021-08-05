// frontend/src/components/Navigation/ProfileButton.js
import React,{ useState } from "react"; // useEffect,
import { useDispatch } from 'react-redux';//, useSelector
import {  editReview,} from '../../store/reviews';//getReviews, deleteReview,

function EditReviewForm ({Id,listingId, button,toggleState}) {

  const dispatch = useDispatch();

  const [review, setReview] = useState("");
  const [cleanliness, setCleanliness] = useState(null);
  const [communication, setCommunication] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [location, setLocation] = useState(null);
  const [value, setValue] = useState(null);

  const updateReview = (e) => setReview(e.target.value);
  const updateCleanliness = (e) => setCleanliness(e.target.value);
  const updateCommunication = (e) => setCommunication(e.target.value);
  const updateCheckIn = (e) => setCheckIn(e.target.value);
  const updateAccuracy= (e) => setAccuracy(e.target.value);
  const updateLocation = (e) => setLocation(e.target.value);
  const updateValue = (e) => setValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      Id,
      listingId,
      review,
      cleanliness,
      communication,
      checkIn,
      accuracy,
      location,
      value,
    };
    const editedReview = await dispatch(editReview(payload));
    if (editedReview) {
      setReview('');
      setCleanliness(null);
      setCommunication(null);
      setCheckIn(null);
      setAccuracy(null);
      setLocation(null);
      setValue(null);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="edit-form-holder centered middled" hidden={Id===button?toggleState:!toggleState}>
      <form onSubmit={handleSubmit}>
        <textarea value={review} placeholder='write your review here...' onChange={updateReview}></textarea>
        <input value={cleanliness} placeholder="cleanliness"type='number' onChange={updateCleanliness }></input>
        <input value={communication} placeholder="communication"type='number' onChange={updateCommunication}></input>
        <input value={checkIn} placeholder="check in"type='number' onChange={updateCheckIn}></input>
        <input value={accuracy} placeholder="accuracy"type='number' onChange={updateAccuracy}></input>
        <input value={location} placeholder="location"type='number' onChange={updateLocation}></input>
        <input value={value} placeholder="value"type='number' onChange={updateValue}></input>
        <button type="submit">Submit Review</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
}

export default EditReviewForm;
