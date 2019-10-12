import React from 'react';
import {Card, Classes, Divider, Icon, Intent, Tag} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';
import League from "./League";
import Races from "./Races";
import './ExplorePanel.scss'
import Timezone from "./Timezone";
import Moment from "react-moment";
import DefaultSpinner from "./DefaultSpinner";

const ExploreHeader = () => (
    <div className="Explore-header">
        <div align="right" className="d-flex justify-content-end my-3">
            <span>
                <h5 className={`${Classes.HEADING} my-auto mr-3`}>Show times in:</h5>
            </span>
            <select>
                <option value="playerLocalTime">
                    Player Local Time
                </option>
                <option disabled value="clientLocalTime">
                    My Local Time
                </option>
            </select>
        </div>
    </div>
);

const DayTimeRanges = ({dayTimeRanges}) => {
    if (!Array.isArray(dayTimeRanges) || !dayTimeRanges.length) {
        return (
            <div className={`${Classes.TEXT_MUTED} mb-3 mx-3`}>
                No availability on this day.
            </div>
        );
    }
    const timeFormat = "hh:mm A";

    return (
        <div>
            {dayTimeRanges.map((timeRange, index) => (
                <div className="Explore-day-time-range d-flex justify-content-between mb-3 mx-3" key={index}>
                    <Tag intent={Intent.PRIMARY} large>
                        <Moment format={timeFormat}>{timeRange["from"]}</Moment>
                    </Tag>
                    <Icon icon={IconNames.MINUS} className="my-auto"/>
                    <Tag intent={Intent.PRIMARY} large>
                        <Moment format={timeFormat}>{timeRange["to"]}</Moment>
                    </Tag>
                </div>
            ))}
        </div>
    );
};

const WeekTimeRanges = ({weekTimeRanges}) => {
    const weekDayDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
    ];
    const weekEndDays = [
        "Saturday",
        "Sunday",
    ];
    return (
        <Card className="mt-4">
            <div className="mb-4">
                <h4 className={`${Classes.HEADING} mb-2`}>Availability</h4>
            </div>
            {weekDayDays.map((day) => (
                <div key={day}>
                    <h5 className={`${Classes.HEADING}`}>{day}</h5>
                    <DayTimeRanges dayTimeRanges={weekTimeRanges[`timeRanges${day}`]} key={day}/>
                </div>
            ))}
            <Divider className="mb-4"/>
            {weekEndDays.map((day) => (
                <div key={day}>
                    <h5 className={`${Classes.HEADING}`}>{day}</h5>
                    <DayTimeRanges dayTimeRanges={weekTimeRanges[`timeRanges${day}`]} key={day}/>
                </div>
            ))}
        </Card>
    );
};

class ExplorePanel extends React.Component {

    componentDidMount() {
        const {loadMemberProfiles} = this.props;
        loadMemberProfiles();
    }

    render() {
        const {isExplorePanelReady, members} = this.props;
        if (!isExplorePanelReady) {
            return (
                <DefaultSpinner/>
            );
        }

        return (
            <div>
                <ExploreHeader/>
                <div className="Explore-body">
                    {
                        members.map((member, index) => (
                            <div key={index} className="Explore-card mt-3 mb-5">
                                <div align="left"
                                     className="d-flex align-items-center Explore-summary-container-responsive">
                                    <img
                                        src={member.avatar}
                                        width="150"
                                        height="150"
                                        className="Explore-avatar mx-2 mb-2"
                                        alt="Avatar"
                                    />
                                    <span className="mx-3 py-2">
                                        <div align="left" className="d-flex flex-column align-items-start">
                                            <span className="Explore-player-name-responsive mb-3">
                                                <h2 className={Classes.HEADING}>
                                                    {member.player}
                                                </h2>
                                            </span>

                                            <League league={member.league}/>
                                            <Races practiceRaces={member.practiceRaces}/>
                                            <Timezone timezone={member.timezone}/>
                                        </div>
                                    </span>
                                </div>
                                <WeekTimeRanges weekTimeRanges={member}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}


export default ExplorePanel;