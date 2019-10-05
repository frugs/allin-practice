import React from 'react';
import {Card, Classes, PopoverPosition} from "@blueprintjs/core";
import {TimezoneDisplayFormat, TimezonePicker} from "@blueprintjs/timezone";
import './ProfileCard.css';

class ProfileCardTimezone extends React.Component {
    constructor(props) {
        super(props);
        this.updateAppState = props.updateAppState
    }

    render() {
        return (
            <Card className="Profile-card">
                <div className="mb-4">
                    <h4 className={Classes.HEADING}>
                        The time zone that you live in:
                    </h4>
                </div>
                <TimezonePicker
                    value={this.props.timezone}
                    valueDisplayFormat={TimezoneDisplayFormat.COMPOSITE}
                    buttonProps={{className: "px-5"}}
                    popoverProps={{
                        position: PopoverPosition.TOP,
                        modifiers: {preventOverflow: true},
                    }}
                    placeholder="Select time zone"
                    onChange={(timezone) => {
                        this.updateAppState({timezone: timezone});
                    }}
                />
            </Card>
        );
    }
}

export default ProfileCardTimezone;
