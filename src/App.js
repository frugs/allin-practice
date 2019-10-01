import React from 'react';
import './App.scss';
import AppHeader from "./AppHeader";
import Profile from "./Profile";

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
            <div className="App">
                <AppHeader {...this.state}/>

                <div className="App-content">
                    <Profile {...this.state}/>
                </div>
            </div>
        );
    }
}

export default App;
