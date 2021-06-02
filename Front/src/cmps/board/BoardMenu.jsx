import { Component } from 'react';
import { ModalHeader } from '../shared/ModalHeader.jsx';
import { BoardBackground } from './BoardBackground.jsx';
import { ActivityLog } from './ActivityLog.jsx';
import { BoardMembers } from './BoardMembers';


export class BoardMenu extends Component {
    state = {
        isAlreadyOpen: false,
        toggleBoardBcg: false,
        toggleRemoveBoard: false,
        toggleActivity: false,
        isMembers: false
    }

    componentDidMount() {
    }


    toggleBoardBcg = () => {
        this.setState({ toggleBoardBcg: !this.state.toggleBoardBcg, isAlreadyOpen: !this.state.isAlreadyOpen })
    }

    toggleRemoveBoard = () => {
        this.setState({ toggleRemoveBoard: !this.state.toggleRemoveBoard, isAlreadyOpen: !this.state.isAlreadyOpen })
    }
    toggleActivity = () => {
        this.setState({ toggleActivity: !this.state.toggleActivity, isAlreadyOpen: !this.state.isAlreadyOpen })
    }
    toggleMembers = () => {
        this.setState({ isMembers: !this.state.isMembers })
    }

    onRemove = () => {
        console.log('here');
        const { board, onRemoveBoard } = this.props;
        onRemoveBoard(board._id);
        // this.props.history.push('/board');
    }

    onUpdateBgc = (newStyle) => {
        const { board, onUpdateBoard } = this.props;
        const updatedBoard = { ...board };
        updatedBoard.style = newStyle;
        onUpdateBoard(updatedBoard);
    }


    render() {
        const { isAlreadyOpen, isMembers, toggleBoardBcg, toggleRemoveBoard, toggleActivity } = this.state;
        const { toggleBoardMenu, board } = this.props;
        const { activities, members } = board;
        return (
            <section className="wePlanApp-menu open" >
                <ModalHeader title='About this board' closeModal={toggleBoardMenu} />
                <ul className="menu-options">
                    <li onClick={this.toggleBoardBcg}>Change board background</li>

                    <li  onClick={this.toggleMembers} >Add a member</li>
                    {isMembers && <BoardMembers toggleMembers={this.toggleMembers} members={members} board={board}/>}


                    <li onClick={this.toggleRemoveBoard}>Delete board</li>
                    <li onClick={this.toggleActivity}>Activity menu</li>
                    <li /* onClick={this.openDashboard} */>Board dashboard</li>
                    {/* isAlreadyOpen && */ toggleBoardBcg && <BoardBackground onUpdateBgc={this.onUpdateBgc} />}
                    {/* isAlreadyOpen && */ toggleRemoveBoard &&
                        <div>
                            <p>Are you shure?</p>
                            <button className="primary-btn menu-btn" onClick={this.onRemove}>Yes, delete board</button>
                            <button className="primary-btn" onClick={this.toggleRemoveBoard}>No</button>
                        </div>
                    }
                    {/* isAlreadyOpen && */ toggleActivity && <ActivityLog activities={activities} />}
                </ul>

            </section >
        )
    }
}

