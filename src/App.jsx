import { useState } from "react";
import countries from "./countries.json";

// let myCountries = [
//   {name:"DRC", code:"cd"},
//   {name:"Israel", code:"il"},
//   {name:"Luxembourg", code:"lu"},
//   {name:"South Africa", code:"za"},
//   {name:"USA", code:"us"},
//   {name:"Zambia", code:"zm"},
//   {name:"Ohio", code:"oh"},
//   {name:"Argentina", code:"ar"},
//   {name:"South Korae", code:"kr"},
//   {name:"Italy", code:"it"},
// ];

// Holds every functionality for the dropdown
function App() {
  // This stores the country's code for it to be identified easily
  let [selected, setSelected] = useState("");

  // This is for the the event listener
  function handleChange(event) {
    // console.log( event.target.value);
    setSelected(event.target.value);
  }
  // console.log(selected);

  return (
    <div className="chooseACountry">
      <h1>Choose your country</h1>
      <select onChange={handleChange}>
  <option>Select a country</option>
 {
 countries.map((country) => (
  <option key={country.code} value={country.code}>{country.name}</option>
        ))}
      </select>
      <Flag code={selected} />
    </div>
  );
}
// This will run when  the user chooses a flag, the image will appear
function Flag({code}){
  return (
    <img src={`https://flagcdn.com/w320/${code}.png`}alt="flag"/>
  );
}

export default App;