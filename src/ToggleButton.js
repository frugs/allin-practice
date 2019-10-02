import React from 'react';
import {Button} from '@blueprintjs/core';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: props.pressed
        }
    }

    togglePressed() {
        this.setState({pressed: !this.state.pressed});
    }

    forwardClick(event) {
        if (this.props.onClick) {
            this.props.onClick(event)
        }
    }

    render() {
        return (
            <Button active={this.state.pressed} {...this.props} onClick={(event) => {
                this.togglePressed();
                this.forwardClick(event);
            }}>
                {this.props.children}
            </Button>
        );
    }
}

export default ToggleButton;