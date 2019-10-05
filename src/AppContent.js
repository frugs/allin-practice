import React from 'react';
import MainContent from "./MainContent";
import LoginContent from "./LoginContent";
import moment from "moment-timezone";

class PlaceHolderContent extends React.Component {
    componentDidMount() {
        const {updateAppState} = this.props;
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
                    avatar: data.avatar,
                    player: data.player,
                    league: data.league,
                    continent: data.practice.continent,
                    timezone: data.practice.timezone || moment.tz.guess(),
                    practiceRaces: data.practice.practiceRaces,
                };
                updateAppState({...databaseState, databaseState: databaseState});
            }, (err) => {
                updateAppState({isAppReady: true});
                console.log(err.message);
            });
    }

    render() {
        return "";
    }
}

function AppContent(props) {
    const {isAppReady, isSignedIn, updateAppState} = props;
    if (isAppReady) {
        return isSignedIn ? <MainContent {...props}/> : <LoginContent {...props}/>;
    } else {
        console.log(isAppReady);
        return <PlaceHolderContent updateAppState={updateAppState}/>
    }
}

export default AppContent;