import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsCheckBox,BsClock } from 'react-icons/bs';

class _TaskPreview extends Component {
    state = {
        isChecked: false
    }

    componentDidMount() {
    }

    render() {
        const { setActiveTask, task, board, groupId } = this.props
        const { id, title,dueDate } = task;
        return (<Link className="task-preview" to={`/board/${board._id}/group/${groupId}/task/${id}`}>
            <div className="task-preview-info">
                <div className="task-preview-labels"></div>
                <span className="task-preview-title">{title}</span>
                {task.isDone&&
                <div className="badges"> <BsCheckBox/> </div>}
                {task.dueDate&&
                <div className="badges"> <BsClock/> {dueDate}</div>}
                <div className="task-preview-members"></div>
            </div>
        </Link>
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

export const TaskPreview = connect(mapStateToProps, mapDispatchToProps)(_TaskPreview)


