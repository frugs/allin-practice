import React from 'react';
import MainContent from "./MainContent";
import LoginContent from "./LoginContent";

class PlaceHolderContent extends React.Component {
    componentDidMount() {
        const {loadProfile} = this.props;
        loadProfile();
    }

    render() {
        return "";
    }
}

function AppContent(props) {
    const {isAppReady, isSignedIn, loadProfile, signIn} = props;
    if (isAppReady) {
        return isSignedIn ? <MainContent {...props}/> : <LoginContent signIn={signIn}/>;
    } else {
        console.log(isAppReady);
        return <PlaceHolderContent loadProfile={loadProfile}/>
    }
}

export default AppContent;