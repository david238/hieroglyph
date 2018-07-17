import React from 'react';
import classes from './Pwd.css';

const pwd = (props) => (
    <h1>Password: <span className={classes.colored}>{props.pwd}</span></h1>
);

export default pwd;