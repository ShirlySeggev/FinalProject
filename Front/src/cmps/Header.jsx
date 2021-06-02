import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/wePlan.png';
import { Avatar } from "@material-ui/core";



class _Header extends React.Component {

    render() {
        return (
            <header className="app-header">
                <nav>
                    <div>
                        <img src={logo} alt="logo" />
                        <NavLink to="/"><h1>WePlan</h1></NavLink>
                    </div>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/board">Boards</NavLink></li>
                        <li><NavLink to="/login"><Avatar src="/broken-image.jpg" /></NavLink></li>
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