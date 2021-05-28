import { connect } from 'react-redux';
import { Component } from 'react';
import { TaskList } from './TaskList';
// import { GroupHeader } from './GroupHeader';
// import { AddTask } from './AddTask';



class _GroupPreview extends Component {
    state = {
        isAddTask: false,
        newTask: {
            title: null,
            id: Date.now()
        }
    }
    // TODO: ADD A NEW TASK TO GROUP
    onAddTask = () => {
        const { isAddTask } = this.state
        if (isAddTask) {

            this.setState({
                isAddTask: false,
                newTask: {
                    title: null,
                    id: Date.now()
                }
            })
        }
        else this.setState({ isAddTask: true })
    }
    onCancelAddTask = () => {
        this.setState({ isAddTask: false })
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = (target.type === 'number') ? +target.value : target.value;
        this.setState(prevState => ({
            ...prevState,
            newTask: {
                ...prevState.newTask,
                [field]: value,
            }
        }))
    }

    render() {
        const { id, title, tasks } = this.props.group;
        const { isAddTask } = this.state
        return (
            <section className="group-preview" >
                <div>
                    <h1>Group title: {title}</h1>
                    {/* <GroupHeader group={group} /> */}
                    <TaskList tasks={tasks} />
                    {/* <AddTask /> */}
                    {!isAddTask && <div onClick={this.onAddTask}>Add a new task</div>}
                    {isAddTask && <div>
                        <textarea type="text" name="title" onChange={this.handleChange} />
                        <button onClick={this.onAddTask}>Add task</button>
                        <button onClick={this.onCancelAddTask}>X</button>
                    </div>}


                </div>
            </section>
        )
    }
}


function mapStateToProps(state) {
    return {
    }
}

const mapDispatchToProps = {

}

export const GroupPreview = connect(mapStateToProps, mapDispatchToProps)(_GroupPreview)






