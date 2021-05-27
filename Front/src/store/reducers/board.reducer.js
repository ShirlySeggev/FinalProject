const initialState = {
    boards: null,
    board: null
    // filterBy: {
    //     name: '',
    //     inStock: 'All',
    //     type: 'All',
    //     sort: 'ascending-name'
    // }
}

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_BOARD':
            return { ...state, board: action.board }
        case 'ADD_BOARD':
            return { ...state, boards: [action.board, ...state.boards] }
        case 'UPDATE_BOARD':
            return { ...state, board: action.board }
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }
        // case 'REMOVE_BOARD':
        //     return { ...state, toys: state.toys.filter(toy => toy._id !== action.toyId) }
        // // case 'SET_FILTER':
        // //     return { ...state, filterBy: action.filterBy }
        // case 'ADD_GROUP':
        //     return { ...state, groups: [...state.groups, action.group] }
        // case 'EDIT_BOARD':
        //     return {...state, toys: state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy) }
        // case 'ADD_TO_CART':
        //     return { ...state, shoppingCart: [...state.shoppingCart, action.item] }
        default:
            return state
    }
}
