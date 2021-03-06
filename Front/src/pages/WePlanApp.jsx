import { connect } from 'react-redux';
import { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import { loadBoard, updateBoard, removeBoard } from '../store/actions/board.actions.js';
import { GroupList } from '../cmps/group/GroupList';
import { BoardHeader } from '../cmps/board/BoardHeader';
import { TaskDetails } from '../cmps/task/TaskDetails/TaskDetails';

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

    onUpdateBoard = (board) => {
        this.updateBoard(board);
    }
    onRemoveBoard = (boardId) => {
        this.removeBoard(boardId);
    }

    updateGroup = (newGroup) => {
        const { board } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === newGroup.id);
        const updatedBoard = { ...board };
        updatedBoard.groups[groupIdx] = newGroup;
        this.updateBoard(updatedBoard);
    }

    removeGroup = (groupId) => {
        const { board } = this.props;
        const groupIdx = board.groups.findIndex(group => group.id === groupId)
        const updatedBoard = { ...board };
        updatedBoard.groups.splice(groupIdx, 1)
        this.updateBoard(updatedBoard);
    }

    addGroup = (group) => {
        const { board } = this.props;
        const updatedBoard = { ...board };
        updatedBoard.groups.push(group);
        this.props.updateBoard(updatedBoard);
    }

    handleDragEnd = async (res) => {
        console.log('in handleDragEnd')
        const { source, destination, type } = res;
        const { board } = this.props;
        const updatedBoard = { ...board };
        if (!destination) return;
        if (destination.droppableId === source.droppableId
            &&
            destination.index === source.index) return;
        if (type === 'group') {
            const newGroups = this._reorder(board.groups, source.index, destination.index);
            updatedBoard.groups = newGroups;
        } else if (type === 'task') {
            if (destination.droppableId === source.droppableId) {
                var groupIdx = board.groups.findIndex(group => group.id === source.droppableId)
                const newTasks = this._reorder(board.groups[groupIdx].tasks, source.index, destination.index);
                updatedBoard.groups[groupIdx].tasks = newTasks;
            } else if (destination.droppableId !== source.droppableId) {
                const sourceGroup = source.droppableId;
                const destinationGroup = destination.droppableId;
                //remove task from source group
                const sourceGroupIdx = board.groups.findIndex(group => group.id === sourceGroup)
                const sourceGroupItems = Array.from(board.groups[sourceGroupIdx].tasks)
                const [transferedItem] = sourceGroupItems.splice(source.index, 1);
                //add task to destination group
                const destinationGroupIdx = board.groups.findIndex(group => group.id === destinationGroup);
                const destinationGroupItems = Array.from(board.groups[destinationGroupIdx].tasks);
                destinationGroupItems.splice(destination.index, 0, transferedItem);
                //update groups in data
                updatedBoard.groups[sourceGroupIdx].tasks = sourceGroupItems;
                updatedBoard.groups[destinationGroupIdx].tasks = destinationGroupItems;
            }
        }
        await this.props.updateBoard(updatedBoard);
    }

    _reorder = (list, sourceIdx, destIdx) => {
        const items = Array.from(list);
        const [removedItem] = items.splice(sourceIdx, 1);
        items.splice(destIdx, 0, removedItem);
        return items;
    }


    render() {
        const { board } = this.props;
        if (!board) return <h1>Loading...</h1>
        const { title, groups, style } = this.props.board;
        return (
            <section className="wePlanApp-main-content" style={{ backgroundColor: style.bgc }}>
                <BoardHeader board={board} onUpdateBoard={this.onUpdateBoard} onRemoveBoard={this.onRemoveBoard} />
                <Switch>
                    <Route path='/board/:boardId/group/:groupId/task/:taskId' component={TaskDetails} />
                </Switch>
                <GroupList groups={groups} boardId={board._Id} board={board} updateGroup={this.updateGroup} removeGroup={this.removeGroup} addGroup={this.addGroup} handleDragEnd={this.handleDragEnd} />
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