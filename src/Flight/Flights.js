/* eslint-disable jsx-a11y/alt-text */
import "../styles/Flights.css";
import addvert from "../assests/addvert.jpg";
import background from "../assests/background.svg";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const OffersForYou = () => {
    const [airports, setAirports] = useState([]);
    const [flight, setFlight] = useState([]);
    const [day, setDay] = useState("");

    const [selectedDate, setSelectedDate] = useState("");

    const [sourceAirport, setSourceAirport] = useState("");
    const [destinationAirport, setDestinationAirport] = useState("");

    const today = new Date().toISOString().split("T")[0];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [flightSearchData, setFlightSearchData] = useState([]);


    const handleFlightSearchData = (fff) => {
        // handleCheckAirports(airport_name, destinationAirport);
        setFlightSearchData(fff);
        //console.log(flightSearchData);
        console.log(flight);
    };
    const handleSourceAirport = (airport_name) => {
        // handleCheckAirports(airport_name, destinationAirport);
        setSourceAirport(airport_name);
        console.log(sourceAirport);
    };

    const handleDestinationAirport = (airport_name) => {
        // handleCheckAirports(sourceAirport, airport_name);
        setDestinationAirport(airport_name);
        console.log(destinationAirport);
    };

    const handleDateChange = (event) => {
        console.log(event.target.value);
        setSelectedDate(event.target.value);
    };

    const flightSearch = async () => {
        const dateObject = new Date(selectedDate);

        const dayOfWeek = dateObject.getDay();
        const dayName = daysOfWeek[dayOfWeek];
        setDay(dayName);
        console.log("dayName =", day);
        console.log("soureceAirport =", sourceAirport);
        console.log("destination Airport =", destinationAirport);


        //     const response = await fetch(
        //         `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"DEL","destination":"BOM"}&day=Mon`,
        //         {
        //             headers: { projectID: "9hpv8qj9o596" },
        //         }
        //     );
        //     const results = await response.json();

        //     console.log(results);
        //     handleFlightSearchData(results);
        //     setFlight(results.data.flights);
    };

    // const fetchAirpots = async () => {
    //     const response = await fetch(
    //         "https://academics.newtonschool.co/api/v1/bookingportals/airport",
    //         {
    //             headers: { projectID: "projectid" },
    //         }
    //     );
    //     const results = await response.json();
    //     console.log(results);

    //     setAirports(results.data.airports);
    // };
    const navigate = useNavigate();

    const Flight = () => {
        // flightSearch();
        const sourceAirport = "DEL";
        const destinationAirport = "LKO";
        const day = "Mon";

        const path = `/searchFlight/source=${sourceAirport},destination=${destinationAirport},day=${day}`;

        navigate(path);
    };
    // state: {
    //     airports: airports,
    //     sourceAirport: sourceAirport,
    //     destinationAirport: destinationAirport,
    //     day: day,
    // },

    useEffect(() => {
        flightSearch();
    }, []);

    return (
        <section>
            <div className='flight-container container-margin'>
                <img className="bg-img" src={background} />
                <div className='basic-icon'>
                    <p> Book Domestic and International Flight Tickets</p>
                    <form>
                        <div className='search-container'>
                            <div className='radio-btn'>
                                <div>
                                    <input type='radio' name='one-way' id='oneway' defaultChecked />
                                    <label for='oneway'>One-way</label>
                                </div>
                                <div>
                                    <input type='radio' name='one-way' id='roundtrip' disabled />
                                    <label for='roundtrip'>Round-trip</label>
                                </div>
                                <div>
                                    <input type='radio' name='one-way' id='multicity' disabled />
                                    <label for='multicity'>Multi-city</label>
                                </div>
                            </div>
                            <div className="input-data">
                                <input
                                    // label="From"
                                    placeholder="DELHI"
                                    data={airports}
                                    onSearchData={handleSourceAirport}
                                    className="text-input"
                                />
                                <div className="leftRightArrow">
                                    <CompareArrowsIcon />
                                </div>
                                <input style={{ alignItems: 'center' }}
                                    // label="From"
                                    placeholder="MUMBAI"
                                    data={airports}
                                    onSearchData={handleSourceAirport}
                                    className="text-input"
                                />

                                <input type="date"
                                    id="dateInput"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    min={today} />

                                <div className="travellers">
                                    {/* <span className="t-class">travellers & Class</span> */}
                                    <div className="mainnn">1 Adult / Economy
                                    </div>
                                </div>
                            </div>



                            <div className="content-data-lower">
                                {/* <div>
                                    Select A<br />
                                    Fare Type:
                                </div> */}
                                <div className="profession">
                                    <input
                                        style={{ marginRight: "5px" }}
                                        type="radio"
                                        name="profession"
                                    ></input>
                                    Regular
                                </div>
                                <div className="profession">
                                    <input
                                        style={{ marginRight: "5px" }}
                                        type="radio"
                                        name="profession"
                                    ></input>
                                    Armed Forces
                                </div>
                                <div className="profession">
                                    <input
                                        style={{ marginRight: "5px" }}
                                        type="radio"
                                        name="profession"
                                    ></input>
                                    Senior Citizen
                                </div>
                                <div className="profession">
                                    <input
                                        style={{ marginRight: "5px" }}
                                        type="radio"
                                        name="profession"
                                    ></input>
                                    Student
                                </div>
                                <div className="profession">
                                    <input
                                        style={{ marginRight: "5px" }}
                                        type="radio"
                                        name="profession"
                                    ></input>
                                    Doctors & Nurses
                                </div>
                            </div>
                        </div>
                        <button className="searchflight" onClick={Flight}>SEARCH FLIGHTS</button>
                    </form>
                </div>
                < div className="add-first-some" >
                    <img className="add_some_img" src={addvert} alt="other-image" />
                </div >
            </div >

        </section >
    )
}

export default OffersForYou;
