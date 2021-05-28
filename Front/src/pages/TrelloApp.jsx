import { connect } from 'react-redux';
import { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { loadBoard, updateBoard } from '../store/actions/board.actions.js';
import { boardService } from '../services/board.service.js';
import { GroupList } from '../cmps/GroupList.jsx';
import { BoardHeader } from '../cmps/BoardHeader.jsx';
import { TaskDetails } from './TaskDetails.jsx';



class _TrelloApp extends Component {
    state = {

    }

    componentDidMount() {
        console.log('trelloapp mounted')
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

    async deleteBoard(boardId) {
        try {
            this.props.deleteBoard(boardId);
        } catch (err) {
            console.log('Delete Board:', err)
        }
    }



    render() {
        // console.log('groups', groups);
        const { board } = this.props;
        console.log('board', this.props.board);
        if (!board) return <h1>Loading...</h1>
        const { title, groups, style } = this.props.board;
        return (
            <section className="trelloApp-main" /* style={{ backgroundImage: `url(${style.bgc})` }} */>
                <BoardHeader board={board} />
                <Switch>
                    <Route to='/board/:boardId/task/:taskId' component={TaskDetails}/>
                </Switch>
                <GroupList groups={groups} updateBoard={this.updateBoard} deleteBoard={this.deleteBoard} />
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
    updateBoard
}


export const TrelloApp = connect(mapStateToProps, mapDispatchToProps)(_TrelloApp)