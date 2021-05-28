import { Component } from 'react';
import MemberAvatar from '../MemberAvatar';
import { BoardMenu } from './BoardMenu.jsx';

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
        console.log('board', this.props.board);
        const { board } = this.props;
        const { toggleMenu } = this.state;
        if (!board) return <h1>Loading...</h1>
        const { title, groups, style, members } = this.props.board;
        return (
            <section className="trelloApp-header" >
                <div className="board-title">{title}</div>
                <div className="board-members">
                    {members.map(member => <MemberAvatar member={member} key={member._id}/>)}
                </div>
                <button onClick={this.toggleBoardMenu}>Menu</button>
                {toggleMenu && <BoardMenu {...this.props}/>}
            </section >
        )
    }
}

