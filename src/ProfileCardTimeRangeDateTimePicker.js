import React from 'react';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import './ProfileCardTimeRangeDateTimePicker.scss';

Moment.locale('en');
momentLocalizer();

function ProfileCardTimeRangeDateTimePicker(props) {
    return (
        <DateTimePicker
            date={false}
            className="d-inline-block ProfileCardTimeRange-date-time-picker"
            timeIcon={
                <div className="d-flex flex-column align-items-center">
                    <img
                        src="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/png/clock-4x.png"
                        width="20"
                        height="20"
                        className="AppUtil-inline-icon"
                        alt="Time Selector"
                    />
                </div>
            }
            {...props}
        />
    );
}

export default ProfileCardTimeRangeDateTimePicker;
