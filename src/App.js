import React from 'react';
import {FocusStyleManager} from "@blueprintjs/core";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import './App.scss';

FocusStyleManager.onlyShowFocusOnTabs();

function makeInitialState() {
    return {
        isSignedIn: false,
        isAppReady: false,
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
                window.location.assign("/sso/discord-login?redirect_url=" + window.location.href)
            },

            signOut: () => {
                fetch("/sso/discord-signout").then(() => {
                    window.location.reload();
                }, () => {
                    window.location.reload();
                });
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
