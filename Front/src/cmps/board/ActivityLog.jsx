import React from 'react';
import MemberAvatar from '../shared/MemberAvatar';
import { formatDistance } from 'date-fns';


export function ActivityLog({ activities }) {
    const { } = activities;

    return (
        <section className="ActivityLog">
            {activities.map(activity => {
                return <div key={activity.id}>
                    <div className="activity">
                        <MemberAvatar member={activity.byMember} />
                        <div className="activity-description">
                            <p ><span>{activity.byMember.fullname}</span> {activity.txt} to {activity.task.title}</p>
                            <p>{formatDistance(activity.createdAt, Date.now())} ago</p>
                        </div>
                    </div>
                </div>
            })
            }
        </section>

    )
}