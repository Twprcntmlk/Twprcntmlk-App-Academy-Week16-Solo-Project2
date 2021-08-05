// frontend/src/components/Navigation/ProfileButton.js
import React,{ useEffect, useState} from "react"; // useEffect,,{ useState }
import { useDispatch, useSelector } from 'react-redux';//, useSelector
import { getReservations } from '../../store/reservations'; //,cancelReservation
import { findusers} from '../../store/user';
import { updateImage } from '../../store/user';


import { useParams } from 'react-router-dom';
import ReservationEditButton from '../Reservation/reservationEditButton';
import Messages from '../../components/Message/message';
import hostSplash from './images/hostPage.jpeg';
import "./UserPage.css";

function UserPage () {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState([]);

    const userState = useSelector(state => state.user);
    const user = Object.values(userState)[0];
    const reservationsState = useSelector(state => state.reservation);
    const reservations = Object.values(reservationsState);
    const allReservations = reservations.filter((el) => (el.userId === Number(id)))

    const updateFile = (e) => {
      const file = e.target.files[0];
      if (file) setImage(file);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      let newErrors = [];
      dispatch(updateImage({ image,id }))
        .then(() => {
          setImage(null);
        })
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            newErrors = data.errors;
            setErrors(newErrors);
          }
        });
        setImage(null)
    };

    useEffect(() => {
      dispatch(findusers(id))
      dispatch(getReservations(id));
        }, [dispatch, id])

  return (
    <div className="UserPage">
      <div className="UserPage-Container">
        <img className='UserPage-Container__Image'src={user?.imageUrl} alt="userPhoto" ></img>
        <div>
            {errors.length > 0 && errors.map((error) => <div key={error}>{error}</div>)}
          <form style={{ display: "flex", flexFlow: "column" }} onSubmit={handleSubmit}>
          <label>
            <input type="file" onChange={updateFile} />
          </label>
          <button type="submit">Upload Profile Picture</button>
          </form>
        </div>

        <div className="UserPage-Container__Info">
        <div>
          <h3>Hi! My Name is:</h3> {user?.firstName} {user?.lastName}
        </div>
        <div>
          <h3>I live at:</h3> {user?.address}
        </div>
        <div>
          <h3>My coordinates are :</h3> {user?.latitude},{user?.longitude}
        </div>
        <div>
          <h3>About me:</h3> {user?.personal}
        </div>
        <div>
          <h3>This Person is a Host:</h3> {`${user?.isHost}`}
        </div>
      </div >
      </div>
      <div className="UserPage-Container__Trips">
        {allReservations?.map((el, idx) =>
          <div className='UserPage-Reservation' key={idx}>
            <div> Check in Date-----{el.checkInDate}- </div>
            <div> Check out Date-----{el.checkOutDate} </div>
            <div> Number of Guests-----{el.guests} </div>
            <div>Name: {el.Listing.name}</div>
            <div>Address: {el.Listing.address}</div>
            <div>Baths: {el.Listing.baths}</div>
            <div>Bedrooms: {el.Listing.bedrooms}</div>
            <div>Total Price: {el.Listing.price*el.guests}</div>
            <div>Descrption: {el.Listing.description}</div>

            <div><ReservationEditButton el={el}/></div>
          </div>
          )}
      </div>
    </div>
  );
}

export default UserPage;
