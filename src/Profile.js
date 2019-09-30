import React from 'react';
import './Profile.css';
import ProfileHeader from "./ProfileHeader";
import ProfileCardRace from "./ProfileCardRace";
import ProfileCardTimezone from "./ProfileCardTimezone";

function Profile() {
    return (
        <div>
            <ProfileHeader/>
            <div className="Profile-body">
                <ProfileCardRace/>
                <ProfileCardTimezone/>
            </div>
        </div>
    );
}

export default Profile;