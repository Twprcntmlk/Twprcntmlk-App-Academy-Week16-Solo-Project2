// frontend/src/components/Navigation/ProfileButton.js
import React,{ useState } from "react"; // useEffect,
import { useDispatch }  from 'react-redux';//, useSelector
import { addReview } from '../../store/reviews';

import './reviewform.css'

function ReviewForm ({listingId, userId}) { //will probably need to pass id userId,
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
      setCleanliness("");
      setCommunication("");
      setCheckIn("");
      setAccuracy("");
      setLocation("");
      setValue("");

    }

  };

  const handleCancelClick = (e) => {
    e.preventDefault();

  };

  return (
    <section className="reviewform">
      <form onSubmit={handleSubmit}>
        <textarea value={review} placeholder='write your review here...' onChange={updateReview}></textarea>
        <input value={cleanliness} type='number' placeholder="cleanliness" onChange={updateCleanliness }></input>
        <input value={communication} type='number' placeholder="communication" onChange={updateCommunication}></input>
        <input value={checkIn} type='number' placeholder="check in" onChange={updateCheckIn}></input>
        <input value={accuracy} type='number' placeholder="accuracy" onChange={updateAccuracy}></input>
        <input value={location} type='number' placeholder="location" onChange={updateLocation}></input>
        <input value={value} type='number' placeholder="value" onChange={updateValue}></input>
        <button type="submit">Submit Review</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
}

export default ReviewForm;
