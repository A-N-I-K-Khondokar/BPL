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

  //For toggling between Available and Selected Players UI
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {/* Navbar section */}
      <Navbar></Navbar>

      {/* Top of Available and Selected players */}
      <div className={" flex  justify-between max-w-312 mx-auto"}>
        <div className="font-bold">Available Players</div>
        <div className={"flex items-center "}>
          <button
            onClick={() => setToggle(true)}
            className={`btn rounded-l-2xl border-r-0 ${toggle ? "bg-amber-200" : " "}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn rounded-r-2xl border-l-0 ${!toggle ? "bg-amber-200" : ""}`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {/* Toggling between Available and Selected Players */}
      {toggle === true ? (
        <Suspense
          fallback={
            <div className="flex justify-center items-center w-full h-100 ">
              <span className="loading loading-spinner text-accent"></span>
            </div>
          }
        >
          <Availableplayers playersPromise={playersPromise}></Availableplayers>
        </Suspense>
      ) : (
        <Selectedplayers></Selectedplayers>
      )}
    </>
  );
}

export default App;
