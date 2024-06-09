import React, { useState, useEffect } from "react";
import "../index.css";
import './Flight.css';
// import Offers from "./Offers";
import SearchTextField from "../search/searchBox";
import { useNavigate } from "react-router-dom";
// import Search from "../search/SearchFlightData";



const Flight = () => {
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
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"Del","destination":"Bom"}&day=Mon`,
      {
        headers: { projectID: "9hpv8qj9o596" },
      }
    );
    const results = await response.json();
    console.log(results);
    handleFlightSearchData(results);
    setFlight(results.data.flights);
  };
  const fetchAirpots = async () => {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/bookingportals/airport",
      {
        headers: { projectID: "9hpv8qj9o596" },
      }
    );
    const results = await response.json();
    console.log(results);
    setAirports(results.data.airports);
  };
  const navigate = useNavigate();
  const Flight = () => {
    flightSearch();
    // navigate("/searchFlight")
    //transferring data to searchflight
    navigate("/searchFlight", {
      state: {
        airports: airports,
        sourceAirport: sourceAirport,
        destinationAirport: destinationAirport,
        day: day,
      },
    });
  };
  useEffect(() => {
    fetchAirpots();
    // Search();
  }, []);
  return (
    <>
      <div style={{ height: "350px" }}>
        <div className="header">
          <div className="domestic-text">
            Domestic and International Flights
          </div>
          <div className="content">
            <div className="content-data">
              <div className="content-data-top">
                <div>
                  <input
                    style={{ marginRight: "10px" }}
                    type="radio"
                    name="trip"
                  ></input>
                  One-way
                </div>
                <div>
                  <input
                    style={{ marginRight: "10px" }}
                    type="radio"
                    name="trip"
                  ></input>
                  Round-trip
                </div>
                <div>
                  <input
                    style={{ marginRight: "10px" }}
                    type="radio"
                    name="trip"
                  ></input>
                  Multi-city
                </div>
              </div>
              <div className="content-data-mid" >
                <div className="input-field" style={{ width: "65%", marginTop: '15px' }}>
                  <SearchTextField
                    label="From"
                    placeholder="Enter city or airport"
                    data={airports}
                    onSearchData={handleSourceAirport}
                  />
                </div>
                <div style={{ width: "65%", paddingLeft: "20px", marginTop: '15px' }}>
                  <SearchTextField
                    label="To"
                    placeholder="Enter city or airport"
                    data={airports}
                    onSearchData={handleDestinationAirport}
                  />
                </div>
                <div style={{ margin: '20px 2px -5 6px', marginTop: '15px'}}>
                  <input
                    style={{ width: '90%'}}
                    type="date"
                    id="dateInput"
                    value={selectedDate}
                    onChange={handleDateChange}
                    min={today}
                  />
                </div>
                {/* <div style={{ width: "20%", paddingLeft: "20px" }}>
                  <SearchTextField
                    label="Return"
                    placeholder="14 Feb'2024"
                    data={lastdate}
                    onSearchData={handleSourceAirport}
                  />
                </div> */}
              </div>
              <div className="content-data-lower">
                <div>
                  Select A<br />
                  Fare Type:
                </div>
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
          </div>
          <div className="search-flights" onClick={Flight}>
            SEARCH FLIGHTS
          </div>
          <div></div>
        </div>
      </div>
      <div style={{ width: "60%", margin: "0 auto" }}>
        <img
          className="img-item"
          src="https://platforms.makemytrip.com/contents/4ba44448-b8c2-468b-afc8-d9a208d23682"
        />
      </div>
      {/* <Offers /> */}

    </>
  );
};
export default Flight;