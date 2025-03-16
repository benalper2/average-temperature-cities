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
    if (isNaN(event.target.value) || event.target.value === "") {
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
    console.log("window.innerWidth: " + window.innerWidth);
    console.log("Type is " + typeof event.target.value);
    if (isNaN(event.target.value) || event.target.value === "") {
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
      } else if (num === 0) {
        console.log("Zero and Backspace: " + event.key);
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

      <div className="topbar">
        {/* topbar column1 */}
        <div className="topbar-center">
          <div className="topbar-div">&nbsp;&nbsp;</div>
          {/* topbar column2 */}
          <input
            id="searchbar"
            className="input"
            type="text"
            placeholder="Min Temp"
            onChange={handleKeyDownMin}
            // onKeyDown={handleKeyDownMin}
          />
          {/* topbar column3 */}
          <div className="topbar-div">&nbsp;&nbsp;</div>
          {/* topbar column4 */}
          <input
            id="searchbar"
            className="search"
            type="text"
            placeholder="Max Temp"
            // onKeyDown={handleBackspaceMax}
            onChange={handleKeyDownMax}
          />
        </div>
        <button className="topbar-filter-button">Filters</button>
      </div>
      <div className="sidebar-footer">
        <div className="City-Name">
          {cityRow && (
            <div className="List-Title">
              {cityRow[1]}
              <br />
              {cityRow[2]}
            </div>
          )}
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
