import React, { useState, useEffect } from "react";
const Flightdetails = ({ id, airline, flightname }) => {
  const [details, setDetails] = useState(null);

  const detailsFlight = async () => {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/flight/${id}`, {
        headers: { projectID: "9hpv8qj9o596" }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch flight details");
      }
      const data = await response.json();
      setDetails(data.data);
    } catch (error) {
      console.error("Error fetching flight details:", error);
      // Handle error state if needed
    }
  };

  useEffect(() => {
    
    detailsFlight();
  }, [id]);
  if (!details) {
    return <p>Loading flight details...</p>;
  }
  return (
    <div className="flightDetailsOuter">
      <div className="flightDetailsInfo">
        <p className="hrtlCenter">
          <img className="bg-Properties" src={airline} alt="Airline Logo" />
          <span className="airlineHeadng">
            <font className="text-[#000000]">
              <b>{flightname}</b>
            </font>
            <font className="text-[#6D7278] text-sm mx-1">| {details.flightID}</font>
          </span>
          <span className="aircraftType">Airbus A321</span>
        </p>
        <div className="airlineInfo">
          <div className="airlineDTInfoCol">
            <p className="fontSize18">{details.departureTime}</p>
            <p className="fontSize12 text-xs">
              {new Date(details.date).toString().split(" ").slice(0, 4).join(" ")}
            </p>
            <font className="text-[#4A4A4A]">Terminal 2</font>
            <p className="text-xs">{details.source}, India</p>
          </div>
          <div className="airlineDtlDuration fontSize12">
            0{details.duration}
            <font className="text-[#757575]">h</font>
            <div className="fliStopsSep">
              <p className="fliStopsSepLine"></p>
            </div>
          </div>
          <div className="airlineDTInfoCol">
            <p className="fontSize18">{details.arrivalTime}</p>
            <p className="fontSize12 text-xs">
              {new Date(details.date).toString().split(" ").slice(0, 4).join(" ")}
            </p>
            <font className="text-[#4A4A4A]">Terminal 2</font>
            <p className=" text-xs">{details.destination}, India</p>
          </div>
          <div className="baggageInfo">
            <p className="appendBottom3">
              <span className="baggageInfoText">AMENITIES</span>
            </p>
            <ul>
              {details.amenities &&
                details.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Flightdetails;







