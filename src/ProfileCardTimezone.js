import React from 'react';
import './ProfileCard.css';
import './ProfileCardTimezone.css'
import TimezonePicker from 'react-bootstrap-timezone-picker';

function ProfileCardTimezone({updateAppState}) {
    return (
        <div className="card Profile-card">
            <div className="h4 font-weight-normal mb-4">
                Your Time Zone:
            </div>
            <TimezonePicker
                absolute={false}
                placeholder="Select time zone"
                className="ProfileCardTimezone-timezone-picker"
                onChange={(timezone) => {updateAppState({continent: timezone.split("/")[0]})}}
            />
            <p className="p-2 h6 font-weight-light text-muted">
                <small>Select your standard time zone, not your daylight savings time zone.</small>
            </p>
        </div>
    );
}

export default ProfileCardTimezone;
