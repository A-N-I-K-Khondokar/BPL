import { Suspense, useState } from "react";
import "./App.css";
import Availableplayers from "./Components/Avaiableplayers/Availableplayers";
import Selectedplayers from "./Components/Selectedplayers/Selectedplayers";
import Navbar from "./Components/Navbar/Navbar";

// fetching the players data
const fetchjson = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  // i have to call the fetchjson() that will return a promise
  const playersPromise = fetchjson();

  return (
    <>
      {/* Navbar section */}
      <Navbar></Navbar>

      {/* Available Players  */}
      <Suspense
        fallback={<span className="loading loading-spinner text-accent"></span>}
      >
        <Availableplayers playersPromise={playersPromise}></Availableplayers>
      </Suspense>

      {/* Selected Players */}
      {/* <Selectedplayers></Selectedplayers> */}
    </>
  );
}

export default App;
