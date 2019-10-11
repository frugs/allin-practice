import React from 'react';
import {FocusStyleManager} from "@blueprintjs/core";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import './App.scss';
import DefaultAvatar from './default_avatar.png';
import moment from "moment-timezone";

FocusStyleManager.onlyShowFocusOnTabs();

function makeInitialState() {
    return {
        isSignedIn: false,
        isAppReady: false,
        avatar: DefaultAvatar,
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

            loadProfile: () => {
                fetch("/practice_backend/member")
                    .then((response) => {
                        if (!response.ok) {
                            throw Error(response.statusText);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        const databaseState = {
                            isSignedIn: true,
                            isAppReady: true,
                            avatar: data.avatar || DefaultAvatar,
                            player: data.player,
                            league: data.league,
                            timezone: data.practice.timezone || moment.tz.guess(),
                            practiceRaces: data.practice.practiceRaces,
                            timeRangesMonday: data.practice.timeRangesMonday || [],
                            timeRangesTuesday: data.practice.timeRangesTuesday || [],
                            timeRangesWednesday: data.practice.timeRangesWednesday || [],
                            timeRangesThursday: data.practice.timeRangesThursday || [],
                            timeRangesFriday: data.practice.timeRangesFriday || [],
                            timeRangesSaturday: data.practice.timeRangesSaturday || [],
                            timeRangesSunday: data.practice.timeRangesSunday || [],
                        };
                        this.setState({...databaseState, databaseState: databaseState});
                    }, (err) => {
                        this.setState({isAppReady: true});
                        console.log(err.message);
                    });
            },

            submitProfile: () => {
                const {
                    player,
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
                        player: player,
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
