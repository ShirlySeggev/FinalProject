import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class _TaskDetails extends Component {
    state = {
        task: null
    }

    componentDidMount() {
        this.loadTask();
    }

    async loadTask() {
        const { taskId } = this.props.match.params;
        const { board } = this.props;
        const groups = board.groups
        let task;
        groups.forEach(group => {
            if (task) return;
            let currGroup = group.tasks.find(task => {
                return task.id === taskId
            });
            task = currGroup;
        })
        this.setState({ task })
    }


    render() {
        const { task } = this.state;
        if (!task) return <h1>Loading...</h1>
        const { title } = this.state.task;

        return (
            <section className="task-details" >
                <h1>{title}</h1> 
                {/* Add actions components */}
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


