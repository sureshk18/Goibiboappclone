/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../search/SearchFlightData.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import BasicModal from '../search/FareData';

function Search() {
  const [flightList, setFlightList] = useState([]);
  const { searchedData } = useParams();
  const params = searchedData.split(',');
  const sourceAirport = params[0].split('=')[1];
  const destinationAirport = params[1].split('=')[1];
  const day = params[2].split('=')[1];

  const fetchFlights = async () => {
    try {
      const response = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${sourceAirport}","destination":"${destinationAirport}"}&day=${day}`, {
        headers: {
          projectId: 'ge5upq3e1s5h'
        }
      });
      const json = response.data;
      console.log(json.data.flights); // Corrected from `json.data.offers`
      setFlightList(json.data.flights); // Corrected from `json.data.offers`
    } catch (err) {
      console.log('Error:', err);
    }
  };

  const navigate = useNavigate();
  const fare = () => {
    // BasicModal();
    
    return navigate('/faredata');
  }

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <>
      <div className='search-data'>
      </div>
      <div className="flight-list">
        {flightList.length > 0 ? (
          flightList.map(flight => (
            <div key={flight._id} style={{ marginTop: '-1rem', className: 'flight-data', width: '80%', marginLeft: '20%' }}>
              <CardContent style={{ marginTop: '0.5rem' }}>
                <div className='flight-data'><Typography variant="p" component="div">
                  <h1 >Flight ID:</h1>
                  <h6>{flight.flightID}</h6>
                </Typography>
                  {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <h4>Airline:</h4> {flight.airline}
              </Typography> */}
              {/* <Typography variant="body2">
                Source: {flight.source}
              </Typography>
              <Typography variant="body2">
                Destination: {flight.destination}
              </Typography> */}
                  <Typography variant="body2">
                    <h3 className='map-data'>Departure Time:</h3>
                    {flight.departureTime}
                  </Typography>
                  <Typography variant="body2">
                    <h3 className='map-data'>Arrival Time: </h3>{flight.arrivalTime}
                  </Typography>
                  <Typography variant="body2">
                    <h3 className='map-data'>Duration:</h3> {flight.duration} hours
                  </Typography>
                  <Typography variant="body2">
                    <h3 className='map-data'> Stops: </h3>{flight.stops}
                  </Typography>
                  <Typography variant="body2">
                    <h3 className='map-data'>Ticket Price:</h3> <b>₹ : </b> {flight.ticketPrice}
                  </Typography>
                  {/* <Typography variant="body2">
                Available Seats: {flight.availableSeats}
              </Typography>
              <Typography variant="body2">
                Amenities: {flight.amenities.join(', ')}
              </Typography> */}
                  <div ><button className='view-btn' onClick={fare}>VIEW FARES</button></div>
                </div>

              </CardContent>

            </div>

          ))
        ) : (
          <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginTop: '20px' }}>
            No flights available.
          </Typography>
        )}
      </div>
    </>

  );
}

export default Search;
