import React from 'react';
import {TimePicker} from "@blueprintjs/datetime";

function TimeRangePicker(props) {
    let {from, to, onFromChange, onToChange} = props;
    return (
        <div className="d-flex align-items-center">
            <span className="mx-3">From:</span>
            <TimePicker {...props} value={from} placeholder="From time" onChange={(time) => onFromChange(time)}/>
            <span className="mx-3">To:</span>
            <TimePicker {...props} value={to} placeholder="To time" onChange={(time) => onToChange(time)}/>
        </div>
    );
}

export default TimeRangePicker;