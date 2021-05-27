import { Component } from 'react';
import { boardService } from '../services/board.service.js';


export class BoardMenu extends Component {
    state = {

    }

    componentDidMount() {

    }






    render() {
     
        return (
            <section className="trelloApp-menu" >
                <ul>
                    <li /* onClick={updateBoardName} */>Change name</li>
                    <li /* onClick={updateBoardBcg} */>Change board background</li>
                    <li /* onClick={updateBoardBcg} */>Add a member</li>
                    <li /* onClick={openDashboard} */>Board dashboard</li>
                    <li /* onClick={deleteBoard} */>Delete Board</li>
                </ul>
            </section >
        )
    }
}

