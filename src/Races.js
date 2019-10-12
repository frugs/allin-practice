import RaceIcon from "./RaceIcon";
import {Classes} from "@blueprintjs/core";
import React from "react";
import './Races.css';

const races = [
    "Terran",
    "Protoss",
    "Zerg",
    "Random",
];

const Race = ({race}) => (
    <div className="d-flex align-items-center my-1">
        <RaceIcon
            race={race}
            alt=""
            width="20"
            height="20"
            className="mx-2 AppUtil-inline-icon"
        />
        <span className={`${Classes.TEXT_MUTED} ${Classes.TEXT_LARGE} my-0`}>{race}</span>
    </div>
);

const Races = ({practiceRaces}) => (
    <div className="d-flex Races-responsive">
        {races.map((race) => practiceRaces.includes(race) ? <Race race={race} key={race}/> : null)}
    </div>
);

export default Races;