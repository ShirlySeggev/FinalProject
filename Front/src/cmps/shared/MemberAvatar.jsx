import Avatar from 'react-avatar';


export default function MemberAvatar({ member }) {
    return (
        <div>
            <Avatar color={Avatar.getRandomColor('sitebase', ['#0079BF', '#519839', '#89609E', '#B04632'])} name={member.fullname.charAt(0)} src={member.imgUrl}  round={true} size={30}/>
        </div>
    )
}