import React from 'react';
import './AppHeader.css';
import {Alignment, Button, Classes, Navbar} from '@blueprintjs/core';

function AppHeader() {
    let allinRedStyle = {color: "#EC222E"};

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
                    <Button className={Classes.MINIMAL}>
                        <img
                            src="https://cdn.discordapp.com/avatars/114041046828056579/a78d511a528f641e4a131b37d3dc33b2"
                            width="35"
                            height="35"
                            className="mr-2 AppHeader-navbar-avatar"
                            alt="Avatar"
                        />
                        <span
                            className={`${Classes.TEXT_LARGE} AppHeader-navbar-username`}>Hugo "frugs" Wanwright</span>
                    </Button>
                </Navbar.Group>
            </Navbar>
        </header>
    );
}

export default AppHeader;
