import { GroupPreview } from './GroupPreview.jsx';
import { GroupAdd } from './GroupAdd';

export function GroupList({ groups, boardId, updateGroup, removeGroup, addGroup }) {
    return (
        <div className="groupList-container">
            {groups.map(group =>
                <GroupPreview group={group} boardId={boardId} key={group.id} updateGroup={updateGroup} removeGroup={removeGroup} />
            )}
            <GroupAdd addGroup={addGroup} />
        </div>

    )
}