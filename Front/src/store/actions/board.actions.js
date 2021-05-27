import { boardService } from '../../services/board.service.js'


export function loadBoards() {
    return async dispatch => {
        try {
            const boards = await boardService.query()
            dispatch({type: 'SET_BOARDS', boards})
        } catch (err){
            console.log('BoardActions: err in loading boards', err)
        }
    }
}

export function addBoard(board) {
    return async dispatch => {
        try {
            const newBoard = await boardService.save(board)
            dispatch({ type: 'ADD_BOARD', board: newBoard })
        } catch (err) {
            console.log('ToyActions: err in save board', err)
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

// export function setFilter(filterBy) {
//     return dispatch => {
//         const action = {
//             type: 'SET_FILTER',
//             filterBy
//         }
//         dispatch(action)
//     }
// }


// export function addToy(toy) {
//     return async dispatch => {
//         try {
//             const newToy = await toyService.add(toy)
//             dispatch({ type: 'ADD_TOY', toy: newToy })
//         } catch (err) {
//             console.log('ToyActions: err in saveToy', err)
//         }
//     }
// }

// export function removeToy(toyId) {
//     return async dispatch => {
//         try {
//             await toyService.remove(toyId)
//             dispatch({ type: 'REMOVE_TOY', toyId })
//         } catch (err) {
//             console.log('ToyActions: err in removeToy', err)
//         }
//     }
// }

// export function editToy(toy) {
//     return async dispatch => {
//         try {
//             const editedToy = await toyService.update(toy)
//             dispatch({ type: 'EDIT_TOY', toy: editedToy })
//         } catch (err) {
//             console.log('ToyActions: err in editToy', err)
//         }
//     }
// }
