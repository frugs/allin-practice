import React from 'react';
import {Icon, Tab, Tabs} from "@blueprintjs/core";
import ProfilePanel from "./ProfilePanel";

function AppContent(props) {
    return (
        <Tabs large selectedTabId="profile">
            <span className="ml-2"/>
            <Tab
                id="profile"
                icon="person"
                title={
                    <><Icon icon="person" className="ml-2 mr-1"/><span className="ml-1 mr-2">Profile</span></>
                }
                panel={<ProfilePanel {...props}/>}
            />
            <Tab
                id="search"
                icon="search"
                title={
                    <><Icon icon="search" className="ml-2 mr-1"/><span className="ml-1 mr-2">Search</span></>
                }
            />
            <Tab
                id="explore"
                icon="explore"
                title={
                    <><Icon icon="globe-network" className="ml-2 mr-1"/><span className="ml-1 mr-2">Explore</span></>
                }
            />
        </Tabs>
    );
}

export default AppContent;