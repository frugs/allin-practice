import React from 'react';
import {Classes} from "@blueprintjs/core";
import './ProfileHeader.css';
import AllinCover from './allin_cover.png';
import Races from "./Races";
import League from "./League";
import Timezone from "./Timezone";

function ProfileHeader({avatar, player, timezone, practiceRaces, league}) {
    return (
        <div>
            <img
                src={AllinCover}
                alt="Cover"
                className="Profile-cover"
            />
            <div align="left" className="d-flex align-items-center Profile-summary-container">
                <img
                    src={avatar}
                    width="200"
                    height="200"
                    className="Profile-avatar mx-2"
                    alt="Avatar"
                />
                <span className="mx-3 py-5">
                    <div className="d-flex flex-column align-items-start">
                        <h2 className={`${Classes.HEADING} my-3`}>{player}</h2>
                        <League league={league}/>
                        <Races practiceRaces={practiceRaces}/>
                        <Timezone timezone={timezone}/>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default ProfileHeader;
