import { connect } from 'react-redux';
import { Component } from 'react';
import { loadBoards, addBoard } from '../store/actions/board.actions.js';
import { SectionTitle } from '../cmps/shared/SectionTitle';
import { BsCardChecklist } from 'react-icons/bs';
import { BoardList } from '../cmps/board/BoardList';
import { utilService } from '../services/util-service.js';


class _Boards extends Component {
    state = {
        board: {
            title: '',
        }
    }

    async componentDidMount() {
        this.loadBoards();
    }

    async loadBoards() {
        try {
            this.props.loadBoards();
        } catch (err) {
            console.log('Error at loading boards:', err)
        }
    }


    handleChange = (ev) => {
        var board = { ...this.state.board };
        var { name, value } = ev.target;
        board[name] = value;
        this.setState({ board })
    }

    onAddBoard = (ev) => {
        ev.preventDefault();
        const boardTitle = this.state.board.title;
        this.clearBoard(); //doesnt clean the board!
        const board = this.createBoard(boardTitle);
        const { addBoard } = this.props;
        addBoard(board);
        this.loadBoards();
        // this.props.history.push(`/board/${board._id}`);
    }
    clearBoard = () => {
        this.setState({
            board: {
                title: '',
            }
        })
    }

    createBoard = (title) => {
        const board = {
            _id: utilService.makeId(),
            title,
            createdAt: Date.now(),
            createdBy: { _id: "u105", fullname: "Poki King", imgUrl: "http://some-img" },
            style: {
                "bgc": "#00AECC"
            },
            labels: [],
            members: [{ _id: "u105", fullname: "Poki King", imgUrl: "http://some-img" }],
            groups: [],
            activities: [],
        }
        return board;
    }


    render() {
        const { boards } = this.props;
        if (!boards) return <h1>Loading...</h1>
        return (
            <section className="boardApp-main">
                <span className="boardApp-header">
                    <SectionTitle Icon={BsCardChecklist}> Boards</SectionTitle>
                </span>
                {/* <h4 className="boards-boards-title">Boards</h4> */}

                <div className="boards-container">
                    <div className="boardAdd">
                        <form onSubmit={this.onAddBoard}>
                            <input className="boardAdd-input" type="text" name="title" id="title" placeholder="+ Add new board" autoComplete="off" onChange={this.handleChange} />
                        </form>
                    </div>
                    <BoardList boards={boards} />
                </div>
            </section >
        )
    }
}

function mapStateToProps(state) {
    return {
        boards: state.boardModule.boards,
    }
}
const mapDispatchToProps = {
    loadBoards,
    addBoard
}



export const Boards = connect(mapStateToProps, mapDispatchToProps)(_Boards)