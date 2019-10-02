import React from 'react';
import {Button, Classes, Intent} from '@blueprintjs/core'
import {IconNames} from "@blueprintjs/icons";
import TimeRangePicker from "./TimeRangePicker";

class MultiTimeRangePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numPickers: 1
        }
    }

    renderTimeRangePickers() {
        if (this.state.numPickers) {
            const timeRangePickerKeys = [...Array(this.state.numPickers).keys()];
            return (
                <div className="mb-3">
                    {
                        timeRangePickerKeys.map((key) => {
                            return (
                                <div className="d-flex">
                                    <TimeRangePicker {...this.props}/>
                                    {(() => {
                                        if (key === timeRangePickerKeys.length - 1) {
                                            return (
                                                <div className="d-flex align-items-center">
                                                    <Button
                                                        small
                                                        intent={Intent.DANGER}
                                                        minimal
                                                        className="ml-2 mr-1"
                                                        icon={IconNames.SMALL_MINUS}
                                                        onClick={() => this.setState({numPickers: this.state.numPickers - 1})}
                                                    />
                                                    <Button
                                                        small
                                                        intent={Intent.PRIMARY}
                                                        minimal
                                                        className="ml-1 mr-2"
                                                        icon={IconNames.SMALL_PLUS}
                                                        onClick={
                                                            () => this.setState({numPickers: this.state.numPickers + 1})
                                                        }
                                                    />
                                                </div>
                                            );
                                        }
                                    })()}
                                </div>
                            );
                        })
                    }
                </div>
            );
        } else {
            return (
                <div className={`${Classes.TEXT_MUTED} mb-3 mx-3`}>
                    No availability on this day.
                    <Button
                        small
                        intent={Intent.PRIMARY}
                        minimal
                        className="mx-2"
                        icon={IconNames.SMALL_PLUS}
                        onClick={
                            () => this.setState({numPickers: this.state.numPickers + 1})
                        }
                    />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderTimeRangePickers()}
            </div>
        );
    }
}

export default MultiTimeRangePicker;