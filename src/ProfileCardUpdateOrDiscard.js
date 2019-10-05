import React from 'react';
import {Button, Intent} from '@blueprintjs/core';
import './ProfileCard.css';

function ProfileCardUpdateOrDiscard() {
    return (
        <div className="Profile-card">
            <Button large intent={Intent.PRIMARY} text="Update Profile" className="mx-2 px-5 mt-1 mb-3"/>
            <Button
                large
                intent={Intent.DANGER}
                text="Discard Changes"
                className="mx-2 px-5 my-3"
                />
        </div>
    );
}

export default ProfileCardUpdateOrDiscard;
