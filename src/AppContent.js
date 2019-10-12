import React from 'react';
import MainContent from "./MainContent";
import LoginContent from "./LoginContent";
import DefaultSpinner from "./DefaultSpinner";

class PlaceHolderContent extends React.Component {
    componentDidMount() {
        const {loadProfile} = this.props;
        loadProfile();
    }

    render() {
        return (
            <DefaultSpinner/>
        );
    }
}

function AppContent(props) {
    const {isAppReady, isSignedIn, loadProfile, signIn} = props;
    if (isAppReady) {
        return isSignedIn ? <MainContent {...props}/> : <LoginContent signIn={signIn}/>;
    } else {
        return <PlaceHolderContent loadProfile={loadProfile}/>
    }
}

export default AppContent;