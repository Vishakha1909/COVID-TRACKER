import './App.css';
import { MenuItem,FormControl,Select,Card,CardContent} from "@material-ui/core";
import {useState,useEffect} from "react";
import InfoBox from './InfoBox';
import Map from './Map';
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
      <div className="app_left">
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
          <InfoBox title="Corona Virus Cases" cases={123} total={123}/>
          <InfoBox title="Corona Virus Recoveries" cases={123} total={123}/>
          <InfoBox title="Corona Virus Deaths" cases={123} total={123}/>
        </div>

        {/*Map*/}
        <Map/>
      </div>

      <Card className="app_right">
        <CardContent>
          <h3>Live Cases</h3>
          <h3>Graph</h3>
          {/*Table*/}
          {/*Graph*/}
        </CardContent>
      </Card>
      
      
    </div>
  );
}

export default App;
