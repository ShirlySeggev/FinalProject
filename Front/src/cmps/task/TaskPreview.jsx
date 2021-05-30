import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Checkbox from '@material-ui/core/Checkbox'
import { TaskDetails } from './TaskDetails';
import { CheckBox } from './CheckBox';



class _TaskPreview extends Component {
    state = {
        isChecked: false
    }

    componentDidMount() {
    }

    render() {
        const { setActiveTask, task, board, groupId } = this.props
        const { id, title } = task;
        return (<Link className="task-preview" to={`/board/${board._id}/group/${groupId}/task/${id}`}>
            <div className="task-preview-info">
                <div className="task-preview-labels"></div>
                <span className="task-preview-title">{title}</span>
                <div className="badges"></div>
                <div className="task-preview-members"></div>
            </div>

            {/* {this.state.isChecked===true && <h1>{title+' Is done'}</h1>} */}
            {/* {this.state.isChecked===true && <h1>DONE</h1>} */}
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


