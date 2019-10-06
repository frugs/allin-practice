import React from 'react';
import {Button, Classes, Intent, Tooltip} from '@blueprintjs/core'
import {IconNames} from "@blueprintjs/icons";
import TimeRangePicker from "./TimeRangePicker";

const defaultTime = "1899-12-31T00:00:00.000Z";

function AddButton({day, timeRanges, updateAppState}) {
    const stateKey = `timeRanges${day}`;
    return (
        <Tooltip content="Add a time range">
            <Button
                small
                intent={Intent.PRIMARY}
                minimal
                className="ml-1 mr-2"
                icon={IconNames.SMALL_PLUS}
                onClick={
                    () => {
                        let newTimeRanges = [...timeRanges, {from: defaultTime, to: defaultTime}];
                        updateAppState({[stateKey]: newTimeRanges})
                    }
                }
            />
        </Tooltip>
    );
}

function RemoveButton({day, timeRanges, updateAppState}) {
    const stateKey = `timeRanges${day}`;
    return (
        <Tooltip content="Remove this time range">
            <Button
                small
                intent={Intent.DANGER}
                minimal
                className="ml-2 mr-1"
                icon={IconNames.SMALL_MINUS}
                onClick={
                    () => {
                        let newTimeRanges = timeRanges.slice(0, timeRanges.length - 1);
                        updateAppState({[stateKey]: newTimeRanges})
                    }
                }
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
                                    from={new Date(timeRanges[key].from)}
                                    to={new Date(timeRanges[key].to)}
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
                                                    day={day}
                                                    timeRanges={timeRanges}
                                                    updateAppState={updateAppState}
                                                />
                                                <RemoveButton
                                                    day={day}
                                                    timeRanges={timeRanges}
                                                    updateAppState={updateAppState}
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
                <AddButton
                    day={day}
                    timeRanges={timeRanges}
                    updateAppState={updateAppState}
                />
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