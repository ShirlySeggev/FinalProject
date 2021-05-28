import { TaskPreview } from './TaskPreview.jsx';

export function TaskList({ tasks, groupId }) {
    return (
        <div className="tasks-container">
            {tasks.map(task =>
                <TaskPreview task={task} key={task.id} groupId={groupId} />
            )}
        </div>

    )
}