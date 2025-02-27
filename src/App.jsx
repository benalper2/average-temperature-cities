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
  const [tickbox, setTickbox] = useState();
  const [tickIndex, setTickIndex] = useState();

  const [monthToggles, setMonthToggles] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

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
        <div style={{ fontSize: 25, fontWeight: "bold" }}>Min</div>
        <input
          style={{ fontSize: 25, fontWeight: "bold" }}
          id="searchbar"
          className="search"
          type="text"
          placeholder="Min.."
          onKeyDown={handleKeyDownMin}
        />
        <div style={{ fontSize: 25, fontWeight: "bold" }}>Max</div>
        <input
          style={{ fontSize: 25, fontWeight: "bold" }}
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
            monthToggles={monthToggles}
            tickbox={tickbox}
            tickIndex={tickIndex}
          />
        </div>
        <div>
          <MonthList
            CityID={CityID}
            cityRow={cityRow}
            setMonthToggles={setMonthToggles}
            monthToggles={monthToggles}
            setTickbox={setTickbox}
            setTickIndex={setTickIndex}
          />
        </div>
      </div>
    </>
  );
}
