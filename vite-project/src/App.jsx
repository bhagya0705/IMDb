import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";
import Banner from "./Components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setWatchList] = useState(()=>{
    return JSON.parse(localStorage.getItem("moviesApp"))||[];
  });

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies watchlist={watchlist} setWatchList={setWatchList} />
              </>
            }
          />
          <Route
            path="/WatchList"
            element={
              <WatchList watchList={watchlist} setWatchList={setWatchList} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
