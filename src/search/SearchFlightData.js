/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../search/SearchFlightData.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

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

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <div className="flight-list">
      {flightList.length > 0 ? (
        flightList.map(flight => (
          <Card key={flight._id} sx={{ margin: '20px', backgroundColor: 'lightblue' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Flight ID: {flight.flightID}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Airline: {flight.airline}
              </Typography>
              <Typography variant="body2">
                Source: {flight.source}
              </Typography>
              <Typography variant="body2">
                Destination: {flight.destination}
              </Typography>
              <Typography variant="body2">
                Departure Time: {flight.departureTime}
              </Typography>
              <Typography variant="body2">
                Arrival Time: {flight.arrivalTime}
              </Typography>
              <Typography variant="body2">
                Duration: {flight.duration} hours
              </Typography>
              <Typography variant="body2">
                Stops: {flight.stops}
              </Typography>
              <Typography variant="body2">
                Ticket Price: ₹{flight.ticketPrice}
              </Typography>
              <Typography variant="body2">
                Available Seats: {flight.availableSeats}
              </Typography>
              <Typography variant="body2">
                Amenities: {flight.amenities.join(', ')}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginTop: '20px' }}>
          No flights available.
        </Typography>
      )}
    </div>
  );
}

export default Search;
