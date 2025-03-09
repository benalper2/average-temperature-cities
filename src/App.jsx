import "./styles.css";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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

  // const el = document.querySelector(".world");
  // let scale = 1;

  // useEffect(() => {
  //   if (el) {
  //     el.addEventListener("wheel", zoom, { passive: false });
  //   }
  //   return () => {
  //     window.removeEventListener("wheel", zoom);
  //   };
  // }, []);

  // const zoom = (event) => {
  //   event.preventDefault();
  //   console.log("zoom event:" + event);
  //   scale += event.deltaY * -0.01;
  //   console.log("event.deltaY:" + event.deltaY);
  //   // Restrict scale
  //   scale = Math.min(Math.max(0.125, scale), 4);

  //   // Apply scale transform
  //   el.style.transform = `scale(${scale})`;
  // };

  const handleKeyDownMin = (event) => {
    // if (event.key === "Enter") {
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
    // }
  };

  const handleKeyDownMax = (event) => {
    // if (event.key === "Enter") {
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
    // }
  };

  return (
    <>
      {/* <div>
        <h1>Average Monthly Temperatures</h1>
       </div> */}

      <div className="four-columns-min-max-filter">
        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "darkblue",
            marginTop: "5px",
            textAlign: "center",
          }}>
          Average temperature °C
        </div>
        {/* <div style={{ fontSize: 25, fontWeight: "bold" }}>Min</div> */}
        <input
          style={{ fontSize: 20, fontWeight: "bold" }}
          id="searchbar"
          className="search"
          type="text"
          placeholder="Min"
          onChange={handleKeyDownMin}
          // onKeyDown={handleKeyDownMin}
        />
        {/* <div style={{ fontSize: 25, fontWeight: "bold" }}>Max</div> */}
        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: "5px",
            textAlign: "center",
          }}>
          &nbsp;to&nbsp;
        </div>

        <input
          style={{ fontSize: 20, fontWeight: "bold" }}
          id="searchbar"
          className="search"
          type="text"
          placeholder="Max"
          // onKeyDown={handleKeyDownMax}
          onChange={handleKeyDownMax}
        />
      </div>
      <div className="City-Name">
        {cityRow && (
          <div className="List-Title">
            {cityRow[1]}&nbsp;{cityRow[2]}
          </div>
        )}
      </div>
      <div className="CityName-Months">
        <MonthList
          CityID={CityID}
          cityRow={cityRow}
          setMonthToggles={setMonthToggles}
          monthToggles={monthToggles}
          setTickbox={setTickbox}
          setTickIndex={setTickIndex}
        />
      </div>

      {/* <div className="two-column-map-and-list"> */}
      <TransformWrapper
        limitToBounds={false} // Allows free movement
        centerContent={false} // Prevents auto-centering
        minScale={1} // Prevents zooming out too much
        maxScale={5} // Limits zoom-in level
      >
        <TransformComponent>
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
        </TransformComponent>
      </TransformWrapper>
      {/* </div> */}
    </>
  );
}
