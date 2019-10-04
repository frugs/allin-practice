import React from 'react';
import {FocusStyleManager} from "@blueprintjs/core";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import './App.scss';

FocusStyleManager.onlyShowFocusOnTabs();

function makeInitialState() {
    return {
        isSignedIn: false,
        avatar: "",
        player: "",
        continent: "",
        race: "",
        league: "",
        practiceRaces: [],
        timezone: "",
        timeRangesMonday: [{}],
        timeRangesTuesday: [{}],
        timeRangesWednesday: [{}],
        timeRangesThursday: [{}],
        timeRangesFriday: [{}],
        timeRangesSaturday: [{}],
        timeRangesSunday: [{}],
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...makeInitialState(),
            updateAppState: (state) => {
                this.setState(state)
            },

            signIn: () => {
                this.setState({
                    isSignedIn: true,
                    avatar: "https://cdn.discordapp.com/avatars/114041046828056579/a78d511a528f641e4a131b37d3dc33b2",
                    player: "Hugo \"frugs\" Wainwright",
                    continent: "Europe",
                    race: "Zerg",
                    league: "Master",
                    practiceRaces: ["Protoss", "Zerg"],
                    timezone: "Europe/London",

                    ...this.appFuncs
                })
            },

            signOut: () => {
                window.location.reload();
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
