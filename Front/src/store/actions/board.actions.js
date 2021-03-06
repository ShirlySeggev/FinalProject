import { boardService } from '../../services/board.service.js'


export function loadBoards() {
    return async dispatch => {
        try {
            const boards = await boardService.query()
            dispatch({ type: 'SET_BOARDS', boards })
        } catch (err) {
            console.log('BoardActions: err in loading boards', err)
        }
    }
}

export function loadBoard(boardId) { // Action Creator
    return async dispatch => {
        try {
            const board = await boardService.getById(boardId)
            dispatch({ type: 'SET_BOARD', board })
        } catch (err) {
            console.log('BoardActions: err in loadBoard', err)
        }
    }
}

export function addBoard(board) {
    return async dispatch => {
        try {
            const newBoard = await boardService.save(board)
            dispatch({ type: 'ADD_BOARD', board: newBoard })
        } catch (err) {
            console.log('BoardActions: err in save board', err)
        }
    }
}

export function updateBoard(board) {
    return async dispatch => {
        try {
            const updatedBoard = await boardService.update(board)
            dispatch({ type: 'SET_BOARD', board: updatedBoard })
        } catch (err) {
            console.log('BoardActions: err in updateBoard', err)
        }
    }
}

export function removeBoard(boardId) {
    return async dispatch => {
        try {
            await boardService.remove(boardId)
            dispatch({ type: 'REMOVE_BOARD', boardId })
        } catch (err) {
            console.log('BoardActions: err in removeBoard', err)
        }
    }
}



// export function setFilter(filterBy) {
//     return dispatch => {
//         const action = {
//             type: 'SET_FILTER',
//             filterBy
//         }
//         dispatch(action)
//     }
// }
