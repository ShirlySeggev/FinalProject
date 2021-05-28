import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActiveTask, setCurrGroupId } from '../../store/actions/board.actions';


class _TaskPreview extends Component {
    state = {

    }

    componentDidMount() {

    }



    render() {
        const { setActiveTask, task, board, groupId } = this.props
        const { id, title } = task;
        return (
            <section className="task-preview" >
                <Link to={`/board/${board._id}/task/${id}`}>
                    <div onClick={() => {
                        setActiveTask(task)
                        setCurrGroupId(groupId)
                    }} >
                        <h1>{title}</h1>
                    </div>
                </Link>
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
    setActiveTask,
    setCurrGroupId
}

export const TaskPreview = connect(mapStateToProps, mapDispatchToProps)(_TaskPreview)


