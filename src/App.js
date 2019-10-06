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
        timeRangesMonday: [],
        timeRangesTuesday: [],
        timeRangesWednesday: [],
        timeRangesThursday: [],
        timeRangesFriday: [],
        timeRangesSaturday: [],
        timeRangesSunday: [],
        databaseState: {},
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...makeInitialState(),
            updateAppState: (state) => {
                this.setState(state);
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
            },

            resetState: () => {
                const {databaseState} = this.state;
                if (databaseState) {
                    this.setState(databaseState);
                } else {
                    this.setState(makeInitialState());
                }
            },

            submitProfile: () => {
                const {
                    practiceRaces,
                    timezone,
                    timeRangesMonday,
                    timeRangesTuesday,
                    timeRangesWednesday,
                    timeRangesThursday,
                    timeRangesFriday,
                    timeRangesSaturday,
                    timeRangesSunday,
                } = this.state;

                fetch('/practice_backend/member-practice', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        practiceRaces: practiceRaces,
                        timezone: timezone,
                        timeRangesMonday: timeRangesMonday,
                        timeRangesTuesday: timeRangesTuesday,
                        timeRangesWednesday: timeRangesWednesday,
                        timeRangesThursday: timeRangesThursday,
                        timeRangesFriday: timeRangesFriday,
                        timeRangesSaturday: timeRangesSaturday,
                        timeRangesSunday: timeRangesSunday,
                    })
                }).then(() => {
                    window.location.reload();
                });
            },
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
