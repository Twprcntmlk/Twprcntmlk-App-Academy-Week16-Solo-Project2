import { Link } from 'react-router-dom';
// import './Listing.css';

function Listing ({ list }) {

    // console.log(list.Photos)
    const photos=list.Photos
    return (
        <div className='listing-main'>
            <Link className='listing-info' to={`/listings/${list.id}`}>
                {photos.map((el) => <img src={el.photo} alt="listy"></img>)}
            </Link>
            <div className='listing-description'>
                <p className='listing-name'>Name---{list.name}</p>
                <p className='listing-description'>Description---{list.description}</p>
                <p className='listing-address'>Address---{list.address}</p>
                <p className='listing-price'>Price Per Night---${list.price}</p>
                <p className='listing-guests'># of Guests---{list.guests}</p>
                <p className='listing-bedrooms'># of Bedrooms---{list.bedrooms}</p>
                <p className='listing-baths'># of Baths---{list.baths}</p>
                <p className='listing-coordinates'>latitude:---{list.latitude},longitude:---{list.longitude}</p>
            </div>

        </div>
      )
}
//<img className='listing-image' key={el} alt='' src={el.photo}/>
export default Listing;
