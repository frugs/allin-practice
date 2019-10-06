import React from 'react';
import {Button, Intent} from '@blueprintjs/core';
import './ProfileCard.css';

function ProfileCardUpdateOrDiscard({submitProfile, resetState}) {
    return (
        <div className="Profile-card">
            <div className="mt-1 mb-3">
                <Button
                    large
                    intent={Intent.PRIMARY}
                    text="Update Profile"
                    className="mx-2 px-5"
                    onClick={submitProfile}
                />
                <Button
                    large
                    intent={Intent.DANGER}
                    text="Discard Changes"
                    className="mx-2 px-5"
                    onClick={resetState}
                />
            </div>
        </div>
    );
}

export default ProfileCardUpdateOrDiscard;
