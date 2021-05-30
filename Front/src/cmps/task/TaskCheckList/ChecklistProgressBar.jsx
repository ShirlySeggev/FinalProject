import { Component } from "react";



export class ChecklistProgressBar extends Component {
    state = {
        completed: null,
    }

    componentDidMount() {
        const { todos } = this.props
        const completed = this.getCompletedRatio(todos)
        this.setState({ completed })
        console.log('DONE',this.state.completed);
    }

    getCompletedRatio = (todos=[]) => {
        const todoDone = todos.filter(todo => todo.isDone)
        const completeRatio = (todoDone.length / todos.length) * 100
        if (!completeRatio) return 0
        return completeRatio
    }

    render() {
        const { completed } = this.state

        const width = { width: `${completed}%` }
        return (
            <div className="checklist-progress-bar-main">
                <div className="checklist-progress-bar-secondery" style={width}>
                    <span>{`${completed}%`}</span>
                </div>
            </div>
        )
    }
}