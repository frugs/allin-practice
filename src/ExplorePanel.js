import React from 'react';
import {Card, Classes, Divider, Icon, Intent, Tag} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';
import League from "./League";
import Races from "./Races";
import './ExplorePanel.scss'
import Timezone from "./Timezone";
import Moment from "react-moment";

const ExploreHeader = () => (
    <div className="Explore-header">
        <div align="right" className="Explore-card d-flex justify-content-end my-3">
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
    if (!dayTimeRanges) {
        return (
            <div className={`${Classes.TEXT_MUTED} mb-3 mx-3`}>
                No availability on this day.
            </div>
        );
    }
    const timeFormat = "hh:mm A";

    return (
        <div>
            {dayTimeRanges.map((timeRange) => (
                <div className="Explore-day-time-range d-flex justify-content-between mb-3 mx-3">
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
                <div>
                    <h5 className={`${Classes.HEADING}`}>{day}</h5>
                    <DayTimeRanges dayTimeRanges={weekTimeRanges[`timeRanges${day}`]} key={day}/>
                </div>
            ))}
            <Divider className="mb-4"/>
            {weekEndDays.map((day) => (
                <div>
                    <h5 className={`${Classes.HEADING}`}>{day}</h5>
                    <DayTimeRanges dayTimeRanges={weekTimeRanges[`timeRanges${day}`]} key={day}/>
                </div>
            ))}
        </Card>
    );
};

class ExplorePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
        };
    }

    componentDidMount() {
        this.setState({
            members: [
                {
                    player: "Hugo \"frugs\" Wainwright",
                    avatar: "https://cdn.discordapp.com/avatars/114041046828056579/a78d511a528f641e4a131b37d3dc33b2",
                    practiceRaces: ["Zerg", "Protoss"],
                    league: "Master",
                    timezone: "Europe/London",
                    timeRangesMonday: [{from: "1899-12-31T00:00:00.000Z", to: "1899-12-31T00:00:00.000Z"}],
                }
            ]
        })
    }

    render() {
        return (
            <div>
                <ExploreHeader/>
                <div className="Explore-body">
                    {
                        this.state.members.map((member, index) => (
                            <Card key={index} className="Explore-card">
                                <div align="left"
                                     className="d-flex align-items-center Explore-summary-container">
                                    <img
                                        src={member.avatar}
                                        width="150"
                                        height="150"
                                        className="Explore-avatar mx-2"
                                        alt="Avatar"
                                    />
                                    <span className="mx-3">
                                        <div align="left" className="d-flex flex-column align-items-start my-auto">
                                            <h2 className={`Explore-player-name ${Classes.HEADING} mb-3`}>
                                                {member.player}
                                            </h2>
                                            <League league={member.league}/>
                                            <Races practiceRaces={member.practiceRaces}/>
                                            <Timezone timezone={member.timezone}/>
                                        </div>
                                    </span>
                                </div>
                                <WeekTimeRanges weekTimeRanges={member}/>
                            </Card>
                        ))
                    }
                </div>
            </div>
        );
    }
}


export default ExplorePanel;