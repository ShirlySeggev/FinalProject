import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { TaskDetailsHeader } from './TaskDetailsHeader';
import { TaskDetailsActivity } from './TaskDetailsActivity';
import { updateBoard } from '../../store/actions/board.actions.js';


import EasyEdit, { Types } from 'react-easy-edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';



class _TaskDetails extends Component {
    state = {
        task: null,
        groupId: null

    }

    componentDidMount() {
        this.loadTask();
    }

    async loadTask() {
        const { boardId, groupId, taskId } = this.props.match.params;
        console.log('match.params: ', this.props.match)
        const { board } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === groupId)
        const task = board.groups[groupIdx].tasks.find(task => task.id === taskId);
        this.setState({ task, groupId })
    }

    updateTask = (task) => {
        const taskId = task.id
        const {groupId} = this.state
        const { board } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === groupId)
        const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
        const updatedBoard = { ...board };
        updatedBoard.groups[groupIdx].tasks.splice(taskIdx, 1, task );
        updateBoard(updatedBoard);
        // this.setState({ task.title: 'Enter new task title' });
    }


    render() {
        const { task, isEditDesc, isEditTitle } = this.state;
        if (!task) return <h1>Loading...</h1>
        const { setActiveTask, board } = this.props;
        const { title, description, checklists } = this.state.task;
        return (
            <Fragment>
                {/* <div className="outer-task-details-container" onClick={() => setActiveTask(null)}>
                </div> */}
                <section className="task-details-container" >
                    <TaskDetailsHeader task={task} updateTask={this.updateTask} />
                    <header className="task-details-header">
                        {/* {!isEditTitle && <h1 onClick={this.setEditTitle}>{title}</h1>}
                        {isEditTitle && <input onBlur={this.setEditTitle} onChange={this.handleChange} type="text" value={title} name="title" />} */}
                        {/* <EasyEdit
                            type={Types.TEXT}
                            value={title}
                            onSave={this.onAddTask}
                            saveButtonLabel={<FontAwesomeIcon icon={faCheck} />}
                            cancelButtonLabel={<FontAwesomeIcon icon={faTimes} />}
                        />
                        <h3>in list -- group title --</h3> */}
                    </header>
                    {/* <TaskDetailsDescription /> */}
                    {/* <div className="task-details-description">
                        <h3>Description</h3>
                        {description && !isEditDesc && <p onClick={this.setEditDesc}>{description}</p>}
                        {(!description || isEditDesc) && <textarea
                            onBlur={this.setEditDesc} onChange={this.handleChange}
                            value={description} name="description" id="description" cols="30" rows="10"></textarea>}
                    </div> */}

                    <TaskDetailsActivity task={task} />
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


