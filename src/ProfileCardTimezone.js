import React from 'react';
import './ProfileCard.css';
import './ProfileCardTimezone.scss'
import TimezonePicker from 'react-bootstrap-timezone-picker';

function extractContinent(timezone) {
    if (!timezone) {
        return "";
    }

    let split = timezone.split("/");
    if (!split) {
        return "";
    }

    return split[0];
}

function ProfileCardTimezone({updateAppState}) {
    return (
        <div className="card Profile-card">
            <div className="h4 font-weight-normal mb-4">
                The time zone that you live in:
            </div>
            <TimezonePicker
                absolute={false}
                placeholder="Select time zone"
                className="ProfileCardTimezone-timezone-picker"
                onChange={(timezone) => {updateAppState({continent: extractContinent(timezone)})}}
            />
            <p className="p-2 h6 font-weight-light text-muted">
                <small>Select your standard time zone, not your daylight savings time zone.</small>
            </p>
        </div>
    );
}

export default ProfileCardTimezone;
