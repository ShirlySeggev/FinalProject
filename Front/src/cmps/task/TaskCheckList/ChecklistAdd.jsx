import { Component } from "react";
import { utilService } from '../../../services/util-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TextField } from '@material-ui/core';

export class ChecklistAdd extends Component {
    state = {
        title: '',
        isOpen: false
    }

    toggleAddChecklist = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    onAddChecklist = () => {
        const { task, updateTask } = this.props
        const { title } = this.state
        const newChecklist = this.createNewChecklist(title)
        if (task.checklists) task.checklists.push(newChecklist)
        else task.checklists = [newChecklist]
        updateTask(task)
        this.toggleAddChecklist()
    }

    onEnter = (ev) => {
        if (ev.key === "Enter" && ev.shiftKey === false) {
            ev.preventDefault()
            this.onAddChecklist()
        }
    }


    createNewChecklist = (title) => {
        const checklist = {
            id: utilService.makeId(),
            title,
            todos: []
        }
        return checklist
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState({ [field]: value })
    }



    render() {
        const { title, isOpen } = this.state
        if (!isOpen) return <div onClick={this.toggleAddChecklist}>
            {<FontAwesomeIcon icon={faCheckSquare} />}
            Checklist
            </div>

        return (
            <div className="checklist-add-container">
                <TextField id="title" name="title" label="Title" variant="filled" placeholder="Write a comment..."
                    onChange={this.handleChange}
                    onKeyDown={this.onEnter}>
                </TextField>
                <div className="checklist-add-actions">
                <button onClick={this.onAddChecklist}>Add</button>
                <button onClick={this.toggleAddChecklist}>{<FontAwesomeIcon icon={faTimes} />}</button>
                </div>
            </div>
        )
    }
}