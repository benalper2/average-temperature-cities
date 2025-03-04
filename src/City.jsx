import "./styles.css";
import React from "react";
export default function City({
  id,
  long,
  lat,
  setCityID,
  cityRow,
  setCityRow,
  ScreenHeight,
  WorldImgY,
  WorldImgX,
  WorldScrollX,
}) {
  var x = Math.round((-1 * (long * 1200)) / 363 + 595 - WorldScrollX);
  // var y = Math.round((-1 * (lat * 604)) / 183 + 465);
  var y = Math.round(
    (-1 * (lat * 604)) / 183 + 298 + WorldImgY + window.scrollY
  );

  var leftx = x + "px";
  var topy = y + "px";
  var showBool = x > WorldImgX ? false : true; //???
  const stylep = { left: leftx, top: topy };

  const handleHover = () => {
    console.log("id: " + id + " long: " + long + "  lat: " + lat);
    setCityID(id);
    setCityRow(cityRow);
  };

  // console.log("leftx: " + leftx + "  topy: " + topy);
  if (showBool) {
    return (
      <>
        <div className="circle" style={stylep} onClick={handleHover} />
      </>
    );
  }
}
