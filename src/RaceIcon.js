import React from 'react';
import TerranIcon from "./terran_icon.png";
import ProtossIcon from "./protoss_icon.png";
import ZergIcon from "./zerg_icon.png";
import RandomIcon from "./random_icon.png";

const raceIcons = {
    "Terran": TerranIcon,
    "Protoss": ProtossIcon,
    "Zerg": ZergIcon,
    "Random": RandomIcon,
};

function RaceIcon(props) {
    const {race} = props;
    return (
        <img src={raceIcons[race]} alt={race} {...props}/>
    );
}

export default RaceIcon;