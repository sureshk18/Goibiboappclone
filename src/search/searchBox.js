import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import "./search.css";
const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.city,
});
export default function SearchTextField(props) {
  const airports = props.data;
  const handleChange = (event, value) => {
    // setSelectAirport(value.iata_code);
    sendDataToParent(value.iata_code);
  };
  const sendDataToParent = (value) => {
    props.onSearchData(value);
  };
  return (
    <Autocomplete 
      id="filter-demo"
      options={airports}
      getOptionLabel={(option) =>
        `${option.city}, ${option.country} (${option.iata_code})`
      }
      filterOptions={filterOptions}
      renderOption={(props, option) => (
        <div {...props} >
          <FlightTakeoffIcon className="option-icon" />
          <div className="option-text-container">
            <h4 className="option-city-text">{`${option.city}, ${option.country} (${option.iata_code})`}</h4>
            <p className="option-airport-text">{option.name}</p>
          </div>
        </div>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          placeholder={props.placeholder}
          variant="outlined"
        />
      )}
      disableClearable
      onChange={handleChange}
      popupIcon={false}
    />
  );
}