import React from 'react';
import {Alignment, Button, Classes, Intent, Navbar, Popover, Position} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';
import './AppHeader.css';
import AllinLogo from './allin_logo.png';

const HeaderLogo = () => (
    <img
        src={AllinLogo}
        width="35"
        height="30"
        className="mx-2 my-auto"
        alt=""
    />
);

const AvatarPlayer = ({className, avatar, player}) => (
    <div className={`${className} d-flex`}>
        <img
            src={avatar}
            width="35"
            height="35"
            className="AppHeader-navbar-avatar mr-2 my-auto"
            alt="Avatar"
        />
        <span
            className={`${Classes.TEXT_LARGE} AppHeader-navbar-player my-auto`}
        >
            {player}
        </span>
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
                <Popover
                    fill
                    target={
                        <Button className={Classes.MINIMAL}>
                            <AvatarPlayer avatar={avatar} player={player}/>
                        </Button>
                    }
                    content={
                        <div className="AppHeader-navbar-avatar-player-popover">
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
                        <HeaderLogo/>
                        <span style={allinRedStyle}>All</span>-<span style={allinRedStyle}>In</span>spiration Practice
                    </Navbar.Heading>
                    <Navbar.Heading className="AppHeader-navbar-heading-small">
                        <HeaderLogo/>
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
