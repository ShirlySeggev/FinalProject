import { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';



class _TaskDetails extends Component {
    state = {
        task: null,
        isEditDesc: false,
        isEditTitle: false
    }

    componentDidMount() {
        this.loadTask();
    }

    async loadTask() {
        const { taskId } = this.props.match.params;
        console.log('line 18 bro', this.props.match.params);
        const { board } = this.props;
        const groups = board.groups
        let task;
        groups.forEach(group => {
            if (task) return;
            let currGroup = group.tasks.find(task => {
                console.log('taskId:', taskId);
                console.log('currTaskId:', task.id);
                return task.id === taskId
            });
            task = {title: 'CRUDL!!!!!', description: 'bla bla bla'};
        })
        this.setState({ task })
        console.log('here brother',task);
    }

    setEdit = () => {
        const {isEditDesc} = this.state
        if (isEditDesc) this.setState({isEditDesc: false})
        else this.setState({isEditDesc: true})
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = (target.type === 'number') ? +target.value : target.value;
        this.setState(prevState => ({
            ...prevState,
            newBoard: {
                ...prevState.newBoard,
                [field]: value,
            }
        }))
    }


    render() {
        const { task, isEditDesc } = this.state
        // console.log('here brother', task)
        if (!task) return <h1>Loading...</h1>
        const { title, description } = this.state.task
        return (
            <section className="task-details-card" >
                <header className="task-details-header">
                <h1>{title}</h1> 
                <input type="text" value={title} /> 
                <h3>in list -- group title --</h3>
                </header>
                <div className="task-details-description">
                    <h3>Description</h3>
                  {description && !isEditDesc && <p onClick={this.setEdit}>{description}</p> }
                  {(!description || isEditDesc) && <textarea
                  onBlur={this.setEdit} onChange={this.handleChange}
                  value={description} name="description" id="description" cols="30" rows="10"></textarea>}
                </div>
                <div className="task-details-activity">

                </div>

                
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

}

export const TaskDetails = connect(mapStateToProps, mapDispatchToProps)(_TaskDetails)


