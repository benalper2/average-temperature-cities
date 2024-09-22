import "./styles.css";
//https://react.dev/learn/updating-arrays-in-state
//https://react.dev/learn/updating-objects-in-state
//return Object.fromEntries([k, v]);
//https://react.dev/learn/sharing-state-between-components
//https://www.dhiwise.com/post/The%20Ultimate%20Guide%20to%20Managing%20State%20Between%20Components%20in%20React

export default function MonthList({ CityID, cityRow }) {
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

  return (
    <div>
      {/* <div>{CityID}</div> */}
      {cityRow && <div className="List-Title">{cityRow[1]}</div>}
      {cityRow && <div className="List-Title">{cityRow[2]}</div>}
      <div className="List-Title">Average Monthly</div>
      {month_list.map((month, index) => {
        let i = index + 6;
        return (
          <div className="two-columns-countrylist" key={month}>
            <div className="monthName">{month}</div>
            <div>{cityRow[i]}</div>
          </div>
        );
      })}
    </div>
  );
}
