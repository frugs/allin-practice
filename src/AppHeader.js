import React from 'react';
import {Alignment, Button, Classes, Intent, Menu, MenuItem, Navbar, Popover, Position} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';
import './AppHeader.css';
import AllinLogo from './allin_logo.png';

const AvatarPlayer = ({className, avatar, player}) => (
    <div className={className}>
        <img
            src={avatar}
            width="35"
            height="35"
            className="mr-2 AppHeader-navbar-avatar"
            alt="Avatar"
        />
        <span
            className={`${Classes.TEXT_LARGE} AppHeader-navbar-username`}>{player}</span>
    </div>
);

const SignOutButton = ({className, signOut}) => (
    <Button
        className={className}
        intent={Intent.PRIMARY}
        fill
        icon={IconNames.LOG_OUT}
        onClick={signOut}
    >
        Sign out
    </Button>
);

function SignedInNavbarGroup({avatar, player, signOut}) {
    return (
        <Navbar.Group align={Alignment.RIGHT}>
            <div className="AppHeader-navbar-signed-in-large">
                <Button minimal icon={IconNames.NOTIFICATIONS} className="mx-2 px-3 py-2"/>
                <Popover
                    fill
                    target={
                        <Button className={Classes.MINIMAL}>
                            <AvatarPlayer avatar={avatar} player={player}/>
                        </Button>
                    }
                    content={
                        <div className="AppHeader-navbar-avatar-username-popover">
                            <SignOutButton signOut={signOut}/>
                        </div>
                    }
                />
            </div>
            <div className="AppHeader-navbar-signed-in-small">
                <Popover
                    minimal
                    content={
                        <div className="AppHeader-navbar-signed-in-menu-popover p-2">
                            <AvatarPlayer className="mt-2 mb-3" avatar={avatar} player={player}/>
                            <SignOutButton className="my-2" signOut={signOut}/>
                        </div>
                    }
                    position={Position.BOTTOM_RIGHT}>
                    <Button large icon={IconNames.MENU} minimal/>
                </Popover>
            </div>
        </Navbar.Group>
    );
}

function AppHeader({isSignedIn, avatar, player, signOut}) {
    const allinRedStyle = {color: "#EC222E"};

    return (
        <header>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}
                              className="AppHeader-navbar-heading">
                    <Navbar.Heading className="AppHeader-navbar-heading-large">
                        <img
                            src={AllinLogo}
                            width="35"
                            height="30"
                            className="mx-2"
                            alt=""
                        />
                        <span style={allinRedStyle}>All</span>-<span style={allinRedStyle}>In</span>spiration Practice
                    </Navbar.Heading>
                    <Navbar.Heading className="AppHeader-navbar-heading-small">
                        <img
                            src={AllinLogo}
                            width="35"
                            height="30"
                            className="mr-2 my-auto"
                            alt=""
                        />
                        <span>
                            <div>
                                <span style={allinRedStyle}>All</span>-<span style={allinRedStyle}>In</span>spiration
                            </div>
                            <div>
                                Practice
                            </div>
                        </span>
                    </Navbar.Heading>
                </Navbar.Group>
                {
                    isSignedIn
                        ? <SignedInNavbarGroup avatar={avatar} player={player} signOut={signOut}/>
                        : null
                }
            </Navbar>
        </header>
    );
}

export default AppHeader;
