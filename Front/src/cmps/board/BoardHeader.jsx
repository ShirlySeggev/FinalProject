import { Component } from 'react';
import MemberAvatar from '../shared/MemberAvatar';
import { BoardMenu } from './BoardMenu.jsx';
import { BsThreeDots } from 'react-icons/bs';
import { withRouter } from 'react-router';

export class BoardHeader extends Component {
    state = {
        toggleMenu: false,
        board: {
            title: '',
        }
    }

    componentDidMount() {
        const { title } = this.props.board;
        const board = { title };
        this.setState({ board });
    }

    handleChange = (ev) => {
        var board = { ...this.state.board };
        var { name, value } = ev.target;
        board[name] = value;
        this.setState({ board })
    }

    onChangeBoardHeader = (ev) => {
        ev.preventDefault();
        const { board, onUpdateBoard } = this.props;
        const updatedBoard = { ...board };
        updatedBoard.title = this.state.board.title;
        onUpdateBoard(updatedBoard);
    }

    toggleBoardMenu = () => {
        this.setState({ toggleMenu: !this.state.toggleMenu })
    }

    render() {
        const { board } = this.props;
        const { toggleMenu } = this.state;
        const { title } = this.state.board;
        if (!board) return <h1>Loading...</h1>
        const { groups, style, members } = this.props.board;
        return (
            <section className="wePlanApp-header" >
                <form onSubmit={this.onChangeBoardHeader}>
                    <input className="board-header" type="text" name="title" value={title} autoComplete="off" spellCheck="false" onChange={this.handleChange} />
                </form>
                <div className="board-members">
                    {members.map(member => <MemberAvatar member={member} key={member._id} />)}
                </div>
                <div className="board-menu-btn btn" onClick={this.toggleBoardMenu}>
                    <div><BsThreeDots /></div>
                    <span>Show menu</span>
                </div>
                {toggleMenu && <BoardMenu board={board} toggleBoardMenu={this.toggleBoardMenu} onRemoveBoard={this.props.onRemoveBoard} onUpdateBoard={this.props.onUpdateBoard} />}
            </section >
        )
    }
}

