import { TaskList } from '../task/TaskList';
import { GroupHeader } from './GroupHeader';
import { TaskAdd } from '../task/TaskAdd';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';




export function GroupPreview({ group, boardId, updateGroup, removeGroup, handleDragEnd , board}) {
    const { id, title, tasks, style } = group;


    return (
        <section>
            <Link to={`/board/${boardId}/`}>
                <div className="main-screen">
                </div>
            </Link>
            <section className="group-preview" /* style={{ backgroundColor: `${style.bgc}` }} */>
                <div>
                    <GroupHeader group={group} updateGroup={updateGroup} removeGroup={removeGroup} />
                    <TaskList tasks={tasks} groupId={id} board={board} handleDragEnd={handleDragEnd} />
                    <TaskAdd groupId={id} />
                </div>
            </section>
        </section>

    )
}









