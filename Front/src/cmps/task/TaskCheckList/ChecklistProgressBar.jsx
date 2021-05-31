import { Component } from "react";



export class ChecklistProgressBar extends Component {
    // state = {
    //     completed: null,
    // }

    // componentDidMount() {
    //     this.updateProgressBar()
    // }

    // updateProgressBar = () => {
    //     const { todos } = this.props
    //     const completed = this.getCompletedRatio(todos)
    //     this.setState({ completed: completed })
    //     // console.log('DONE', this.state.completed);
    // }

    getCompletedRatio = (todos = []) => {
        const todoDone = todos.filter(todo => todo.isDone)
        const completeRatio = Math.floor((todoDone.length / todos.length) * 100)
        if (!completeRatio) return 0
        return completeRatio
    }

    render() {
        // const { completed } = this.state
        const { todos } = this.props
        const width = { width: `${this.getCompletedRatio(todos)}%` }
        // console.log(todos);
        return (
            <div className="checklist-progress-bar-main">
                <div className="checklist-progress-bar-secondery" style={width}>
                    <span>{`${width.width}`}</span>
                </div>
            </div>
        )
    }
}