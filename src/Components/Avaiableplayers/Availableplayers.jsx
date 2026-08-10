import React, { use } from "react";
import Player from "../Player/Player";

const Availableplayers = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
}) => {
  // playerData contain actuall json data!! that is possible by using use() hook
  const playerData = use(playersPromise);

  // console.log(playerData)
  return (
    <div className="max-w-312 mx-auto grid grid-cols-1 md:grid-cols-3">
      {/* card section */}
      {playerData.map((player) => (
        <Player key={player.id}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></Player>
      ))}
    </div>
  );
};

export default Availableplayers;
