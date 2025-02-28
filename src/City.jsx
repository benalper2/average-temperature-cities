import "./styles.css";
import React from "react";
export default function City({
  id,
  long,
  lat,
  setCityID,
  cityRow,
  setCityRow,
}) {
  //props.id

  var x = Math.round((-1 * (long * 1200)) / 363 + 595);
  var y = Math.round((-1 * (lat * 604)) / 183 + 465);
  //console.log("long: " + long + "  lat: " + lat);

  var leftx = x + "px";
  var topy = y + "px";
  const stylep = { left: leftx, top: topy };

  const handleHover = () => {
    console.log("id: " + id + " long: " + long + "  lat: " + lat);
    setCityID(id);
    setCityRow(cityRow);
  };

  // console.log("leftx: " + leftx + "  topy: " + topy);
  return (
    <>
      <div className="circle" style={stylep} onClick={handleHover} />
    </>
  );
}

// var left = 5000 + 'px';
// var top = 5000 + 'px';
// var padding = 5000 + 'px';
// return (
//     <div id="bird" style={{padding, left, top,position:'absolute'}}/>
// )
