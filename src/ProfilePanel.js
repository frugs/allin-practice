import React from 'react';
import ProfileHeader from "./ProfileHeader";
import ProfileCardRace from "./ProfileCardRace";
import ProfileCardTimezone from "./ProfileCardTimezone";
import ProfileCardTimeRange from "./ProfileCardTimeRange";
import ProfileCardUpdateOrDiscard from "./ProfileCardUpdateOrDiscard";
import './ProfilePanel.css';

function ProfilePanel(props) {
    return (
        <div>
            <ProfileHeader {...props}/>
            <div className="Profile-body">
                <ProfileCardRace {...props}/>
                <ProfileCardTimezone {...props}/>
                <ProfileCardTimeRange {...props}/>
                <ProfileCardUpdateOrDiscard/>
            </div>
        </div>
    );
}

export default ProfilePanel;
