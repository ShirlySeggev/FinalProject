import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TaskDetailsHeader } from './TaskDetailsHeader';
import { CheckBox } from './CheckBox';
import { TaskDetailsActivity } from './TaskDetailsActivity';
import { TaskDetailsDescription } from './TaskDetailsDescription';
import { updateBoard } from '../../store/actions/board.actions';
import { TaskDueDate } from './TaskDueDate';
import { TaskImage } from './TaskImage';
import { GrFormClose } from 'react-icons/gr';
import { BiCreditCard, BiTimeFive } from 'react-icons/bi';
import { MdLabelOutline, MdContentCopy } from 'react-icons/md';
import { BsPerson, BsCheckBox, BsArrowRightShort, BsTrash } from 'react-icons/bs';
import { ImAttachment } from 'react-icons/im';

class _TaskDetails extends Component {
    state = {
        task: null,
        group: null,
        isDate:false
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
        this.props.history.push(`/board/${boardId}`)
    }

    handleChange = ({target})=>{
        const {value,name,checked,type} = target
        let computedValue = type === 'checkbox' ? checked : value
        this.setState(prevState => (
            {...prevState, task: {...prevState.task, [name]: computedValue}}
            ), ()=>{
                this.updateTask(this.state.task)
            })
    }
    handleDateChange = ({target}) => {
        const {value,name} = target
        var task = { ...this.state }
        task[name] = value;
        console.log(task);
        this.setState(prevState => (
            {...prevState, task: {...prevState.task, [name]: value}}
            ), ()=>{
                this.updateTask(this.state.task)
            })
         
    }
    toggleDate=()=>{
        console.log('hi');
        this.setState({ isDate: !this.state.isDate })
    }
    
   
    render() {
        const { task, group } = this.state;
        if (!task) return <h1>Loading...</h1>
        const { board } = this.props;
        return (
            <section className="TaskDetails-modal">
                <Link to={`/board/${board._id}/`}>
                    <div className="outer-task-details-container">
                    </div>
                </Link>
                <section className="taskDetails-container" >
                    <div className="taskDetails-header">
                        <div className="header-icon">
                            <BiCreditCard className="modalHeader icon" />
                            <TaskDetailsHeader task={this.state.task} group={group} updateTask={this.updateTask} />
                        </div>
                        <Link to={`/board/${board._id}/`}><GrFormClose className="modalHeader icon" /></Link>
                    </div>
                    <div className="taskDetails-body">
                        {this.state.isDate && <TaskDueDate onChange={this.handleDateChange} task={task} dueDate={this.state.task.dueDate} updateTask={this.updateTask} />}
                            <CheckBox handleChange={this.handleChange} isChecked={this.state.task.isDone} updateTask={this.updateTask} task={task}/>
                            <TaskDetailsDescription task={task} updateTask={this.updateTask} />
                            <TaskDetailsActivity task={task} board={board} updateTask={this.updateTask} />
                            
                        </div>

                        <ul className="task-actions">
                            <li className="button-link"><MdLabelOutline />Labels</li>
                            <li className="button-link"><BsPerson />Memebrs</li>
                            <li className="button-link" onClick={this.toggleDate}><BiTimeFive />Due Date</li>
                            <li className="button-link"><BsCheckBox />Checklist</li>
                            <li className="button-link"><ImAttachment />Image</li>
                            <li className="button-link"><BsArrowRightShort />Move</li>
                            <li className="button-link"><MdContentCopy />Copy</li>
                            <li className="button-link" onClick={this.removeTask}><BsTrash />Delete</li>
                        </ul>
                    

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


