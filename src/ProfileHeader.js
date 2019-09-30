import React from 'react';
import './ProfileHeader.css';

function ProfileHeader() {
    return (
        <div>
            <img
                src="/allin_cover.png"
                alt="Cover"
                className="Profile-cover"
            />
            <div align="left" className="d-flex align-items-center Profile-avatar-username-summary-container">
                <img
                    src="https://cdn.discordapp.com/avatars/114041046828056579/a78d511a528f641e4a131b37d3dc33b2"
                    width="200"
                    height="200"
                    className="Profile-avatar mx-2"
                    alt="Avatar"
                />
                <span className="mx-3 py-5">
                    <div className="h3 font-weight-normal my-3">Hugo "frugs" Wainwright</div>
                    <div className="d-flex align-items-center my-1">
                        <img
                            src="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/png/map-marker-4x.png"
                            alt=""
                            width="20"
                            height="20"
                            className="mx-2 AppUtil-inline-icon"
                        />
                        <span className="h6 font-weight-normal text-muted my-0">London, UK</span>
                    </div>
                    <div className="d-flex align-items-center my-1">
                        <img
                            src="/ZergIcon.png"
                            alt=""
                            width="20"
                            height="20"
                            className="mx-2 AppUtil-inline-icon"
                        />
                        <span className="h6 font-weight-normal text-muted my-0">Zerg</span>
                    </div>
                    <div className="d-flex align-items-center my-1">
                        <img
                            src="/master.png"
                            alt=""
                            width="20"
                            height="20"
                            className="mx-2 AppUtil-inline-icon"
                        />
                        <span className="h6 font-weight-normal text-muted my-0">Master League</span>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default ProfileHeader;
