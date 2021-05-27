import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/construction.png';



class _Header extends React.Component {

    render() {
        return (
            <header className="app-header">
                <nav>
                    <div>
                        <img src={logo} alt="" />
                        <NavLink to="/"><h1>TRELLO</h1></NavLink>
                    </div>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/board">Boards</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}


export const Header = connect(mapStateToProps)(_Header)