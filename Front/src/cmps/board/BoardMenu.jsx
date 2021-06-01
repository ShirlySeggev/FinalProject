import { Component } from 'react';
import { boardService } from '../../services/board.service.js';
import { ModalHeader } from '../shared/ModalHeader.jsx';
import { BoardBackground } from './BoardBackground.jsx';
import { ActivityLog } from './ActivityLog.jsx';


export class BoardMenu extends Component {
    state = {
        toggleBoardBcg: false,
        toggleRemoveBoard: false,
        toggleActivity: false,
    }

    componentDidMount() {
    }


    toggleBoardBcg = () => {
        this.setState({ toggleBoardBcg: !this.state.toggleBoardBcg })
    }

    toggleRemoveBoard = () => {
        this.setState({ toggleRemoveBoard: !this.state.toggleRemoveBoard })
    }
    toggleActivity = () => {
        this.setState({ toggleActivity: !this.state.toggleActivity })
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
        const { toggleBoardBcg, toggleRemoveBoard, toggleActivity } = this.state;
        const { toggleBoardMenu } = this.props;
        const { activities } = this.props.board;
        return (
            <section className="wePlanApp-menu open" >
                <ModalHeader title='About this board' closeModal={toggleBoardMenu} />
                <ul className="menu-options">
                    <li onClick={this.toggleBoardBcg}>Change board background</li>

                    {/* ----------------- HERE BROTHER ------------------------ */}
                    <li /* onClick={this.openToggle} */>Add a member</li>


                    <li onClick={this.toggleRemoveBoard}>Delete board</li>
                    <li onClick={this.toggleActivity}>Activity menu</li>
                    <li /* onClick={this.openDashboard} */>Board dashboard</li>
                    {toggleBoardBcg && <BoardBackground onUpdateBgc={this.onUpdateBgc} />}
                    {toggleRemoveBoard &&
                        <div>
                            <p>Are you shure?</p>
                            <button onClick={this.onRemove}>Yes, delete board</button>
                            <button onClick={this.toggleRemoveBoard}>No</button>
                        </div>
                    }
                    {toggleActivity && <ActivityLog activities={activities} />}
                </ul>

            </section >
        )
    }
}

