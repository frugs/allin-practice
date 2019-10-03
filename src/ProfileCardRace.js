import React from 'react';
import {ButtonGroup, Card, Classes, Intent} from '@blueprintjs/core';
import ToggleButton from "./ToggleButton";
import RaceIcon from "./RaceIcon";
import './ProfileCard.css';
import './AppUtil.css'

function RaceButtonContent({race}) {
    return (
        <div className="d-flex align-items-center">
            <RaceIcon
                race={race}
                alt=""
                width="20"
                height="20"
                className="mx-2 AppUtil-inline-icon AppUtil-invert-active-icon"
            />
            {race}
        </div>
    );
}

function RaceToggleButton(props) {
    const {practiceRaces, race} = props;
    return (
        <ToggleButton buttonProps={{intent: Intent.PRIMARY}} pressed={practiceRaces.includes(race)}>
            <RaceButtonContent race={race}/>
        </ToggleButton>
    );
}

function ProfileCardRace(props) {
    const races = [
        "Terran",
        "Protoss",
        "Zerg",
        "Random",
    ];
    const {practiceRaces, updateAppState} = props;

    return (
        <Card className="Profile-card">
            <div className="mb-4">
                <h4 className={Classes.HEADING}>The race(s) you'd like to practice with:</h4>
            </div>
            <ButtonGroup minimal fill>
                {
                    races.map((race) => {
                        return (
                            <RaceToggleButton
                                key={race}
                                {...props}
                                race={race}
                                onClick={() => {
                                    if (practiceRaces.includes(race)) {
                                        updateAppState({practiceRaces: practiceRaces.filter((e) => e !== race)});
                                    } else {
                                        updateAppState({practiceRaces: [...practiceRaces, race]});
                                    }
                                }}
                            />
                        )
                    })
                }
            </ButtonGroup>
        </Card>
    );
}

export default ProfileCardRace;
