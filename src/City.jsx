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
  WorldScrollY,
  renderCount,
}) {
  var x = Math.round((-1 * (long * 1200)) / 363 + 595 - WorldScrollX);
  // var y = Math.round((-1 * (lat * 604)) / 183 + 465);
  // var y = Math.round(
  //   (-1 * (lat * 604)) / 183 + 298 + WorldImgY + window.scrollY
  // );
  var y = Math.round((-1 * (lat * 604)) / 183 + 298 - WorldScrollY + 33);
  var imgScreenRatio = (window.innerWidth - 150) / 1200;
  // console.log("firstRender: " + firstRender);
  // console.log("renderCount: " + renderCount);
  if (renderCount < 2) {
    // console.log("renderCount2: " + renderCount);
    x = Math.round(
      (-1 * (long * 1215 * imgScreenRatio)) / 363 +
        600 * imgScreenRatio -
        WorldScrollX
    );
    y = Math.round(
      (-1 * (lat * 604 * imgScreenRatio)) / 183 +
        298 * imgScreenRatio -
        WorldScrollY +
        33
    );
  }

  var leftx = x + "px";
  var topy = y + "px";
  // var showBool = x > WorldImgX ? false : true; //???
  var showBool = true;
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
