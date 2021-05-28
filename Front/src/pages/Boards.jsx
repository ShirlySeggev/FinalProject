import { connect } from 'react-redux';
import { Component } from 'react';
import { loadBoards, addBoard } from '../store/actions/board.actions.js';
import { BoardList } from '../cmps/board/BoardList';





class _Boards extends Component {
    state = {
        isAddBoard: false,
        newBoard: {
            title: null,
            groups: [],
            createdBy: { _id: "u105", fullname: "Poki King", imgUrl: "http://some-img" },
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

    toggleAddBoard = () => {
        const { isAddBoard } = this.state
        if (isAddBoard) {
            this.setState({
                isAddBoard: false,
                newBoard: {
                    title: null,
                    groups: [],
                    createdBy: { _id: "u105", fullname: "Poki King", imgUrl: "http://some-img" },
                }
            })
        } else this.setState({ isAddBoard: true })
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = (target.type === 'number') ? +target.value : target.value;
        this.setState(prevState => ({
            ...prevState,
            newBoard: {
                ...prevState.newBoard,
                [field]: value,
            }
        }))
    }

    onAddBoard = () => {
        const { newBoard } = this.state
        const { addBoard } = this.props
        addBoard(newBoard)
        this.toggleAddBoard()
    }


    render() {
        const { boards, addBoard } = this.props;
        const { isAddBoard } = this.state
        if (!boards) return <h1>Loading...</h1>
        return (
            <section className="boardApp-main">
                <div className="main-header">
                    {isAddBoard && <div className="add-new-board">
                        <label htmlFor="title">Board Title: <input type="text" name="title" id="title" onChange={this.handleChange}/></label>
                        <button onClick={this.onAddBoard}>Add</button>
                        <button onClick={this.toggleAddBoard}>Cancel</button>
                    </div>}
                    <h1>BOARDS</h1>
                    {!isAddBoard && <div onClick={this.toggleAddBoard}>Add a new board</div>}
                    <BoardList boards={boards} />
                    {/* ADD NEW BOARD */}
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