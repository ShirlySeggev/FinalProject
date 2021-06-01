import { connect } from 'react-redux';
import { Component } from 'react';
import { utilService } from '../../services/util-service.js';
import { updateBoard } from '../../store/actions/board.actions.js';
// import { IoAdd } from 'react-icons/Io';


class _TaskAdd extends Component {
    state = {
        task: {
            title: '',
        }
    }

    handleChange = (ev) => {
        var task = { ...this.state.task }
        var { name, value } = ev.target
        task[name] = value;
        this.setState({ task })
    }

    onAddTask = (ev) => {
        ev.preventDefault()
        const taskTitle = this.state.task.title;
        const task = this.createTask(taskTitle);
        const { board, updateBoard, groupId } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === groupId)
        const updatedBoard = { ...board };
        updatedBoard.groups[groupIdx].tasks.push(task);
        updateBoard(updatedBoard);
        this.clearTask();
    }

    clearTask = () => {
        this.setState({
            task: {
                title: '',
            }
        })
    }

    createTask = (title) => {
        const task = {
            id: utilService.makeId(),
            title,
            isDone: false,
            description: '',
            comments: [],
            checklists: [],
            members: [],
            labelIds: [],
            createdAt: Date.now(),
            dueDate: '',
            byMember: {},
            style: {
                bgColor: utilService.getRandmColor()
            }
        }
        return task;
    }
    render() {
        const { title } = this.state.task;
        return (
                <form className="task-add group-layout" onSubmit={this.onAddTask}>
                    <input type="text" name="title" value={title} placeholder="+ Add another card" autoComplete="off" onChange={this.handleChange} />
                </form>

        )
    }
}

function mapStateToProps(state) {
    return {
        board: state.boardModule.board,
    }
}
const mapDispatchToProps = {
    updateBoard,
}

export const TaskAdd = connect(mapStateToProps, mapDispatchToProps)(_TaskAdd)





