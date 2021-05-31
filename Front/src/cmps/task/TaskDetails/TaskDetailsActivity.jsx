import { Component, Fragment } from 'react';
import { formatDistance } from 'date-fns'
import { utilService } from '../../../services/util-service.js';
import { SectionTitle } from '../../shared/SectionTitle.jsx';
import { BiCommentDots } from 'react-icons/bi';
import MemberAvatar from '../../shared/MemberAvatar.jsx';

export class TaskDetailsActivity extends Component {
    state = {
        toggleActivity: false,
        comment: {
            txt: ''
        },
        activities: []
    }

    componentDidMount() {
        const { board } = this.props;
        const { id } = this.props.task;
        const activities = board.activities.filter(activity => {
            if (activity.task) {
                return activity.task.id === id;
            }
        })
        this.setState({ activities })
    }

    onToggleActivity = () => {
        this.setState({ toggleActivity: !this.state.toggleActivity })
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(prevState => {
            return {
                comment: {
                    ...prevState.comment,
                    [field]: value
                }
            }
        })
    }

    onEnter = ev => {
        if (ev.key === "Enter" && ev.shiftKey === false) {
            ev.preventDefault()
            this.addComment()
        }
    }

    addComment = () => {
        const newComment = {
            id: utilService.makeId(),
            createdAt: Date.now(),
            txt: this.state.comment,
            byMember: {
                _id: "u101",
                fullname: "Tal Tarablus",
            }
        }
    }



    render() {
        const { toggleActivity, activities } = this.state;
        const { txt } = this.state.comment;

        return (

            <div className="taskActivity-container" >
                <div className="activity-header">
                    <SectionTitle Icon={BiCommentDots}>Activity</SectionTitle>
                    <button className="secondary-btn" onClick={this.onToggleActivity}>{toggleActivity ? 'Hide details' : 'Show details'}</button>
                </div>
                {toggleActivity && <Fragment>
                    {activities.map(activity => {
                        return <div key={activity.id}>
                            {/* <img src={activity.byMember.imgUrl} /> */}
                            <div className="activity">
                            <MemberAvatar member={activity.byMember} />
                            <div className="activity-description">
                                <p ><span>{activity.byMember.fullname}</span> {activity.txt} to {activity.task.title}</p>
                                <p>{formatDistance(activity.createdAt, Date.now())} ago</p>
                            </div>
                            </div>
                        </div>
                    })
                    }
                </Fragment>
                }

            </div>

        )
    }
}