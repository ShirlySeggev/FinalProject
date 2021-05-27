// import axios from 'axios';
// import { httpService } from './http.service'
import { asyncBoardService } from './async-board.service.js';

const STORAGE_KEY = 'boards';


export const boardService = {
    query,
    getById,
    update,
    remove,
    save
}


function query() {
    return asyncBoardService.query(STORAGE_KEY)
}

function getById(boardId) {
    return asyncBoardService.get(STORAGE_KEY, boardId);
}

function remove(boardId) {
    return asyncBoardService.remove(STORAGE_KEY, boardId);
}

function update(board) {
    return asyncBoardService.put(STORAGE_KEY, board)
}

function save(board) {
    return asyncBoardService.post(STORAGE_KEY, board)
}

