import { GroupPreview } from './GroupPreview.jsx';
import { GroupAdd } from './GroupAdd';

export function GroupList({ groups, updateGroup, removeGroup, addGroup }) {
    return (
        <div className="groups-container">
            {groups.map(group =>
                <GroupPreview group={group} key={group.id} updateGroup={updateGroup} removeGroup={removeGroup}/>
            )}
             <GroupAdd addGroup={addGroup}/>
        </div>

    )
}