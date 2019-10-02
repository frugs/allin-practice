import React from 'react';
import './ProfilePanel.css';
import ProfileHeader from "./ProfileHeader";
import ProfileCardRace from "./ProfileCardRace";
import ProfileCardTimezone from "./ProfileCardTimezone";
// import ProfileCardTimeRange from "./ProfileCardTimeRange";

function ProfilePanel(props) {
    return (
        <div>
            <ProfileHeader {...props}/>
            <div className="Profile-body">
                <ProfileCardRace {...props}/>
                <ProfileCardTimezone {...props}/>
                {/*<ProfileCardTimeRange/>*/}
            </div>
        </div>
    );
}

export default ProfilePanel;
