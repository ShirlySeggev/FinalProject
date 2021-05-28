import { connect } from 'react-redux';
import { Component } from 'react';
import EasyEdit, { Types } from 'react-easy-edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { utilService } from '../../services/util-service.js';
import { updateBoard } from '../../store/actions/board.actions.js';


class _TaskAdd extends Component {
    state = {
        title: ''
    }

    onAddTask = (ev) => {
        const task = this.createTask(ev);
        const { board, updateBoard, groupId } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === groupId)
        const updatedBoard = { ...board };
        updatedBoard.groups[groupIdx].tasks.push(task);
        updateBoard(updatedBoard);
        this.setState({ title: 'Enter new task title' });
    }

    createTask = (title) => {
        const task = {
            id: utilService.makeId(),
            title,
            description: '',
            comments: [],
            checklists: [],
            members: [],
            labelIds: [],
            createdAt: Date.now(),
            dueDate: '',
            byMember: {},
            style: {
                bgColor: utilService.getRandomColor()
            }
        }
        return task;
    }
    render() {
        const { title } = this.state;
        return (
            <div className="taskAdd" >
                <EasyEdit
                    type={Types.TEXT}
                    value={title}
                    placeholder={<FontAwesomeIcon icon={faPlus} />}
                    onSave={this.onAddTask}
                    saveButtonLabel={<FontAwesomeIcon icon={faCheck} />}
                    cancelButtonLabel={<FontAwesomeIcon icon={faTimes} />}
                />
            </div>

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





