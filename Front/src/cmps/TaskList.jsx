import { TaskPreview } from './TaskPreview.jsx';

export function TaskList({ tasks, gropId }) {
    console.log(tasks);
    return (
        <div className="tasks-container">
            {tasks.map(task =>
                <TaskPreview task={task} key={task.id}  />
            )}
        </div>

    )
}