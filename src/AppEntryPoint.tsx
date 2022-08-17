import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import App from "./App";

import Closer from "./components/song-pages/Closer";
import Faded from "./components/song-pages/Faded";
import Hymm from "./components/song-pages/Hymm";
import NightChanges from "./components/song-pages/NightChanges";
import OnAndOn from "./components/song-pages/OnAndOn";
import Rockbaye from "./components/song-pages/Rockbaye";

function AppEntryPoint() {
  return (
    <Router>
        <Routes>
       
          <Route path="/" element={<App/>}>
          </Route>
          <Route path="onAndon" element={<OnAndOn/>}>
          </Route>
          <Route path="closer" element={<Closer/>}>
          </Route>
          <Route path="faded" element={<Faded/>}>
          </Route>
          <Route path="hymm" element={<Hymm/>}>
          </Route>
          <Route path="rockbaye" element={<Rockbaye/>}>
          </Route>
          <Route path="/nightChanges" element={<NightChanges/>}>
          </Route>
        </Routes>
    </Router>
  )
}

export default AppEntryPoint