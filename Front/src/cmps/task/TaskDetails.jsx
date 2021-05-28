import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import EasyEdit, { Types } from 'react-easy-edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { TaskDetailsHeader } from './TaskDetailsHeader';
import { TaskDetailsActivity } from './TaskDetailsActivity';




class _TaskDetails extends Component {
    state = {
        task: null,
        // isEditDesc: false,
        // isEditTitle: false
    }

    componentDidMount() {
        this.loadTask();
    }

    async loadTask() {
        // const { activeTask } = this.props;
        // this.setState({ task: activeTask })
        const { boardId, groupId, taskId } = this.props.match.params;
        console.log('match.params: ', this.props.match)
        const { board } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === groupId)
        const task = board.groups[groupIdx].tasks.find(task => task.id === taskId);
        this.setState({ task })
    }

    updateTask = (task) => {
        console.log(task);
        const task = this.createTask(ev);
        const taskId = task.id
        const { board, groupId } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === groupId)
        const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
        const updatedBoard = { ...board };
        updatedBoard.groups[groupIdx].tasks.splice(taskIdx, 1, task );
        console.log('new tasks:', updatedBoard.groups[groupIdx].tasks);
        // updateBoard(updatedBoard);
        // this.setState({ task.title: 'Enter new task title' });
    }




    // setEditDesc = () => {
    //     this.setState({ isEditDesc: !this.state.isEditDesc })
    // }
    // setEditTitle = () => {
    //     this.setState({ isEditTitle: !this.state.isEditTitle })
    // }

    // handleChange = ({ target }) => {
    //     const field = target.name;
    //     const value = (target.type === 'number') ? +target.value : target.value;
    //     this.setState(prevState => ({
    //         ...prevState,
    //         task: {
    //             ...prevState.task,
    //             [field]: value,
    //         }
    //     }))
    // }


    render() {
        console.log('groupId', this.props.groupId);
        const { task, isEditDesc, isEditTitle } = this.state;
        if (!task) return <h1>Loading...</h1>
        const { setActiveTask, board } = this.props;
        const { title, description, checklists } = this.state.task;
        return (
            <Fragment>
                <div className="outer-task-details-container" onClick={() => setActiveTask(null)}>
                </div>
                <section className="task-details-container" >
                    <TaskDetailsHeader task={task} onUpdateTask={this.onUpdateTask} />
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
}

export const TaskDetails = connect(mapStateToProps, mapDispatchToProps)(_TaskDetails)


