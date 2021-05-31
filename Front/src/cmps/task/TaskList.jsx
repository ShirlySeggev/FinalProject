import { TaskPreview } from './TaskPreview.jsx';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export function TaskList({ tasks, groupId }) {
    return (
        <Droppable droppableId={groupId} type="task">
            <div className="tasks-container group-layout">
                {tasks.map(task =>
                    <TaskPreview task={task} key={task.id} groupId={groupId} />
                )}
            </div>
        </Droppable>

    )
}