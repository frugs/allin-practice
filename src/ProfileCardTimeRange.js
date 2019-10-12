import React from 'react';
import {Card, Classes, Divider} from '@blueprintjs/core';
import MultiTimeRangePicker from "./MultiTimeRangePicker";
import './ProfileCard.css';

function DayTimeRange(props) {
    let {day} = props;
    return (
        <div>
            <div>
                <h5 className={`${Classes.HEADING}`}>{day}</h5>
            </div>
            <div className="d-flex align-items-center">
                <MultiTimeRangePicker
                    {...props}
                    timeRanges={props[`timeRanges${day}`]}
                    selectAllOnFocus
                    showArrowButtons
                />
            </div>
        </div>
    );
}

function ProfileCardTimeRange(props) {
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
                <h4 className={Classes.HEADING}>The times during the week you are typically available for practice:</h4>
            </div>
            {weekDayDays.map((day) => <DayTimeRange {...props} key={day} day={day}/>)}
            <Divider className="mb-4"/>
            {weekEndDays.map((day) => <DayTimeRange {...props} key={day} day={day}/>)}
        </Card>
    );
}

export default ProfileCardTimeRange;
