import { connect } from 'react-redux';
import { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { /* loadToys, setFilter, removeToy  */ } from '../store/actions/board.actions.js';
import { boardService } from '../services/board.service'
import { BoardList } from '../cmps/BoardList';



class _Boards extends Component {
    state = {
        boards: null
    }

    async componentDidMount() {
        try {
            const boards = await boardService.query();
            this.setState({ boards });
        } catch (err) {
            console.log(err);
        }
    }



    render() {
        const { boards } = this.state;
        if (!boards) return <h1>Loading...</h1>
        return (
            <section className="toyApp-main">
                <div className="main-header">
                    <h1>BOARDS</h1>
                    <BoardList boards={boards} />
                    {/* ADD NEW BOARD */}
                </div>
            </section >
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}
const mapDispatchToProps = {

}


export const Boards = connect(mapStateToProps, mapDispatchToProps)(_Boards)