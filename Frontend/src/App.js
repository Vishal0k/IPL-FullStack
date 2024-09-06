import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Q2 from "./components/TeamStatistics";
import Q3 from "./components/Top5Players";
import Navigation from "./components/Navigation";
import Post from "./components/Post";
import Q4 from "./components/RetrieveMatchesByDate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/team-statistics" element={<Q2 />} />
          <Route path="/top-players" element={<Q3 />} />
          <Route path="/add-player" element={<Post />} />
          <Route path="/retrieve-matches-by-date" element={<Q4 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
