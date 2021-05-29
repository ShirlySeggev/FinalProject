import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TaskDetailsHeader } from './TaskDetailsHeader';
import { TaskDetailsActivity } from './TaskDetailsActivity';
import { TaskDetailsDescription } from './TaskDetailsDescription';
import { updateBoard } from '../../store/actions/board.actions';


// import EasyEdit, { Types } from 'react-easy-edit';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';



class _TaskDetails extends Component {
    state = {
        task: null,
        group: null

    }

    componentDidMount() {
        this.loadTask();
    }

    async loadTask() {
        const { boardId, groupId, taskId } = this.props.match.params;
        // console.log('match.params: ', this.props.match)
        const { board } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === groupId)
        const task = board.groups[groupIdx].tasks.find(task => task.id === taskId);
        this.setState({ task, group: board.groups[groupIdx] })
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

    async updateBoard(board) {
        try {
            this.props.updateBoard(board);
        } catch (err) {
            console.log('On Task details, Update Board:', err)
        }
    }


    render() {
        const { task, group } = this.state;
        if (!task) return <h1>Loading...</h1>
        const { board } = this.props;
        // const { title, description, checklists } = this.state.task;
        return (
            <Fragment>
                <Link to={`/board/${board._id}/`}>
                    <div className="outer-task-details-container">
                    </div>
                </Link>
                <section className="taskDetails-container" >

                    <TaskDetailsHeader task={task} group={group} updateTask={this.updateTask} />
                    <TaskDetailsDescription task={task} updateTask={this.updateTask} />

                    {/* <TaskDetailsDescription /> */}
                    {/* <div className="task-details-description">
                        <h3>Description</h3>
                        {description && !isEditDesc && <p onClick={this.setEditDesc}>{description}</p>}
                        {(!description || isEditDesc) && <textarea
                            onBlur={this.setEditDesc} onChange={this.handleChange}
                            value={description} name="description" id="description" cols="30" rows="10"></textarea>}
                    </div> */}

                    <TaskDetailsActivity task={task} board={board} updateTask={this.updateTask} />
                    {/* <div className="task-details-activity">
                    </div> */}

                    {/* TODO: ALL THE OPTINAL COMPONENTS (values of task)  */}
                    {/* {checklists && <TaskDetailsChecklist/>} */}

                    {/* GAL WORKING ON THIS CMPS */}
                    {/* TODO: ADD TO TASK MENU*/}


                    {/* REMOVE */}


                </section>
            </Fragment>
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


