import { GroupPreview } from './GroupPreview.jsx';

export function GroupList({ groups }) {
    // console.log(groups);
    return (
        <div className="groups-container">
            {groups.map(group =>
                <GroupPreview group={group} key={group.id} />
            )}
        </div>

    )
}