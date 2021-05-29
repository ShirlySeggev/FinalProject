import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Checkbox from '@material-ui/core/Checkbox'
import { TaskDetails } from './TaskDetails';
import { CheckBox } from './CheckBox';



class _TaskPreview extends Component {
    state = {
        isChecked:false
    }

    componentDidMount() {
    }

    render() {
        const { setActiveTask, task, board, groupId } = this.props
        const { id, title } = task;
        return (
            <section className="task-preview" >
                <Link to={`/board/${board._id}/group/${groupId}/task/${id}`}>
                {/* {this.state.isChecked===true && <h1>{title+' Is done'}</h1>} */}
                    <h1>{title}</h1>
                </Link>
                {/* {this.state.isChecked===true && <h1>DONE</h1>} */}
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

export const TaskPreview = connect(mapStateToProps, mapDispatchToProps)(_TaskPreview)


