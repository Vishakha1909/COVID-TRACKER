import './App.css';
import { MenuItem,FormControl,Select} from "@material-ui/core";
import {useState} from "react";

function App() {
  const [countries,setCountries] = useState(['USA','UK']);


  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID19 TRACKER</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            {
              countries.map((country) => (
                <MenuItem value={country}>{country}</MenuItem>
              ))
            }
  
          </Select>
        </FormControl>
      </div>
      
      {/* Header */}
      {/*Title + Select Input */}

      {/*Infobox*/}
      {/*Infobox*/}
      {/*Infobox*/}

      {/*Table*/}
      {/*Graph*/}

      {/*Map*/}
    </div>
  );
}

export default App;
