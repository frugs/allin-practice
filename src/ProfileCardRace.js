import React from 'react';
import './ProfileCard.css';
import './AppUtil.css'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function ProfileCardRace() {
    return (
        <div className="card Profile-card">
            <div className="h4 font-weight-normal mb-4">
                Your preferred race(s):
            </div>
            <ToggleButtonGroup type="checkbox" size="sm">
                <ToggleButton value="1" variant="outline-primary" className="d-flex align-items-center flex-column">
                    <div className="d-flex align-items-center">
                        <img
                            src="/TerranIcon.png"
                            alt=""
                            width="20"
                            height="20"
                            className="mx-2 AppUtil-inline-icon AppUtil-invert-active-icon"
                        />
                        Terran
                    </div>
                </ToggleButton>
                <ToggleButton value="2" variant="outline-primary" className="d-flex align-items-center flex-column">
                    <div className="d-flex align-items-center">
                        <img
                            src="/ProtossIcon.png"
                            alt=""
                            width="20"
                            height="20"
                            className="mx-2 AppUtil-inline-icon AppUtil-invert-active-icon"
                        />
                        Protoss
                    </div>
                </ToggleButton>
                <ToggleButton value="3" variant="outline-primary" className="d-flex align-items-center flex-column">
                    <div className="d-flex align-items-center">
                        <img
                            src="/ZergIcon.png"
                            alt=""
                            width="20"
                            height="20"
                            className="mx-2 AppUtil-inline-icon AppUtil-invert-active-icon"
                        />
                        Zerg
                    </div>
                </ToggleButton>
                <ToggleButton value="4" variant="outline-primary" className="d-flex align-items-center flex-column">
                    <div className="d-flex align-items-center">
                        <img
                            src="/RandomIcon.png"
                            alt=""
                            width="20"
                            height="20"
                            className="mx-2 AppUtil-inline-icon AppUtil-invert-active-icon"
                        />
                        Random
                    </div>
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default ProfileCardRace;
