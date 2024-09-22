import "./App.css";
import "./styles.css";
import React from "react";

import WorldMap from "./WorldMap";

import MonthList from "./MonthList";
import { useState, useEffect } from "react";

export default function App() {
  const [CityID, setCityID] = useState();
  const [cityRow, setCityRow] = useState([]);
  const [minTemp, setMinTemp] = useState(-99);
  const [maxTemp, setMaxTemp] = useState(99);

  const handleKeyDownMin = (event) => {
    if (event.key === "Enter") {
      console.log("Type is " + typeof event.target.value);
      if (isNaN(event.target.value)) {
        setMinTemp(-99);
        console.log("NaN");
      } else {
        let num = Number(event.target.value);
        if (num < -99) {
          console.log("Less than -99");
        } else if (num > 99) {
          console.log("More than 99");
        } else if (num > maxTemp) {
          console.log("More than MaxTemp");
        } else {
          console.log("do validate " + num);
          setMinTemp(num);
        }
      }
    }
  };

  const handleKeyDownMax = (event) => {
    if (event.key === "Enter") {
      console.log("Type is " + typeof event.target.value);
      if (isNaN(event.target.value)) {
        setMaxTemp(99);
        console.log("NaN");
      } else {
        let num = Number(event.target.value);
        console.log("num is:  " + num);
        if (num < -99) {
          console.log("Less than -99");
        } else if (num > 99) {
          console.log("More than 99");
        } else if (num < minTemp) {
          console.log("Less than MaxTemp");
        } else {
          console.log("do validate " + num);
          setMaxTemp(num);
        }
      }
    }
  };

  return (
    <>
      <div>
        <h1>Average Monthly Temperatures</h1>
        {/* <p className="read-the-docs">Create a map</p> */}
      </div>

      <div className="four-columns-min-max-filter">
        <div>All months average temperature in Celcius</div>
        <div>Min</div>
        <input
          id="searchbar"
          className="search"
          type="text"
          placeholder="Min.."
          onKeyDown={handleKeyDownMin}
        />
        <div>Max</div>
        <input
          id="searchbar"
          className="search"
          type="text"
          placeholder="Max.."
          onKeyDown={handleKeyDownMax}
        />
      </div>

      <div className="two-column-map-and-list">
        <div className="world">
          {/* <WorldMap coast_list={coast_list} /> */}
          <WorldMap
            setCityID={setCityID}
            setCityRow={setCityRow}
            minTemp={minTemp}
            maxTemp={maxTemp}
          />
        </div>
        <div>
          <MonthList CityID={CityID} cityRow={cityRow} />
        </div>
      </div>
    </>
  );
}
