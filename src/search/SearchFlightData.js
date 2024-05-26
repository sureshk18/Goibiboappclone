/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../search/SearchFlightData.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { yellow } from '@mui/material/colors';


function Search() {
  const [flightlist, setFlightlist] = useState([]);

  const Flights = async () => {
    try {
      const response = await axios.get(`https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"FLIGHTS"}`, {
        headers: {
          projectId: 'ge5upq3e1s5h'
        }
      });
      const json = response.data;
      console.log(json.data.offers);
      setFlightlist(json.data.offers);
    } catch (err) {
      console.log('Error:', err);
    }

  };
  useEffect(() => {
    Flights()
  }, []);
 
  return (
    <div style={{ padding: '90px' }}>
      <div class="card">
      
        {flightlist&&flightlist.map((offers)=>{
        return(
          <div key={offers.id} style={{marginBottom:'90px'}}>
            {/* <p>{offers.ctaText}</p> */}
          </div>
        )
      })}
        
      </div>
      <div>
        <Card
          sx={{ minWidth: 275, minHeight: 174, marginTop: 3}}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {flightlist&&flightlist.map((offers)=>{
        return(
          <div key={offers.id} style={{marginBottom:'90px'}}>
            <p>{offers.id}</p>
            <p>{offers.ticketPrice}</p>
            <p>{offers.pTx}</p>
          </div>
        )
      })}
            </Typography>
          </CardContent>
        </Card>
      </div>

      {/* <div>
        <Card
          sx={{ minWidth: 275, minHeight: 274, marginTop: 3, backgroundColor: yellow }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Card 2
            </Typography>
          </CardContent>
        </Card>
      </div> */}
      
    </div>
  )
}

export default Search



