import { Component } from 'react';
import { boardService } from '../../services/board.service.js';
import { ModalHeader } from '../shared/ModalHeader.jsx';


export class BoardMenu extends Component {
    state = {
        openToggle: false,
        // toggleUpdateBoardBcg: false,
        // toggleAddMemberToBoard: false,
        // toggleDeleteBoard: false,
    }

    componentDidMount() {
    }

    openToggle = (type) => {
        this.setState({ openToggle: !this.state.openToggle });
        switch (type) {
            case 'NAME':
                return
            case 'BGC':
                return
            case 'MEMBER':
                return
            case 'DELETE':
                return
        }
    }

    // DynamicCmp = (note) => {
    //     switch (type) {
    //         case 'NoteText':
    //             return <NoteText note={note} />
    //         case 'NoteImg':
    //             return <NoteImg note={note} />
    //         case 'NoteTodos':
    //             return <NoteTodos note={note} />
    //         case 'NoteVideo':
    //             return <NoteVideo note={note} />
    //         case 'NoteAudio':
    //             return <NoteAudio note={note} />
    //         default:
    //             return console.log('no note type');
    //     }
    // }

    updateBoardName = (title) => {
        const { board, updateBoard } = { ...this.props }
        // board.title = title
        // updateBoard(board)
    }

    updateBoardBgc = (bgc) => {
        const { board, updateBoard } = { ...this.props }
        // board.style.bgc = bgc
        // updateBoard(board)
    }

    addMemberToBoard = (member) => {
        const { board, updateBoard } = { ...this.props }
        // board.members.push(member)
        // updateBoard(board)
    }

    deleteBoard = () => {
        const { board, removeBoard } = { ...this.props }
        // removeBoard(board._id)
    }



    render() {
        const { openToggle } = this.state;
        const { toggleBoardMenu } = this.props;
        return (
            <section className="wePlanApp-menu open" >
                <ModalHeader title='About this board' closeModal={toggleBoardMenu} />
                <ul className="menu-options">
                    <li /* onClick={this.openToggle(NAME)} */>Change name</li>
                    <li /* onClick={this.openToggle(BGC)} */>Change board background</li>
                    <li /* onClick={this.openToggle(MEMBER)} */>Add a member</li>
                    <li /* onClick={this.openToggle(DELETE)} */>Delete board</li>
                    <li /* onClick={this.openDashboard} */>Board dashboard</li>
                </ul>
                {openToggle && <this.DynamicCmp /* note={note} */ />}

            </section >
        )
    }
}

