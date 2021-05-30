import { TaskPreview } from './TaskPreview.jsx';

export function TaskList({ tasks, groupId,removeTask }) {
    return (
        <div className="tasks-container group-layout">
            {tasks.map(task =>
                <TaskPreview task={task} key={task.id} groupId={groupId} />
            )}
        </div>

    )
}