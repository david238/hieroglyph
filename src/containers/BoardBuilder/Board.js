import React, { Component } from 'react';
import classes from './Board.css';
import { Route, Link } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Homepage from '../../components/homepage';

class Board extends Component {
    render() {
        return (
            <div className={classes.Board}>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Homepage} />
                <Route path="/register" exact render={() => <Register  howlong="15" />}/>
                <Route path="/login" exact render={() => <Login  howlong="15" />}/>
            </div>
        );
    }
}

export default Board;