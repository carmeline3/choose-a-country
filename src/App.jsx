import { useState, useEffect } from "react";
import countriesData from "./countries.json";

function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <>
      <h1>Choose a Country</h1>

      <select
        onChange={(event) => {

          const chosenCountry = countries.find(
            (country) => country.name === event.target.value
          );

          setSelectedCountry(chosenCountry);

        }}
      >

        <option>Select a country</option>

        {
          countries.map((country) => (
            <option
              key={country.name}
              value={country.name}
            >
              {country.name}
            </option>
          ))
        }

      </select>

      {
        selectedCountry && (

          <div>

            <h2>{selectedCountry.name}</h2>

            <img
              src={selectedCountry.flag}
              width="300"
            />

          </div>

        )
      }

    </>
  );
}

export default App;