import { Component, Fragment } from 'react';
import { formatDistance } from 'date-fns'
import { utilService } from '../../services/util-service.js';
import { updateBoard } from '../../store/actions/board.actions.js';
import { SectionTitle } from './TaskDetails/SectionTitle.jsx';
import {BiCommentDots} from 'react-icons/bi'

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
                    <SectionTitle 
                    Icon={BiCommentDots}
>Activity</SectionTitle>
                    <h1>Activity</h1>
                    <button onClick={this.onToggleActivity}>{toggleActivity ? 'Hide activity' : 'Show activity'}</button>
                </div>
                {toggleActivity && <Fragment>
                    {activities.map(activity => {
                        return <div key={activity.id}>
                            <img src={activity.byMember.imgUrl} />
                            <div>
                                <p>{activity.byMember.fullname} </p>
                                <p>{activity.txt} </p>
                                <p>{activity.task.title}</p>
                            </div>
                            <div className="activity-date">
                                <p>{formatDistance(activity.createdAt, Date.now())}</p>
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