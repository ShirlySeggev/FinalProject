import { Component } from 'react';
import EasyEdit, { Types } from 'react-easy-edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';


export class TaskDetailsHeader extends Component {
    state = {
        title: null
    }

    componentDidMount() {
        this.setState({ title: this.props.task.title })
    }

    updateTaskTitle = (title) => {
        const { task } = this.props
        const newTask = { ...task, title }
        this.props.updateTask(newTask)
    }

    render() {
        const { title } = this.state
        const { group } = this.props
        return (
            <header className="task-details-header">
                <EasyEdit
                    type={Types.TEXT}
                    value={title}
                    onSave={this.updateTaskTitle}
                    onBlur={this.updateTaskTitle}
                    saveButtonLabel={<FontAwesomeIcon icon={faCheck} />}
                    cancelButtonLabel={<FontAwesomeIcon icon={faTimes} />}
                />
                <p className="taskDetails-header-subtext">in list <span>{group.title}</span></p>
            </header>
        )
    }

}
