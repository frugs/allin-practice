import React from 'react';
import './AppHeader.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function AppHeader() {
    let allinRedStyle = {color: "#EC222E"};

    return (
        <header>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home" className="AppHeader-navbar-brand">
                    <img
                        src="/AllinStandardTextless.png"
                        width="35"
                        height="30"
                        className="mx-2"
                        alt=""
                    />
                    <span style={allinRedStyle}>All</span>-<span style={allinRedStyle}>In</span>spiration Practice
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <img
                        src="https://cdn.discordapp.com/avatars/114041046828056579/a78d511a528f641e4a131b37d3dc33b2"
                        width="35"
                        height="35"
                        className="mr-2 AppHeader-navbar-avatar"
                        alt="Avatar"
                    />
                    <Navbar.Text className="mx-2 AppHeader-navbar-username">
                        Hugo "frugs" Wainwright
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <Nav variant="tabs" defaultActiveKey="profile">
                <Nav.Item className="ml-4">
                    <Nav.Link eventKey="profile" className="px-3 d-flex align-items-center">
                        <img
                            src="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/png/person-2x.png"
                            alt="Profile"
                            width="15"
                            height="15"
                            className="mx-2"
                        />
                        Profile
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="search" className="px-3 d-flex align-items-center">
                        <img
                            src="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/png/magnifying-glass-2x.png"
                            alt="Search"
                            width="15"
                            height="15"
                            className="mx-2"
                        />
                        Search
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="explore" className="px-3 d-flex align-items-center">
                        <img
                            src="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/png/globe-2x.png  "
                            alt="Explore"
                            width="15"
                            height="15"
                            className="mx-2"
                        />
                        Explore
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    );
}

export default AppHeader;
