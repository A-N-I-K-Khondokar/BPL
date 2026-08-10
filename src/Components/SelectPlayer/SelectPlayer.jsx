import React from "react";
import delImg from "../../assets/deleteImg.png";

const SelectPlayer = ({ player, setPurchase,delImage }) => {
  return (
    <div className="max-w-312 mx-auto">
      <div className="flex items-center justify-between mt-5 bg-gray-100 p-3 pr-9">
        <div className="flex items-center gap-4">
          <img className="w-25" src={player.image} alt={player.name} />
          <div className="font-semibold">
            <p>{player.name}</p>
            <p>{player.role}</p>
          </div>
        </div>
        <img
          className="hover:bg-amber-500 cursor-pointer"
          src={delImg}
          alt="delete"
          onClick={() => {
            setPurchase((prev) => prev.filter((p) => p.id !== player.id));
            delImage(player)
          }}
        />
      </div>
    </div>
  );
};

export default SelectPlayer;
