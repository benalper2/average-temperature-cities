import "./styles.css";
//https://react.dev/learn/updating-arrays-in-state
//https://react.dev/learn/updating-objects-in-state
//return Object.fromEntries([k, v]);
//https://react.dev/learn/sharing-state-between-components
//https://www.dhiwise.com/post/The%20Ultimate%20Guide%20to%20Managing%20State%20Between%20Components%20in%20React

export default function MonthList({
  CityID,
  cityRow,
  setMonthToggles,
  monthToggles,
  setTickbox,
  setTickIndex,
}) {
  const month_list = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log(
    "CityRow________________________________________________" + cityRow
  );

  //   const nextMonthToggles = monthToggles.map((e.target.checked, i) => {
  //     if (i === index) {
  //       // Increment the clicked counter
  //       return c + 1;
  //     } else {
  //       // The rest haven't changed
  //       return c;
  //     }
  //   });
  //   setCounters(nextCounters);

  // const handleMonthToggle = (e, index) => {
  //       var newMonthToggles = monthToggles.map((i) => {
  //     if (i === index) {
  //       newMonthToggles[i] = e.value.checked;
  //     }    });
  //     setMonthToggles(newMonthToggles);
  // };

  const handleMonthToggle = (e, index) => {
    let updatedMonthToggles = monthToggles;
    console.log(
      "e.target.checked: " +
        e.target.checked +
        " index: " +
        index +
        " monthToggles: " +
        monthToggles
    );
    updatedMonthToggles[index] = e.target.checked;
    setMonthToggles(updatedMonthToggles);
    setTickIndex(index);
    setTickbox(e.target.checked); //was index
  };

  return (
    <div>
      {/* <div>{CityID}</div> */}

      {cityRow && <div className="List-Title">{cityRow[1]}</div>}
      {cityRow && <div className="List-Title">{cityRow[2]}</div>}
      <div className="List-Title">Average Monthly</div>
      <div className="Month-List">
      {month_list.map((month, index) => {
        let i = index + 6;
        return (
          <div className="two-columns-countrylist" key={month}>
            <label className="switch">
              <input
                className="monthSwitch"
                type="checkbox"
                defaultChecked
                onChange={(e) => handleMonthToggle(e, index)}
                // onChange={(e) =>
                //   setMonthToggles(({ monthToggles }) => ({
                //     monthToggles: [
                //       ...monthToggles.slice(0, index),
                //      e.target.checked,
                //       ...monthToggles.slice(index + 1),
                //     ],
                //   }))
                // }
              />
              <span className="slider round"></span>
            </label>

            <div className="monthName">{month}</div>

            <div>{cityRow[i]}</div>
          </div>
        );
      })}
      </div>
      {/* <label className="switch"> */}
      {/* <input
        className="monthSwitch"
        type="checkbox"
        onChange={(e) => setTickbox(e.target.checked)}
      /> */}
      {/* </label> */}
    </div>
  );
}
