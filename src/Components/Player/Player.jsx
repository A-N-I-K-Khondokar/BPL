import React, { use, useState } from "react";
import userImg from "../../assets/user-1.png";
import flagImg from "../../assets/flag.png";

const Player = ({ player, availableBalance, setAvailableBalance }) => {
  const [select, setSelect] = useState(false);

  return (
    <div key={player.id} className="card bg-base-100 shadow-sm p-4">
      <figure className="rounded-2xl object-cover h-75">
        <img src={player.image} alt="Shoes" />
      </figure>

      <div className="">
        <div className="flex items-center mt-4">
          <img src={userImg} alt="" />
          <span className="ml-3">{player.name}</span>
        </div>

        <div className="flex justify-between items-center mb-5 border-b-gray-100 border-b-2 p-2 mt-4">
          <div className="flex items-center gap-2">
            <img src={flagImg} alt="" />
            <span>{player.country}</span>
          </div>
          <div>
            <button className="btn">{player.role}</button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between  p-2">
            <span className="font-bold">Rating</span>
            <span>{player.rating}</span>
          </div>
          <div className="flex items-center justify-between  p-2">
            <span>{player.battingStyle}</span>
            <span>{player.bowlingStyle}</span>
          </div>

          <div className="flex items-center justify-between p-2">
            <span>Price : ${player.price}</span>
            <div className="">
              <button
                disabled={select}
                onClick={() => {
                  if (availableBalance > player.price) {
                    setAvailableBalance(availableBalance - player.price);
                    setSelect(true);
                  } else {
                    alert("Not Enough Balance!!!!");
                  }
                }}
                className="btn"
              >
                {select ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
