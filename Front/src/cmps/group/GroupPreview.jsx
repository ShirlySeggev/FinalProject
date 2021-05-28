import { TaskList } from '../task/TaskList';
import { GroupHeader } from './GroupHeader';
import { TaskAdd } from '../task/TaskAdd';




export function GroupPreview({ group, updateGroup, removeGroup, addTask }) {
    const { id, title, tasks, style } = group;

    return (
        <section className="group-preview" style={{ backgroundColor: `${style.bgc}` }}>
            <div>
                <GroupHeader group={group} updateGroup={updateGroup} removeGroup={removeGroup} />
                <TaskList tasks={tasks} />
                <TaskAdd groupId={id} />
            </div>
        </section>
    )
}









