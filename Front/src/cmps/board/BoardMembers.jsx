import { Component } from "react";
import { connect } from 'react-redux';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MemberAvatar from '../shared/MemberAvatar'
import { ModalHeader } from '../shared/ModalHeader';
import { loadUsers } from '../../store/actions/user.actions'
import { updateBoard } from '../../store/actions/board.actions'


class _BoardMembers extends Component {
    state = {
        boardMembers: [],
        notBoardMembers: []
    }


    async componentDidMount() {
       await this.loadAllUsers()
        
        this.setState({
            boardMembers: this.loadBoardMembers(),
            notBoardMembers: this.loadNotBoardMembers()
        })
    }

    async loadAllUsers() {
        try {
            this.props.loadUsers()
        } catch (err) {
            console.log('Error at loading usrers:', err)
        }
    }

    loadBoardMembers() {
        const { members } = this.props
        return members
    }

    loadNotBoardMembers() {
        const { members, users } = this.props
        if (members) return users
        const notBoardMembers = users.filter(member => {
            return !users.find(user => user._id === member._id)
        })
        return notBoardMembers
    }


   async  onClickMember (member)  {
        const { users, board } = this.props
        const { boardMembers } = this.state
        if (!boardMembers) board.members = [member]
        else {
            const isBoardMember = boardMembers.find(boardMember => boardMember._id === member._id)
            !isBoardMember ? board.members.push(member) : board.members = board.members.filter(currMember => currMember._id !== member._id)
            this.setState({
                boardMembers: this.loadBoardMembers(),
                notBoardMembers: this.loadNotBoardMembers()
            }, console.log('1', this.state))
        }
        console.log(board.members);
        await this.props.updateBoard(board);
    }


    render() {
        const { toggleMembers } = this.props
        const { boardMembers, notBoardMembers } = this.state
        return (
            <div className="task-add-members-container">
                <ModalHeader title='Members' closeModal={toggleMembers} />
                <ul>
                    <h4 className="task-members-ul-title">Invite users</h4>
                    {boardMembers && boardMembers.map(member =>
                        <li key={member._id} className="task-add-member-container" onClick={() => this.onClickMember(member)}>
                            <MemberAvatar member={member} />
                            <h4>{member.fullname}</h4>
                            <h4>({member.username})</h4>
                            {<FontAwesomeIcon icon={faCheck} />}
                        </li>)}

                    {!notBoardMembers && <div>No available members to add</div>}
                    {notBoardMembers && notBoardMembers.map(member =>
                        <li key={member._id} className="task-add-member-container" onClick={() => this.onClickMember(member)}>
                            <MemberAvatar member={member} />
                            <h4>{member.fullname}</h4>
                            <h4>({member.username})</h4>
                        </li>)}

                </ul>
            </div>

        )
    }
}



function mapStateToProps(state) {
    return {
        users: state.userModule.users,
    }
}
const mapDispatchToProps = {
    loadUsers,
    updateBoard
}



export const BoardMembers = connect(mapStateToProps, mapDispatchToProps)(_BoardMembers)