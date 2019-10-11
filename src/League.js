import BronzeIcon from "./bronze_icon.png";
import SilverIcon from "./silver_icon.png";
import GoldIcon from "./gold_icon.png";
import PlatinumIcon from "./platinum_icon.png";
import DiamondIcon from "./diamond_icon.png";
import MasterIcon from "./master_icon.png";
import GrandmasterIcon from "./grandmaster_icon.png";
import {Classes} from "@blueprintjs/core";
import React from "react";

const leagueIcons = {
    "Bronze": BronzeIcon,
    "Silver": SilverIcon,
    "Gold": GoldIcon,
    "Platinum": PlatinumIcon,
    "Diamond": DiamondIcon,
    "Master": MasterIcon,
    "Grandmaster": GrandmasterIcon,
};

const League = ({league}) => {
    if (league) {
        let leagueIcon = leagueIcons[league];

        return (
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
        );
    }

    return null;
};

export default League;