import { TaskList } from '../task/TaskList';
import { GroupHeader } from './GroupHeader';
import { TaskAdd } from '../task/TaskAdd';




export function GroupPreview({ group, updateGroup, removeGroup }) {
    const { id, title, tasks, style } = group;

    return (
        <section className="group-preview" /* style={{ backgroundColor: `${style.bgc}` }} */>
            <div>
                <GroupHeader group={group} updateGroup={updateGroup} removeGroup={removeGroup} />
                <TaskList tasks={tasks} groupId={id} />
                <TaskAdd groupId={id} />
            </div>
        </section>
    )
}









