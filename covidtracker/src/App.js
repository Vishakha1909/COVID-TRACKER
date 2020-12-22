import './App.css';
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID19 TRACKER</h1>
        <FormControl className="app_dropdown">
          <Select
            variant="outlined"
            value="abc"
          >
            <MenuItem value="worldwide">OLA</MenuItem>
            <MenuItem value="worldwide">OLA</MenuItem>
            <MenuItem value="worldwide">OLA</MenuItem>

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
