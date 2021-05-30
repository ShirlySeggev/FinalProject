import { Component } from "react";
import EasyEdit, { Types } from 'react-easy-edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';


export class ChecklistTodoPreview extends Component {
    state = {
        todo: null
    }

    componentDidMount() {
        this.loadTodos()
    }
    
    loadTodos = ()=> {
        this.setState({ todo: this.props.todo })
    }

    onUpdateTodo = (title) => {
        const { todo } = this.state
        this.setState({ todo: { ...todo, title } })
        this.props.updateTodo(todo)
    }

    toggleIsDone = () => {
        const { todo } = this.state
        this.setState({ todo: { ...todo, isDone: !todo.isDone } }, () => {
            this.props.updateTodo(this.state.todo)
        })
    }

    render() {
        if (!this.state.todo) return <h3>Loading...</h3>
        const { removeTodo } = this.props
        const { title, isDone, id } = this.state.todo
        return (

            <li className="checklist-todo-container">
                <input type="checkbox" onChange={this.toggleIsDone} checked={isDone} value={isDone} />
                <div style={isDone ? { textDecoration: 'line-through' } : {}}>
                    <EasyEdit
                        type={Types.TEXT}
                        value={title}
                        saveButtonLabel={<FontAwesomeIcon icon={faCheck} />}
                        cancelButtonLabel={<FontAwesomeIcon icon={faTimes} />}
                        onSave={this.onUpdateTodo}
                        onBlur={this.onUpdateTodo} />
                </div>
                <button onClick={() => removeTodo(id)}>{<FontAwesomeIcon icon={faTrash} />}</button>
            </li>
        )
    }
}