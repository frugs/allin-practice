import {Classes, Icon} from "@blueprintjs/core";
import {IconNames} from "@blueprintjs/icons";
import React from "react";
import {getTimezoneMetadata} from "@blueprintjs/timezone";

const Timezone = ({timezone}) => {

    if (timezone) {
        const { abbreviation, offsetAsString } = getTimezoneMetadata(timezone, new Date());
        const display = `${timezone}${abbreviation ? ` (${abbreviation})` : ""} ${offsetAsString}`;

        return (
            <div className="d-flex align-items-center my-1">
                <Icon icon={IconNames.TIME} className="mx-2" iconSize={20}/>
                <span className={`${Classes.TEXT_MUTED} ${Classes.TEXT_LARGE} my-0`}>{display}</span>
            </div>
        );
    }
    return null;
};

export default Timezone;