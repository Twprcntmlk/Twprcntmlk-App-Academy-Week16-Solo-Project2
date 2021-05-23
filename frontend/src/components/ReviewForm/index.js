// frontend/src/components/Navigation/ProfileButton.js
import React,{ useState } from "react"; // useEffect,
import { useDispatch } from 'react-redux';//, useSelector
import { addReview } from '../../store/reviews';

function ReviewForm ({userId, listingId}) { //will probably need to pass id
  const dispatch = useDispatch();

  const [review, setReview] = useState("");
  const [cleanliness, setCleanliness] = useState(0);
  const [communication, setCommunication] = useState(0);
  const [checkIn, setCheckIn] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [location, setLocation] = useState(0);
  const [value, setValue] = useState(0);

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
      userId,
      listingId,
      review,
      cleanliness,
      communication,
      checkIn,
      accuracy,
      location,
      value,
    };

    const addedReview = await dispatch(addReview(payload));
    if (addedReview) {
      setReview('');
      setCleanliness(0);
      setCommunication(0);
      setCheckIn(0);
      setAccuracy(0);
      setLocation(0);
      setValue(0);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();

  };

  return (
    <section className="edit-form-holder centered middled">
    <form onSubmit={handleSubmit}>
      <textarea value={review} placeholder='write your review here...' onChange={updateReview}></textarea>
      <input value={cleanliness} type='number' onChange={updateCleanliness }></input>
      <input value={communication} type='number' onChange={updateCommunication}></input>
      <input value={checkIn} type='number' onChange={updateCheckIn}></input>
      <input value={accuracy} type='number' onChange={updateAccuracy}></input>
      <input value={location} type='number' onChange={updateLocation}></input>
      <input value={value} type='number' onChange={updateValue}></input>
      <button type="submit">Submit Review</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  </section>
  );
}

export default ReviewForm;
