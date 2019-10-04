import React from 'react';
import MainContent from "./MainContent";
import LoginContent from "./LoginContent";

function AppContent(props) {
    const {isSignedIn} = props;
    return isSignedIn ? <MainContent {...props}/> : <LoginContent {...props}/>;
}

export default AppContent;