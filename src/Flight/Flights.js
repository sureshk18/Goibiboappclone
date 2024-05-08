import "../styles/Flights.css";
import addvert from "../assests/addvert.jpg";
import background from "../assests/background.svg";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const OffersForYou = () => {
    const [userData, setUserData] = useState([]);
    const [showData, setShowData] = useState(false);
    const navigate = useNavigate()

    const Flights = async () => {
        try {
            const response = await axios.get('https://academics.newtonschool.co/api/v1/bookingportals/offers', {
                headers: {
                    projectId: 'ge5upq3e1s5h'
                }
            });
            const json = response.data;
            console.log(json.data.offers);
            setUserData(json.data.offers);
        } catch (err) {
            console.log('Error:', err);
        }

    };
    useEffect(() => {
        Flights()
    }, []);

    const searchFlight = () => {
        navigate('/searchFlight')
    }

    return (
        <section>
            <div className='flight-container container-margin'>
                <img className="bg-img" src={background} />
                <div className='basic-icon'>
                    <p> Book Domestic and International Flight Tickets</p>
                    <div className='search-container'>
                        <div className='radio-btn'>
                            <div>
                                <input type='radio' name='one-way' id='oneway' />
                                <label for='oneway'>One-way</label>
                            </div>
                            <div>
                                <input type='radio' name='one-way' id='roundtrip' />
                                <label for='roundtrip'>Round-trip</label>
                            </div>
                            <div>
                                <input type='radio' name='one-way' id='multicity' />
                                <label for='multicity'>Multi-city</label>
                            </div>
                        </div>
                        <div className="journeyinfo">
                            <TextField
                                id="outlined-multiline-flexible"
                                label="from"
                                placeholder="Enter city or airport"
                                multiline
                                maxRows={4}
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="to"
                                placeholder="Enter city or airport"
                                multiline
                                maxRows={4}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker />
                                </DemoContainer>
                            </LocalizationProvider>

                        </div>
                    </div>
                    <button className="fly flyt flight-search-btn" onClick={searchFlight}>SEARCH FLIGHTS</button>
                </div>
                <div className="add-first-some">
                    <img className="add_some_img" src={addvert} alt="other-image" />
                </div>
            </div >

        </section >
    )
}

export default OffersForYou;

{/* <div className='App'>
                {userData.map((offers, index) => (
                    <div key={index}>{offers._id} {offers.F1}</div>
                ))}


                https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"FLIGHTS"}
            </div> 
        
        
        
        
        
        
        
        
        
        <div className="sc-12foipm-14 sdlhvXDk">
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                            <div className="sc-12foipm-34 iHoHRr">
                                <div className="sc-12foipm-36 hFZOAX">
                                    <div className="sc-12foipm-16 wRKJm fswFld " style={{ width: '260px' }}>
                                        <span className="sc-12foipm-17 eBxhjL fswWidgetLabel">From</span>
                                        <p className="sc-12foipm-20 bhnHeQ">Enter city or airport</p>
                                    </div>
                                </div>

                                <div className="sc-12foipm-34 iHoHRr">
                                    <div className="sc-12foipm-36 jcFcyw">
                                        <div className="sc-12foipm-16 wRKJm fswFld" style={{ width: '260px', paddingLeft: '27px' }}>
                                            <span className="sc-12foipm-17 eBxhjL fswWidgetLabel">To</span>
                                            <p>Enter city or airport</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="sc-12foipm-34 iHoHRr">
                                    <div className="sc-12foipm-16 wRKJm fswFld " style={{ width: '142px' }}>
                                        <span className="sc-12foipm-17 eBxhjL fswWidgetLabel">Departure</span>
                                        <p className="sc-12foipm-18 cTPYom fswWidgetTitle">"21 Mar' 24"
                                            <span className="sc-12foipm-22 cUvQPq fswDownArrow"></span>
                                        </p>
                                        {/* <p className="sc-12foipm-19 heOORq">Thrusday</p> 
                                        </div>
                                        </div>
        
                                        <div className="sc-12foipm-34 iHoHRr">
                                            <div className="sc-12foipm-16 wRKJm fswFld " style={{ width: '142px' }}>
                                                <span className="sc-12foipm-17 eBxhjL fswWidgetLabel"> Return</span>
                                                <p className="sc-12foipm-23 iFkclr">Click to add a return flight for better discounts</p>
                                            </div>
                                        </div>
        
                                        <div className="sc-12foipm-34 imEUuQ">
                                            <div className="sc-12foipm-16 wRKJm fswFld" style={{ style: 'flex: 1 1 0%' }}>
                                                <span className="sc-12foipm-17 eBxhjL fswWidgetLabel">Travellers & Class</span>
                                                <p className="sc-12foipm-18 cTPYom fswWidgetTitle">1 Adult
                                                    <span className="sc-12foipm-22 cUvQPq fswDownArrow fswDownArrowTraveller"></span></p>
                                                <p className="sc-12foipm-19 heOORq">economy</p>
                                            </div>
                                        </div>
                                    </div>
        
                                </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        */}