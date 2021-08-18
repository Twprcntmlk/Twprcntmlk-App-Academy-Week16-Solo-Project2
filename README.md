# Welcome to AirBnb Clone
by Stephen Choung

## Table of Contents
* [MVP Feature List](https://github.com/Twprcntmlk/App-Academy-Week16-Solo-Project/wiki/MVP-List)
* [Database Schema](https://github.com/Twprcntmlk/App-Academy-Week16-Solo-Project/wiki/Database-Schema)
* [Backend Routes](https://github.com/Twprcntmlk/App-Academy-Week16-Solo-Project/wiki/Backend-Routes)
* [Front End Routes](https://github.com/Twprcntmlk/App-Academy-Week16-Solo-Project/wiki/Frontend-Routes)

AirBnb Clone is a fullstack PERN app that lets the user explore rentals all around the world and book them

As noted above, AirBnb Clone is a fullstack PERN application. The majority of the application logic occurs within front end's Redux store and its interactions with the Google Maps Javascript API via the react-google-maps library. AirBnb Clone uses  pure css for styling components.

The backend serves the frontend, responds to frontend requests, and fetches data from the Postgres database.

## Frontend Overview
AirBnb Clone is very frontend heavy application. It makes extensive use of 3rd-party APIs and resources to create a dynamic and data-rich experience. Below are the frontend technologies that make this application possible.

### Frontend Technologies Used:
#### React
At its core, AirBnb Clone is a React application. It uses very little of the core React library besides passing a few props, but makes extensive use of the technologies and libraries of the React ecosystem. Without the robust and well-documented React ecosystem, creating AirBnb Clone would have been a substantially more challenging enterprise.

#### Redux
Redux and the react-redux library were used to manage application state and make fetch requests to the server for data.

All listing information is fetched on page load and kept in the Redux store. While this expensive operation lengthens the initial load time, it also allows for a snappy experience after that load.

Redux also stores and sets information about the user. By managing this state in Redux, it provides easy access to the information across components without prop threading. This was particularly important because there were so many components in the application, largely due to all the listings being individual components, that if too many components were re-rendering constantly because of state change it would cause significant performance issues or crash the application completely. Redux provided a relatively simple way to manage this point of complexity.

Redux also allows for a lot of extendibility if new features are to be implemented (additional feature wish-list discussed in conclusion).

## Google Maps Javascript API
The Google Maps Javascript API is absolutely essential to this project. Basically the entire frontend is built on top of the Google Maps API via the react-google-maps library. All artist information is rendered on a Google Map component as pins, and then displayed in custom stylized Infobox components.

The API has a truly robust feature set, of which this application just scratched the surface. However, with its scope also lie many bugs and other issues. Of particular pain throughout the development, were the Pins and Infobox components. For instance, to render the artist information on mobile devices, it required forgoing the Infobox component associated with the Pin of the large-screen version in favor of a different component positioned to the bottom of the screen. This change was necessary because the Infobox component has to have static position, while the mobile styling required positioning relative to the device window for easy use on smaller screen size.

## Backend Overview
AirBnb Clone uses an Express server with MongoDB as the database. Compared to the frontend, the backend of AirBnb Clone is fairly simple, with the server sending the front end to the client, receiving requests, and sending data to the frontend. Below are the backend technologies used with some notes regarding their implementation.

### Backend Technologies Used
####ExpressJS
Express was the natural choice for AirBnb Clone's server-side framework. The minimalism of Express lent itself to the very light-weight responsibilities of AirBnb Clone's server. The server is just a couple of routes and a connection to the database, with a few utilities to facilitate this.
Conclusion and Next Steps
Time to break the 4th wall. AirBnb Clone was a ton of fun to build. I'm a lifelong fan of hip-hop, so it was an amazing experience getting to combine that passion with my newer passion for coding.

This also marks the first time that I've built a fullstack app solo, and my first project of significant scope where I originated the idea and brought it into existence. AirBnb Clone has been an incredibly rewarding to create.

While making AirBnb Clone, I got to play with a whole bunch of new technologies and get better at even more. At the beginning of the project, I'd only learned React 2 weeks previous, and Redux 1 week before. I've come out of it stronger with both, and eager to continue getting better with React and creating cool stuff with the many amazing libraries and technologies of the React ecosystem.

This was also my first time using Postgres. I found it and the full PERN stack very smooth and well integrated, and now understand why it's so popular. I look forward to learning more about Postgre and build projects that have more robust backends than AirBnb Clone using it.

Next Steps: Next steps for AirBnb Clone may be found in the project todo list, where you can also find a somewhat exhaustive list of the tasks of the project development. And if you want to support this project financially, please make a contribution to Black Lives Matter instead.

Thanks for reading! ✌🏽

## Splash Page
<img src="./image/AirBnbSplashGif.gif" width=640px height=360px>
<li> Contains Navigation Bar</li>
<li>Sub-Links</li>
<li>Contains Footer</li>

## Main Pages: Listings Page and Individual Listings Pages
<img src="./image/AirBnbMainGIF.gif" width=640px height=360px>
<li>Can See All Listings</li>
<li>Can Search and Filter Listings</li>
<li>Can Make Reservations</li>
<li>Can Leave reviews</li>

## Users Page
<img src="./image/AirBnBHostPageGif.gif" width=640px height=360px>
<li>Can See Reservations</li>
<li>Can Update Profile</li>
