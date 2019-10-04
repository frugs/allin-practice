import React from 'react';
import {Button, Card, Classes, Elevation} from '@blueprintjs/core';
import './LoginContent.scss';
import './AppUtil.css';
import AllinOfficial from './allin_official.png';

function LoginContent({signIn}) {
    return (
        <Card className="mx-auto my-5 LoginContent-card" elevation={Elevation.FOUR}>
            <div className="row h-100">
                <div className="align-self-center text-center p-5 w-100">
                    <img
                        src={AllinOfficial}
                        alt="All-Inspiration"
                        width="300"
                        className="mb-5"
                        style={{"object-fit": "contain"}}
                    />
                    <div><h2 className={Classes.HEADING}>Welcome to All-Inspiraction Practice!</h2></div>
                    <Button
                        large
                        className="my-3 LoginContent-discord-login-button"
                        onClick={signIn}
                    >
                        <img
                            src="https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png"
                            className="AppUtil-inline-icon mr-2"
                            height="40"
                            width="40"
                            alt="Discord"
                        />
                        Sign in using Discord
                    </Button>
                </div>
            </div>
        </Card>

    );
}

export default LoginContent;