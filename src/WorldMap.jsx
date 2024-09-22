import { useEffect, useState } from "react";
import world from "./assets/Equirectangular_projection_SWtrim1.jpg";
import City from "./City.jsx";

export default function WorldMap({ setCityID, setCityRow, minTemp, maxTemp }) {
  //const [text, setText] = useState();
  const [CityTemps2, setCityTemps2] = useState([]);

  let textLines;
  var CityTemps = [];
  var FilteredTemps = [];
  var KeepRow;

  useEffect(() => {
    fetch("./data.csv")
      .then((response) => response.text())
      .then((responseText) => {
        //setText(responseText);
        console.log("setext");

        if (responseText !== undefined) {
          textLines = responseText.split(/\r\n|\n|\r/);
          console.log("text.split");
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
              if (row[i] >= maxTemp || row[i] <= minTemp) {
                KeepRow = false;
              }
            }
            return KeepRow;
          });

          setCityTemps2(FilteredTemps);
          console.log("max: " + maxTemp + "min: " + minTemp);
        }
      });
  }, [minTemp, maxTemp]);

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
          />
        ))}
      <img src={world} />
    </>
  );
}
