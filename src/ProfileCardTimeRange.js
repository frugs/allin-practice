import React from 'react';
import {Card, Classes} from '@blueprintjs/core';
import MultiTimeRangePicker from "./MultiTimeRangePicker";
import './ProfileCard.css';
import './ProfileCardTimeRange.scss';

function DayTimeRange(props) {
    return (
        <div>
            <div>
                <h5 className={`${Classes.HEADING}`}>{props.day}</h5>
            </div>
            <div className="d-flex align-items-center">
                <MultiTimeRangePicker selectAllOnFocus showArrowButtons useAmPm/>
            </div>
        </div>
    );
}

function ProfileCardTimeRange() {
    const weekDayDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
    ];
    const weekEndDays = [
        "Saturday",
        "Sunday",
    ];
    return (
        <Card className="Profile-card">
            <div className="mb-4">
                <h4 className={Classes.HEADING}>The times during the week you are available for practice:</h4>
            </div>
            <Card className="ProfileCardTimeRange-weekday-card">
                {weekDayDays.map((day) => <DayTimeRange key={day} day={day}/>)}
            </Card>
            <Card className="ProfileCardTimeRange-weekend-card">
                {weekEndDays.map((day) => <DayTimeRange key={day} day={day}/>)}
            </Card>
        </Card>
    );
}

export default ProfileCardTimeRange;
