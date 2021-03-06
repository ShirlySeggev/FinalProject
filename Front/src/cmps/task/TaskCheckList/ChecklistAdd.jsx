import { Component } from "react";
import { utilService } from '../../../services/util-service';
import { ModalHeader } from "../../shared/ModalHeader";

export class ChecklistAdd extends Component {
    state = {
        title: '',
    }


    onAddChecklist = () => {

        const { task, updateTask } = this.props
        const { title } = this.state
        if (!title) return
        const newChecklist = this.createNewChecklist(title)
        if (task.checklists) task.checklists.push(newChecklist)
        else task.checklists = [newChecklist]
        updateTask(task)
        this.props.toggleAddCheckList()
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
        const { toggleAddCheckList } = this.props
        return (
            <div className="checklist-new-container">
                <ModalHeader title='Add checklist' closeModal={toggleAddCheckList} />
                <input name="title" label="Title" placeholder="Checklist Header..."
                    onChange={this.handleChange}
                    onKeyDown={this.onEnter}>
                </input>
                <button className="secondary-btn" onClick={this.onAddChecklist}>Add</button>
            </div>
        )
    }
}