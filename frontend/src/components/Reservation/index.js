// frontend/src/components/Navigation/ProfileButton.js
import React from "react"; // useEffect,{ useState }
// import { useDispatch } from 'react-redux';//, useSelector
// import { addReview } from '../../store/reviews';
// import 'react-dates/initialize';
// import { DateRangePicker} from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import './reservations.css';

function ReservationForm ({userId, listingId}) { //will probably need to pass id
  // const pokeTypes = useSelector(state => state.pokemon.types);
  // const dispatch = useDispatch();

  // const [checkInDate, setcheckInDate] = useState("");
  // const [checkOutDate, setcheckOutDate] = useState("");
  // const [startDate, setStartDate] = useState('2021-05-01');
  // const [endDate, setendDate] = useState('2021-06-30');
  // const [createdAt, setCreatedAt] = useState(new Date());

//   const updateReview = (e) => setReview(e.target.value);
//   const updateCleanliness = (e) => setCleanliness(e.target.value);
//   const updateCommunication = (e) => setCommunication(e.target.value);
//   const updateCheckIn = (e) => setCheckIn(e.target.value);
//   const updateAccuracy= (e) => setAccuracy(e.target.value);
//   const updateLocation = (e) => setLocation(e.target.value);
//   const updateValue = (e) => setValue(e.target.value);
  // const updateCreatedAt= (e) => setCreatedAt(e.target.value);

  // useEffect(() => {
  //   dispatch(getPokemonTypes());
  // }, [dispatch]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const payload = {
    //   userId,
    //   listingId,
    //   review,
    //   cleanliness,
    //   communication,
    //   checkIn,
    //   accuracy,
    //   location,
    //   value,
    // };

  //   const addedReview = await dispatch(addReview(payload));
  //   if (addedReview) {
  //   //   setReview('');
  //   //   setCleanliness(0);
  //   //   setCommunication(0);
  //   //   setCheckIn(0);
  //   //   setAccuracy(0);
  //   //   setLocation(0);
  //   //   setValue(0);
  //   }
  // };

  // const handleCancelClick = (e) => {
  //   e.preventDefault();

  // };

  return (
    <section className="edit-form-holder centered middled">
      THIS IS THE DATE RANGE AND ADDING RES COMPONENT
        {/* <DateRangePicker
  startDate={startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/> */}
    {/* <form onSubmit={handleSubmit}>
      <textarea value={review} placeholder='write your review here...' onChange={updateReview}></textarea>
      <input value={cleanliness} type='number' onChange={updateCleanliness }></input>
      <input value={communication} type='number' onChange={updateCommunication}></input>
      <input value={checkIn} type='number' onChange={updateCheckIn}></input>
      <input value={accuracy} type='number' onChange={updateAccuracy}></input>
      <input value={location} type='number' onChange={updateLocation}></input>
      <input value={value} type='number' onChange={updateValue}></input>
      <button type="submit">Submit Review</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
    </form> */}
  </section>
  );
}

export default ReservationForm;
