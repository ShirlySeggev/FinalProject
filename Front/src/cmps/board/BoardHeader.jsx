import { Component } from 'react';
import MemberAvatar from '../shared/MemberAvatar';
import { BoardMenu } from './BoardMenu.jsx';
import { BsThreeDots } from 'react-icons/bs';

export class BoardHeader extends Component {
    state = {
        toggleMenu: false
    }

    componentDidMount() {

    }


    toggleBoardMenu = () => {
        this.setState({ toggleMenu: !this.state.toggleMenu })
    }

    render() {
        // console.log('board', this.props.board);
        const { board } = this.props;
        const { toggleMenu } = this.state;
        if (!board) return <h1>Loading...</h1>
        const { title, groups, style, members } = this.props.board;
        return (
            <section className="wePlanApp-header" >
                <div className="board-title">{title}</div>
                <div className="board-members">
                    {members.map(member => <MemberAvatar member={member} key={member._id} />)}
                </div>
                <div className="board-menu-btn btn" onClick={this.toggleBoardMenu}>
                    <div className="board-btn-icon"><BsThreeDots /></div>
                    <span className="board-btn-txt">Show menu</span>
                </div>
                {toggleMenu && <BoardMenu {...this.props} toggleBoardMenu={this.toggleBoardMenu}/>}
            </section >
        )
    }
}

