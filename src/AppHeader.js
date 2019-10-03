import React from 'react';
import './AppHeader.css';
import {Alignment, Button, Classes, Navbar} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

function AppHeader({avatar, player}) {
    const allinRedStyle = {color: "#EC222E"};

    return (
        <header>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT} className="AppHeader-navbar-heading">
                    <Navbar.Heading>
                        <img
                            src="/AllinStandardTextless.png"
                            width="35"
                            height="30"
                            className="mx-2"
                            alt=""
                        />
                        <span style={allinRedStyle}>All</span>-<span style={allinRedStyle}>In</span>spiration Practice
                    </Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Button minimal icon={IconNames.NOTIFICATIONS} className="mx-2 px-3 py-2"/>
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
                </Navbar.Group>
            </Navbar>
        </header>
    );
}

export default AppHeader;
