import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setActiveTask } from '../../store/actions/board.actions.js';
import EasyEdit, { Types } from 'react-easy-edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { TaskDetailsHeader } from './TaskDetailsHeader';
import { TaskDetailsDescription } from './TaskDetailsDescription';
import { TaskDetailsActivity } from './TaskDetailsActivity';

// import { Link } from 'react-router-dom';



class _TaskDetails extends Component {
    state = {
        task: null,
        // currGroup: null,
        // isEditDesc: false,
        // isEditTitle: false
    }

    componentDidMount() {
        this.loadTask();
    }

    async loadTask() {
        const { board, activeTask } = this.props;
        this.setState({ task: activeTask })
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
        const { task, isEditDesc, isEditTitle } = this.state;
        const { setActiveTask, board } = this.props;
        if (!task) return <h1>Loading...</h1>
        const { title, description, checklists } = this.state.task;
        return (
            <Fragment>
                <div className="outer-task-details-container" onClick={() => setActiveTask(null)}>
                </div>
                <section className="task-details-container" >
                    {/* <TaskDetailsHeader /> */}
                    <header className="task-details-header">
                        {/* {!isEditTitle && <h1 onClick={this.setEditTitle}>{title}</h1>}
                        {isEditTitle && <input onBlur={this.setEditTitle} onChange={this.handleChange} type="text" value={title} name="title" />} */}
                        <EasyEdit
                            type={Types.TEXT}
                            value={title}
                            onSave={this.onAddTask}
                            saveButtonLabel={<FontAwesomeIcon icon={faCheck} />}
                            cancelButtonLabel={<FontAwesomeIcon icon={faTimes} />}
                        />
                        <h3>in list -- group title --</h3>
                    </header>
                    {/* <TaskDetailsDescription /> */}
                    {/* <div className="task-details-description">
                        <h3>Description</h3>
                        {description && !isEditDesc && <p onClick={this.setEditDesc}>{description}</p>}
                        {(!description || isEditDesc) && <textarea
                            onBlur={this.setEditDesc} onChange={this.handleChange}
                            value={description} name="description" id="description" cols="30" rows="10"></textarea>}
                    </div> */}

                    {/* <TaskDetailsActivity /> */}
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
        activeTask: state.boardModule.activeTask,
    }
}

const mapDispatchToProps = {
    setActiveTask
}

export const TaskDetails = connect(mapStateToProps, mapDispatchToProps)(_TaskDetails)


