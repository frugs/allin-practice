import React from 'react';
import './ProfileCard.css';
import './ProfileCardLocation.css';
import Geosuggest from "react-geosuggest";

function ProfileCardLocation() {
    return (
        <div className="card Profile-card">
            <div className="h4 font-weight-normal mb-4">
                Your location:
            </div>
            <Geosuggest
                types={["(cities)"]}
                placeholder="Search Cities"
                inputClassName="Profile-geosuggest-input form-control"
                suggestsClassName="Profile-geosuggest-suggests"
                suggestsHiddenClassName="Profile-geosuggest-suggestsHidden"
                suggestItemClassName="Profile-geosuggest-suggestsItem"
                suggestItemActiveClassName="Profile-geosuggest-suggestsItemActive"
                className="mb-lg-4"
            />
        </div>
    );
}

export default ProfileCardLocation;
