import React from 'react';
import {Button, Classes, Intent, Tooltip} from '@blueprintjs/core'
import {IconNames} from "@blueprintjs/icons";
import TimeRangePicker from "./TimeRangePicker";

function AddButton(props) {
    return (
        <Tooltip content="Add a time range">
            <Button
                {...props}
                small
                intent={Intent.PRIMARY}
                minimal
                className="ml-1 mr-2"
                icon={IconNames.SMALL_PLUS}
            />
        </Tooltip>
    );
}

function RemoveButton(props) {
    return (
        <Tooltip content="Remove this time range">
            <Button
                {...props}
                small
                intent={Intent.DANGER}
                minimal
                className="ml-2 mr-1"
                icon={IconNames.SMALL_MINUS}
            />
        </Tooltip>
    );
}

function TimeRangePickers(props) {
    let {timeRanges, day, updateAppState} = props;
    const stateKey = `timeRanges${day}`;
    if (timeRanges.length > 0) {
        return (
            <div className="mb-3">
                {
                    timeRanges.map(({from, to}, key) => {
                        return (
                            <div key={key} className="d-flex">
                                <TimeRangePicker
                                    {...props}
                                    from={timeRanges[key].from}
                                    to={timeRanges[key].to}
                                    onFromChange={(time) => {
                                        let newTimeRanges = [...timeRanges];
                                        newTimeRanges[key].from = time;
                                        updateAppState({[stateKey]: newTimeRanges});
                                    }}
                                    onToChange={(time) => {
                                        let newTimeRanges = [...timeRanges];
                                        newTimeRanges[key].to = time;
                                        updateAppState({[stateKey]: newTimeRanges});
                                    }}
                                />
                                {(() => {
                                    if (key === timeRanges.length - 1) {
                                        return (
                                            <div className="d-flex align-items-center">
                                                <AddButton
                                                    onClick={
                                                        () => {
                                                            let newTimeRanges = [...timeRanges, {}];
                                                            updateAppState({[stateKey]: newTimeRanges})
                                                        }
                                                    }
                                                />
                                                <RemoveButton
                                                    onClick={
                                                        () => {
                                                            let newTimeRanges = timeRanges.slice(0, timeRanges.length - 1);
                                                            updateAppState({[stateKey]: newTimeRanges})
                                                        }
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
                <AddButton onClick={() => {
                    let newTimeRanges = [...timeRanges, {}];
                    updateAppState({[stateKey]: newTimeRanges})
                }}/>
            </div>
        )
    }
}

function MultiTimeRangePicker(props) {
    return (
        <TimeRangePickers {...props}/>
    );
}

export default MultiTimeRangePicker;