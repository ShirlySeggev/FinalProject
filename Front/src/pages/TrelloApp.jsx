import { connect } from 'react-redux';
import { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { loadBoard } from '../store/actions/board.actions.js';
import { boardService } from '../services/board.service.js';
import { GroupList } from '../cmps/GroupList.jsx';
import { BoardHeader } from '../cmps/BoardHeader.jsx';
import { TaskDetails } from './TaskDetails.jsx';



class _TrelloApp extends Component {
    state = {

    }

    componentDidMount() {
        this.loadBoard();
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('this.props.match.arams.boardId: ', this.props.match.params)
    }
    async loadBoard() {
        const { boardId } = this.props.match.params;
        try {
            this.props.loadBoard(boardId);
        } catch (err) {
            console.log('Board:', err)
        }
    }



    render() {
        console.log('board', this.props.board);
        // console.log('groups', groups);
        const { board } = this.props;
        if (!board) return <h1>Loading...</h1>
        const { title, groups } = this.props.board;
        return (
            <section className="app-main">
                {/* <BoardHeader board={board}/> */}
                <h1>Board title:{title}</h1>
                <GroupList groups={groups} />
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
}


export const TrelloApp = connect(mapStateToProps, mapDispatchToProps)(_TrelloApp)