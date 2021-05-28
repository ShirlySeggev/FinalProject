const initialState = {
    boards: null,
    board: null,
    activeTask: null,
    activeGroupId: null
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
        case 'SET_TASK':
            return { ...state, activeTask: action.task }
        case 'SET_CURR_GROUP_ID':
            return { ...state, activeGroupId: action.groupId }
        default:
            return state
    }
}
