import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TaskDetailsHeader } from './TaskDetailsHeader';
import { CheckBox } from './CheckBox';
import { TaskDetailsActivity } from './TaskDetailsActivity';
import { TaskDetailsDescription } from './TaskDetailsDescription';
import { ChecklistList } from '../TaskCheckList/ChecklistList';
import { ChecklistAdd } from '../TaskCheckList/ChecklistAdd';
import { updateBoard } from '../../../store/actions/board.actions';
import { TaskDueDate } from './TaskDueDate';
import { TaskImage } from './TaskImage';
import { TaskLabel } from './TaskLabel';
import { GrFormClose } from 'react-icons/gr';
import { BiCreditCard, BiTimeFive } from 'react-icons/bi';
import { MdLabelOutline, MdContentCopy } from 'react-icons/md';
import { BsPerson, BsCheckBox, BsArrowRightShort, BsTrash } from 'react-icons/bs';
import { ImAttachment } from 'react-icons/im';
import { TaskLabelPreview } from './TaskLabelPreview';

let modalPos;
class _TaskDetails extends Component {
    state = {
        task: null,
        group: null,
        toggleTaskLabel: false,
        isDate: false
    }

    componentDidMount() {
        this.loadTask();
    }

    async loadTask() {
        const { boardId, groupId, taskId } = this.props.match.params;
        const { board } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === groupId)
        const task = board.groups[groupIdx].tasks.find(task => task.id === taskId);
        this.setState({ task, group: board.groups[groupIdx] })
    }


    async updateBoard(board) {
        try {
            this.props.updateBoard(board);
        } catch (err) {
            console.log('On Task details, Update Board:', err)
        }
    }


    updateTask = (task) => {
        this.setState({ task })
        const taskId = task.id;
        const { id } = this.state.group;
        const { board } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === id)
        const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
        const updatedBoard = { ...board };
        updatedBoard.groups[groupIdx].tasks.splice(taskIdx, 1, task)
        this.updateBoard(updatedBoard);
    }

    removeTask = () => {
        const taskId = this.state.task.id;
        const { id } = this.state.group;
        const { board } = this.props;
        const boardId = board._Id;
        const groupIdx = board.groups.findIndex(group => group.id === id);
        const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId);
        const updatedBoard = { ...board };
        updatedBoard.groups[groupIdx].tasks.splice(taskIdx, 1)
        this.updateBoard(updatedBoard);
        // this.setState({ task: null, group: null })
        // this.loadTask();
        // this.props.history.push(`/board/${boardId}`)
    }

    handleChange = ({ target }) => {
        const { value, name, checked, type } = target
        let computedValue = type === 'checkbox' ? checked : value
        this.setState(prevState => (
            { ...prevState, task: { ...prevState.task, [name]: computedValue } }
        ), () => {
            this.updateTask(this.state.task)
        })
    }
    handleDateChange = ({ target }) => {
        const { value, name } = target
        var task = { ...this.state }
        task[name] = value;
        console.log(task);
        this.setState(prevState => (
            { ...prevState, task: { ...prevState.task, [name]: value } }
        ), () => {
            this.updateTask(this.state.task)
        })

    }


    toggleTaskLabel = (ev) => {
        // let { top, left } = this.taskDetailsRef.current.getBoundingClientRect();
        // top = parseFloat(top);
        // left = parseFloat(left) + 100;
        // const { clientX, clientY } = ev;
        // modalPos = { left: clientX - left + 'px', top: (clientY - top) + 'px' };
        this.setState({ toggleTaskLabel: !this.state.toggleTaskLabel });
    }

    toggleDate = () => {
        this.setState({ isDate: !this.state.isDate })
    }

    toggleChecklist = () => {

    }

    // taskDetailsRef = React.createRef()


    render() {
        const { board } = this.props;
        const { task, group, toggleTaskLabel, isDate } = this.state;
        if (!task) return <h1>Loading...</h1>
        const { checklists, labelIds } = this.state.task;
        return (
            <section className="TaskDetails-modal">
                <Link to={`/board/${board._id}/`}>
                    <div className="outer-task-details-container">
                    </div>
                </Link>
                <section ref={this.taskDetailsRef} className="taskDetails-container" >
                    <div className="taskDetails-header">
                        <div className="header-icon">
                            <BiCreditCard className="modalHeader icon" />
                            <TaskDetailsHeader task={this.state.task} group={group} updateTask={this.updateTask} />
                        </div>
                        <Link to={`/board/${board._id}/`}><GrFormClose className="modalHeader icon" /></Link>
                    </div>
                    <div className="taskDetails-body">
                        <div className="task-details">
                            {isDate && <TaskDueDate onChange={this.handleDateChange} task={task} dueDate={this.state.task.dueDate} updateTask={this.updateTask} />}
                            {labelIds && <div className="taskDetails-labels">
                                <p>LABELS</p>
                                <div className="labels-container">
                                    < TaskLabelPreview labelIds={labelIds} />
                                </div>
                            </div>
                            }
                            <CheckBox handleChange={this.handleChange} isChecked={this.state.task.isDone} updateTask={this.updateTask} task={task} />
                            <TaskDetailsDescription task={task} updateTask={this.updateTask} />
                            {checklists && <ChecklistList checklists={checklists} task={task} updateTask={this.updateTask} />}
                            <TaskDetailsActivity task={task} board={board} updateTask={this.updateTask} />
                        </div>

                        <ul className="task-actions">
                            <li className="button-link" onClick={this.toggleTaskLabel}><MdLabelOutline />Labels</li>
                            <li className="button-link"><BsPerson />Memebrs</li>
                            <li className="button-link" onClick={this.toggleDate}><BiTimeFive />Due Date</li>
                            <li className="button-link" onClick={this.toggleChecklist}><BsCheckBox />Checklist</li>
                            <li className="button-link"><ImAttachment />Image</li>
                            <li className="button-link"><BsArrowRightShort />Move</li>
                            <li className="button-link"><MdContentCopy />Copy</li>
                            <li className="button-link" onClick={this.removeTask}><BsTrash />Delete</li>
                            <ChecklistAdd updateTask={this.updateTask} task={task} />
                        </ul>

                        {toggleTaskLabel && <TaskLabel task={task} /* modalPos={modalPos} */ updateTask={this.updateTask} toggleTaskLabel={this.toggleTaskLabel} />}
                    </div>
                </section>
            </section>
        )

    }
}


function mapStateToProps(state) {
    return {
        board: state.boardModule.board,
    }
}

const mapDispatchToProps = {
    updateBoard
}

export const TaskDetails = connect(mapStateToProps, mapDispatchToProps)(_TaskDetails)



