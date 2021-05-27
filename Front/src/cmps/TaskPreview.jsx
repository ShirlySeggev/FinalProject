import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class _TaskPreview extends Component {
    state = {

    }

    componentDidMount() {

    }



    render() {
        const { _id } = this.props.board;
        const { id, title } = this.props.task;

        return (
            <section className="task-preview" >
                <Link to={`/board/${_id}/task/${id}`}>
                    <div>
                        <h1>task title:{title}</h1>
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

}

export const TaskPreview = connect(mapStateToProps, mapDispatchToProps)(_TaskPreview)


