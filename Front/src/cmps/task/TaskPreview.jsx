import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsCheckBox, BsCalendar } from 'react-icons/bs';
import { TaskLabelPreview } from './TaskDetails/TaskLabelPreview';
import { TaskMembersPreview } from './TaskDetails/TaskMembersPreview';

class _TaskPreview extends Component {
    state = {
        isChecked: false,
    }

    componentDidMount() {
    }

    render() {
        const { task, board, groupId } = this.props;
        const { id, title, dueDate, labelIds, members } = task;
        let date = new Intl.DateTimeFormat('he-IL', { day: '2-digit',month: '2-digit', }).format(dueDate)
        return (
            <div className="task-preview">
                {labelIds && <div className="taskDetails-labels" >
                    < TaskLabelPreview labelIds={labelIds} isOpen={false}/>
                </div>}
                
                <Link className="task-preview-info" to={`/board/${board._id}/group/${groupId}/task/${id}`}>
                    <span className="task-preview-title">{title}</span>
                    {task.isDone &&
                        <div className="badges"> <BsCheckBox /> </div>}
                    {task.dueDate &&
                        <div className="badges"> <BsCalendar /> {date}</div>}
                        {members && <div className="task-preview-members" >
                            < TaskMembersPreview members={members}/>
                        </div>}
                    <div className="task-preview-members"></div>
                </Link>
            </div>
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


