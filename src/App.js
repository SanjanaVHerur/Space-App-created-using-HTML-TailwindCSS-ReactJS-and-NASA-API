import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import CurrentDay from "./components/CurrentDay";
import DateInput from "./components/DateInput";
import DateRangeInput from "./components/DateRangeInput";
import AstronomyPictureOfADate from "./components/AstronomyPictureOfADate";
import AstronomyPicturesInRange from "./components/AstronomyPicturesInRange";

function App() {
  return (
    <BrowserRouter>
      <div>

          <Route component={Home} path="/" exact />
          <Route component={CurrentDay} path="/astronomy-picture-of-the-day" />
          <Route component={DateInput} path="/astronomy-picture-for-date" />
          <Route component={AstronomyPictureOfADate} path="/astronomy-picture-of-a-date" />
          <Route component={DateRangeInput} path="/astronomy-pictures-for-range" />
          <Route component={AstronomyPicturesInRange} path="/astronomy-pictures-in-range" />

      </div>
    </BrowserRouter>
  );
}

export default App;
