import React from 'react';
import {TimePicker} from "@blueprintjs/datetime";
import './TimeRangePicker.css';

function TimeRangePicker(props) {
    let {from, to, onFromChange, onToChange} = props;
    return (
        <div className="d-flex align-items-center mr-2 TimeRangePicker-responsive">
            <div className="d-flex flex-row mr-3">
                <span className="w-25 mx-3 my-auto text-right">From:</span>
                <TimePicker {...props} value={from} placeholder="From time" onChange={(time) => onFromChange(time)}/>
            </div>
            <div className="d-flex flex-row mr-3">
                <span className="w-25 mx-3 my-auto text-right">To:</span>
                <TimePicker {...props} value={to} placeholder="To time" onChange={(time) => onToChange(time)}/>
            </div>
        </div>
    );
}

export default TimeRangePicker;