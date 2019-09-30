import React from 'react';
import './App.css';
import AppHeader from "./AppHeader";
import Profile from "./Profile";

function App() {
    return (
        <div className="App">
            <AppHeader/>

            <div className="App-content">
                <Profile/>
            </div>
        </div>
    );
}

export default App;
