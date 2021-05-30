import { connect } from 'react-redux';
import { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import { loadBoard, updateBoard, removeBoard } from '../store/actions/board.actions.js';
import { GroupList } from '../cmps/group/GroupList';
import { BoardHeader } from '../cmps/board/BoardHeader';
import { TaskDetails } from '../cmps/task/TaskDetails.jsx';




class _WePlanApp extends Component {
    state = {

    }

    componentDidMount() {
        this.loadBoard();
    }

    // componentDidUpdate(prevProps,prevState) {
    //     console.log('this.props.match.arams.boardId: ', this.props.match.params)
    // }

    async loadBoard() {
        const { boardId } = this.props.match.params;
        try {
            this.props.loadBoard(boardId);
        } catch (err) {
            console.log('Load Board:', err)
        }
    }

    async updateBoard(board) {
        try {
            this.props.updateBoard(board);
        } catch (err) {
            console.log('Update Board:', err)
        }
    }

    async removeBoard(boardId) {
        try {
            this.props.removeBoard(boardId);
        } catch (err) {
            console.log('Delete Board:', err)
        }
    }

    updateGroup = (group) => {
        console.log(group, 'noew');
        const { board } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === group.id);
        const updatedBoard = { ...board };
        updatedBoard.groups[groupIdx] = group;
        this.updateBoard(updatedBoard);
    }

    removeGroup = (groupId) => {
        const { board } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === groupId)
        const updatedBoard = { ...board };
        updatedBoard.groups.splice(groupIdx, 1)
        this.updateBoard(updatedBoard);
    }
    // removeTask = (taskId,groupId) => {
    //     const { board } = this.props;
    //     const groupIdx = board.groups.findIndex(group => group.id === groupId)
    //     const taskIdx = board.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
    //     const updatedBoard = { ...board };
    //     updatedBoard.groups.tasks.splice(taskIdx, 1)
    //     this.updateBoard(updatedBoard);
    // }

    addGroup = (group) => {
        const { board } = this.props;
        const updatedBoard = { ...board };
        updatedBoard.groups.push(group);
        this.props.updateBoard(updatedBoard);
    }


    render() {
        const { board, activeTask } = this.props;
        if (!board) return <h1>Loading...</h1>
        const { title, groups, style } = this.props.board;
        return (
            <section className="wePlanApp-main-content" /* style={{ backgroundImage: `url(${style.bgc})` }} */>
                 <BoardHeader board={board} updateBoard={this.updateBoard} removeBoard={this.removeBoard} />
                <Switch>
                    <Route path='/board/:boardId/group/:groupId/task/:taskId' component={TaskDetails} />
                </Switch>
                <GroupList groups={groups} updateGroup={this.updateGroup} removeGroup={this.removeGroup} addGroup={this.addGroup} />
            </section >
        )
    }
}

function mapStateToProps(state) {
    return {
        board: state.boardModule.board,
    }
}
const mapDispatchToProps = {
    loadBoard,
    updateBoard,
    removeBoard
}

export const WePlanApp = connect(mapStateToProps, mapDispatchToProps)(_WePlanApp)