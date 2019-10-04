import React from 'react';
import {Alignment, Button, Classes, Intent, Navbar, Popover} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';
import './AppHeader.css';
import AllinLogo from './allin_logo.png';

function SignedInNavbarGroup({avatar, player, signOut}) {
    return (
        <Navbar.Group align={Alignment.RIGHT}>
            <Button minimal icon={IconNames.NOTIFICATIONS} className="mx-2 px-3 py-2"/>
            <Popover
                fill
                target={
                    <Button className={Classes.MINIMAL}>
                        <img
                            src={avatar}
                            width="35"
                            height="35"
                            className="mr-2 AppHeader-navbar-avatar"
                            alt="Avatar"
                        />
                        <span
                            className={`${Classes.TEXT_LARGE} AppHeader-navbar-username`}>{player}</span>
                    </Button>
                }
                content={
                    <div className="AppHeader-navbar-avatar-username-popover">
                        <Button
                            intent={Intent.PRIMARY}
                            fill
                            icon={IconNames.LOG_OUT}
                            onClick={signOut}
                        >
                            Sign out
                        </Button>
                    </div>
                }
            />
        </Navbar.Group>
    );
}

function AppHeader({isSignedIn, avatar, player, signOut}) {
    const allinRedStyle = {color: "#EC222E"};

    return (
        <header>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT} className="AppHeader-navbar-heading">
                    <Navbar.Heading>
                        <img
                            src={AllinLogo}
                            width="35"
                            height="30"
                            className="mx-2"
                            alt=""
                        />
                        <span style={allinRedStyle}>All</span>-<span style={allinRedStyle}>In</span>spiration Practice
                    </Navbar.Heading>
                </Navbar.Group>
                {isSignedIn ? <SignedInNavbarGroup avatar={avatar} player={player} signOut={signOut}/> : ""}
            </Navbar>
        </header>
    );
}

export default AppHeader;
