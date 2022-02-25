// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import EVENTS from "./Pages/Event Page/EVENTS/EVENTS";
import TEAMS from "./Pages/Teams/TEAMS/TEAMS"
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Homepage />} />
          <Route path="events" element={<EVENTS />} />
          <Route path="teams" element={<TEAMS />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;