import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import FormRow from "./controls/FormRow";
import { Card } from "@mui/material";

const GeoLoaction = ({ register, setValue }) => {
  const [place, setPlace] = useState("");
  const handleSelect = async (value) => {

    try{
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    setPlace(value)
    setValue("lat", ll.lat);
    setValue("lng", ll.lng);
    setValue("place",value)
    }catch(error) {
      console.log(error)
    }
  };
  return (
    <div>
      <PlacesAutocomplete
        value={place}
        onChange={setPlace}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{position:"relative"}}>
            <FormRow
              LabelText="Place"
              
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}

              style={{width:"100%"}}
            />
            <Card

              className="autocomplete-dropdown-container"
              key={suggestions.index}
              sx={{position:"absolute" ,zIndex:"10",top:"10",padding:"8px"}}
            >
              {console.log(suggestions)}
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                    key={suggestion.placeId || index}
                  >
                    <div className="address">{suggestion.description}</div>
                  </div>
                );
              })}
            </Card>
          </div>
        )}
      </PlacesAutocomplete>
      <input type="hidden"   {...(register ? register('lat') : {})}  />
      <input type="hidden"   {...(register ? register("lng") : {})}  />
      <input type="hidden"   {...(register ? register("place") : {})}  />
    </div>
  );
};

export default GeoLoaction;
