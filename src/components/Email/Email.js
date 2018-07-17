import React from 'react';
import classes from './Email.css';

const email = (props) => (
    <div className={classes.inputEmail}>
        <input 
            type="email" 
            placeholder="here@example.com" 
            onChange={props.onChanged}
            value = {props.email}/>
        </div>
)

export default email;