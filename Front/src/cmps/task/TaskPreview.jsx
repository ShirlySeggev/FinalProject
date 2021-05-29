import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


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
                <Link to={`/board/${board._id}/group/${groupId}/task/${id}`}>
                    <h1>{title}</h1>
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
}

export const TaskPreview = connect(mapStateToProps, mapDispatchToProps)(_TaskPreview)

