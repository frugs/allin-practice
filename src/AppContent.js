import React from 'react';
import {Icon, Tab, Tabs} from "@blueprintjs/core";
import ProfilePanel from "./ProfilePanel";

function AppContent(props) {
    return (
        <Tabs large selectedTabId="profile">
            <span className="ml-2"/>
            <Tab id="profile" icon="person"
                 title={<><Icon icon="person" className="mx-2"/>Profile</>} panel={<ProfilePanel {...props}/>}/>
            <Tab id="search" icon="search" title={<><Icon icon="search" className="mx-2"/>Search</>}/>
            <Tab id="explore" icon="explore" title={<><Icon icon="globe-network" className="mx-2"/>Explore</>}/>
        </Tabs>
    );
}

export default AppContent;