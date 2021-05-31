import { TaskList } from '../task/TaskList';
import { GroupHeader } from './GroupHeader';
import { TaskAdd } from '../task/TaskAdd';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';




export function GroupPreview({ group, boardId, updateGroup, removeGroup }) {
    const { id, title, tasks, style } = group;

    return (
        <Fragment>

            <Link to={`/board/${boardId}/`}>
                <div className="outer-task-details-container">
                </div>
            </Link>
            <section className="group-preview" /* style={{ backgroundColor: `${style.bgc}` }} */>
                <div>
                    <GroupHeader group={group} updateGroup={updateGroup} removeGroup={removeGroup} />
                    <TaskList tasks={tasks} groupId={id} />
                    <TaskAdd groupId={id} />
                </div>
            </section>
        </Fragment>

    )
}









