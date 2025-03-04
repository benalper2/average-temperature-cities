import { useEffect, useState } from "react";
import world from "./assets/Equirectangular_projection_SWtrim1.jpg";
import City from "./City.jsx";

export default function WorldMap({
  setCityID,
  setCityRow,
  minTemp,
  maxTemp,
  monthToggles,
  tickbox,
  tickIndex,
}) {
  //const [text, setText] = useState();
  const [CityTemps2, setCityTemps2] = useState([]);
  const [ScreenWidth, setScreenWidth] = useState([]);
  const [ScreenHeight, setScreenHeight] = useState([]);
  const [WorldImgY, setWorldImgY] = useState([]);
  const [WorldImgX, setWorldImgX] = useState([]);
  const [WorldScrollX, setWorldScrollX] = useState([]);

  let textLines;
  var CityTemps = [];
  var FilteredTemps = [];
  var KeepRow;

  useEffect(() => {
    fetch("./data.csv")
      .then((response) => response.text())
      .then((responseText) => {
        //setText(responseText);
        console.log(
          "minTemp: " +
            minTemp +
            "maxTemp: " +
            maxTemp +
            " monthToggles: " +
            monthToggles +
            " typeof monthToggles[0]: " +
            typeof monthToggles[0] +
            " tickbox: " +
            tickbox +
            " tickIndex: " +
            tickIndex
        );

        if (responseText !== undefined) {
          textLines = responseText.split(/\r\n|\n|\r/);
          //console.log("text.split");
        }
        if (textLines !== undefined) {
          for (var i = 0; i < textLines.length; i++) {
            CityTemps[i] = textLines[i].split(",");
          }
          CityTemps.pop(); //Remove last element
          CityTemps.shift(); //Remove first element

          //Filter min and max
          FilteredTemps = CityTemps.filter((row) => {
            KeepRow = true;

            for (var i = 6; i < 18; i++) {
              //was 6 and 18
              if (
                (row[i] >= maxTemp || row[i] <= minTemp) &&
                monthToggles[i - 6]
              ) {
                KeepRow = false;
              }
            }
            return KeepRow;
          });

          setCityTemps2(FilteredTemps);
          onResize();
          // console.log("max: " + maxTemp + "min: " + minTemp);
        }
      });
  }, [minTemp, maxTemp, tickbox, tickIndex]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize);
    let elem = document.querySelector(".world");
    elem.addEventListener("scroll", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize);
      elem.removeEventListener("scroll", onResize);
    };
  }, []);

  const onResize = () => {
    //console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    let elem = document.querySelector(".world");
    let rect = elem.getBoundingClientRect();
    setWorldImgY(rect.y);
    console.log(elem);
    setWorldImgX(rect.width);
    setWorldScrollX(elem.scrollLeft);
  };

  return (
    <>
      {CityTemps2[1] &&
        CityTemps2.map((cityRow) => (
          <City
            key={cityRow[0]}
            id={cityRow[0]}
            lat={cityRow[3]}
            long={cityRow[4]}
            setCityID={setCityID}
            cityRow={cityRow}
            setCityRow={setCityRow}
            ScreenHeight={ScreenHeight}
            WorldImgY={WorldImgY}
            WorldImgX={WorldImgX}
            WorldScrollX={WorldScrollX}
          />
        ))}
      <img src={world} className="world-img" />
      {/* <div>
        Window Screen Width: {ScreenWidth} Height: {ScreenHeight} WorldImgY:{" "}
        {WorldImgY} ScrollX:{WorldImgX}
      </div> */}
      <></>
    </>
  );
}
