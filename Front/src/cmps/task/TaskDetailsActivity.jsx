import { Component } from 'react';
import EasyEdit, { Types } from 'react-easy-edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { utilService } from '../../services/util-service.js';
import { updateBoard } from '../../store/actions/board.actions.js';
import { TextField } from '@material-ui/core';
import MemberAvatar from '../MemberAvatar';


export class TaskDetailsActivity extends Component {
    state = {
        toggleActivity: false,
        comment: {
            txt: ''
        },
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
        const { toggleActivity } = this.state;
        const { txt } = this.state.comment;
        // console.log(this.props.task.comments);
        // const { byMember } = this.props.task.comments;
        // console.log(byMember);
        return (

            <div className="taskActivity" >
                {/* <MemberAvatar member={byMember} /> */}

                <TextField name="txt" value={txt} placeholder="Write a comment..." onChange={this.handleChange} onKeyDown={this.onEnter}></TextField>
            </div>

        )
    }
}