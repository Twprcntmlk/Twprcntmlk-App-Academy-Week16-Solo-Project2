import { Link } from 'react-router-dom';
import './Listing.css';

function Listing ({ list }) {
    const photos=[list.Photos[0]]
    //get a single object and then put it back in a list to map*
    // {console.log("Array of objects",list.Photos)}
    return (
        <div className='listings-main'>
            <div className='listing-photo'>
            <Link to={`/listings/${list.id}`}>
                {photos.map((el) => <img className='photo'src={el.photo} alt="listy"></img>)}
            </Link>
            </div>
            <div className='listing-description'>
                <div className='listing-title_component'>
                    <p className='listing-name_parts'>Name---{list.name}</p>
                    <p className='listing-description_parts'>Description---{list.description}</p>
                </div>
                <div className className='listing-description_component'>
                    <p className='listing-address_parts'>Address---{list.address}</p>
                    <p className='listing-price_parts'>Price Per Night---${list.price}</p>
                    <p className='listing-guests_parts'># of Guests---{list.guests}</p>
                    <p className='listing-bedrooms_parts'># of Bedrooms---{list.bedrooms}</p>
                    <p className='listing-baths_parts'># of Baths---{list.baths}</p>
                    <p className='listing-coordinates_parts'>latitude:---{list.latitude},longitude:---{list.longitude}</p>
                </div>
            </div>
        </div>
    )
}

export default Listing;
