import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups.js";
import NewMeetup from "./pages/NewMeetup.js";
import Favorites from "./pages/Favorites.js";
import MainNavigation from "./components/layout/MainNavigation.js";
import Layout from "./components/layout/Layout.js";

function App() {
  // localhost:3000/
  // my-page.com/

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNavigation />}>
          <Route path="" element={<AllMeetups />}></Route>
          <Route path="/new-meetup" element={<NewMeetup />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
