import './App.css';
import { MenuItem,FormControl,Select} from "@material-ui/core";
import {useState,useEffect} from "react";
import InfoBox from './InfoBox';
//https://disease.sh/v3/covid-19/countries

function App() {
  const [countries,setCountries] = useState([]);
  const [country,setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ));
        setCountries(countries);
      });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }


  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID19 TRACKER</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
  
          </Select>
        </FormControl>
      </div>

      <div className="app_stats">
        <InfoBox title="Corona Virus Cases"/>
        <InfoBox title="Corona Virus Recoveries"/>
        <InfoBox title="Corona Virus Deaths"/>
        {/*Infobox title="CoronaVirusCases"*/}
        {/*Infobox title="recoveries"*/}
        {/*Infobox* title="deaths"*/}
      </div>
      

    
      {/*Table*/}
      {/*Graph*/}

      {/*Map*/}
    </div>
  );
}

export default App;
