import React from 'react';
import {TimePicker} from "@blueprintjs/datetime";

function TimeRangePicker(props) {
    return (
        <div className="d-flex align-items-center">
            <span className="mx-3">From:</span>
            <TimePicker {...props} placeholder="From time"/>
            <span className="mx-3">To:</span>
            <TimePicker {...props} placeholder="To time"/>
        </div>
    );
}

export default TimeRangePicker;