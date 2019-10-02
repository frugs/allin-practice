import React from 'react';
import {ButtonGroup, Card, Classes, Intent} from '@blueprintjs/core';
import ToggleButton from "./ToggleButton";
import './ProfileCard.css';
import './AppUtil.css'

function RaceButtonContent({race}) {
    return (
        <div className="d-flex align-items-center">
            <img
                src={`/${race}Icon.png`}
                alt=""
                width="20"
                height="20"
                className="mx-2 AppUtil-inline-icon AppUtil-invert-active-icon"
            />
            {race}
        </div>
    );
}

function ProfileCardRace() {
    return (
        <Card className="Profile-card">
            <div className="mb-4">
                <h4 className={Classes.HEADING}>The race(s) you'd like to practice with:</h4>
            </div>
            <ButtonGroup minimal fill>
                <ToggleButton intent={Intent.PRIMARY}>
                    <RaceButtonContent race="Terran"/>
                </ToggleButton>
                <ToggleButton intent={Intent.PRIMARY}>
                    <RaceButtonContent race="Protoss"/>
                </ToggleButton>
                <ToggleButton intent={Intent.PRIMARY}>
                    <RaceButtonContent race="Zerg"/>
                </ToggleButton>
                <ToggleButton intent={Intent.PRIMARY}>
                    <RaceButtonContent race="Random"/>
                </ToggleButton>
            </ButtonGroup>
        </Card>
    );
}

export default ProfileCardRace;
