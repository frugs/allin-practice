import React from 'react';
import { Classes, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import './ProfileHeader.css';
import AllinCover from './allin_cover.png';
import TerranIcon from './terran_icon.png';
import ProtossIcon from './protoss_icon.png';
import ZergIcon from './zerg_icon.png';
import RandomIcon from './random_icon.png';
import BronzeIcon from './bronze_icon.png';
import SilverIcon from './silver_icon.png';
import GoldIcon from './gold_icon.png';
import PlatinumIcon from './platinum_icon.png';
import DiamondIcon from './diamond_icon.png';
import MasterIcon from './master_icon.png';
import GrandmasterIcon from './grandmaster_icon.png';

const raceIcons = {
    "Terran": TerranIcon,
    "Protoss": ProtossIcon,
    "Zerg": ZergIcon,
    "Random": RandomIcon,
};

const leagueIcons = {
    "Bronze": BronzeIcon,
    "Silver": SilverIcon,
    "Gold": GoldIcon,
    "Platinum": PlatinumIcon,
    "Diamond": DiamondIcon,
    "Master": MasterIcon,
    "Grandmaster": GrandmasterIcon,
};

function ProfileHeader({avatar, player, continent, race, league}) {
    let raceIcon = raceIcons[race];
    let leagueIcon = leagueIcons[league];

    return (
        <div>
            <img
                src={AllinCover}
                alt="Cover"
                className="Profile-cover"
            />
            <div align="left" className="d-flex align-items-center Profile-avatar-username-summary-container">
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
                        <div className="d-flex align-items-center my-1">
                            <Icon icon={IconNames.MAP_MARKER} className="mx-2" iconSize={20}/>
                            <span className={`${Classes.TEXT_MUTED} ${Classes.TEXT_LARGE} my-0`}>{continent}</span>
                        </div>
                        <div className="d-flex align-items-center my-1">
                            <img
                                src={raceIcon}
                                alt=""
                                width="20"
                                height="20"
                                className="mx-2 AppUtil-inline-icon"
                            />
                            <span className={`${Classes.TEXT_MUTED} ${Classes.TEXT_LARGE} my-0`}>Zerg</span>
                        </div>
                        <div className="d-flex align-items-center my-1">
                            <img
                                src={leagueIcon}
                                alt=""
                                width="20"
                                height="20"
                                className="mx-2 AppUtil-inline-icon"
                            />
                            <span className={`${Classes.TEXT_MUTED} ${Classes.TEXT_LARGE} my-0`}>{league} League</span>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default ProfileHeader;
