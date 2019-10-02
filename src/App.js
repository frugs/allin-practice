import React from 'react';
import { FocusStyleManager } from "@blueprintjs/core";
import './App.scss';
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";

FocusStyleManager.onlyShowFocusOnTabs();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: "https://cdn.discordapp.com/avatars/114041046828056579/a78d511a528f641e4a131b37d3dc33b2",
            continent: "Europe",
            race: "Zerg",
            league: "Master",
            updateAppState: (state) => {
                this.setState(state)
            }
        }
    }

    render() {
        return (
            <div>
                <AppHeader {...this.state}/>
                <AppContent {...this.state}/>
            </div>
        );
    }
}

export default App;
