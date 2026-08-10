import React from 'react';
import SelectPlayer from '../SelectPlayer/SelectPlayer';

const Selectedplayers = ({ purchase, setPurchase,delImage }) => {
    return (
        <div>
            {purchase.map((player) => (
                <SelectPlayer delImage={delImage} key={player.id} player={player} setPurchase={setPurchase} />
            ))}
        </div>
    );
};

export default Selectedplayers;