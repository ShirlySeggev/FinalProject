const initialState = {
    boards: null,
    board: null,
    activeTask: null,
}

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_BOARD':
            return { ...state, board: action.board }
        case 'ADD_BOARD':
            return { ...state, boards: [action.board, ...state.boards] }
        case 'REMOVE_BOARD':
            return { ...state, boards: state.boards.filter(board => board._id !== action.boardId) }
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }
        case 'SET__TASK':
            return { ...state, activeTask: action.task }
        case 'ADD__TASK':
            return console.log('add');
        default:
            return state
    }
}
