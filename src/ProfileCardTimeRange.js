import React from 'react';
import ProfileCardTimeRangeDateTimePicker from './ProfileCardTimeRangeDateTimePicker'
import './ProfileCard.css';

function ProfileCardTimeRange() {
    const daysOfTheWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    return (
        <div className="card Profile-card">
            <div className="h4 font-weight-normal mb-4">
                The times during the week you are available for practice:
            </div>
            <table>
                <colgroup>
                    <col style={{width: "10%"}}/>
                </colgroup>
                <tbody>
                {daysOfTheWeek.map((value, index) => {
                    return <tr key={index}>
                        <td className="px-4 text-center">
                            <h5 className="text-primary font-weight-normal">{value}</h5>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                <tr>
                                    <td>From:</td>
                                    <td><ProfileCardTimeRangeDateTimePicker placeholder="From time"/></td>
                                </tr>
                                <tr>
                                    <td>To:</td>
                                    <td><ProfileCardTimeRangeDateTimePicker placeholder="To time"/></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
}

export default ProfileCardTimeRange;
