import { TaskList } from '../task/TaskList';
import { GroupHeader } from './GroupHeader';
import { TaskAdd } from '../task/TaskAdd';




<<<<<<< HEAD
export function GroupPreview({ group, updateGroup, removeGroup, addTask,removeTask }) {
=======
export function GroupPreview({ group, updateGroup, removeGroup }) {
>>>>>>> 11f3a13bb6c646eb8f6988e45f8f173143dc0179
    const { id, title, tasks, style } = group;

    return (
        <section className="group-preview" style={{ backgroundColor: `${style.bgc}` }}>
            <div>
                <GroupHeader group={group} updateGroup={updateGroup} removeGroup={removeGroup} />
                <TaskList tasks={tasks} groupId={id} />
                <TaskAdd groupId={id} />
            </div>
        </section>
    )
}









