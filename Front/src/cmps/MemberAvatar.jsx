import Avatar from 'react-avatar';


export default function MemberAvatar({ member }) {
    return (
        <div>
            <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name={member.fullname.charAt(0)} round={true} size={30}/>
        </div>
    )
}