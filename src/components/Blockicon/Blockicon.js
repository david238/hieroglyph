import React from 'react';
import Fontawesome from 'react-fontawesome';
import classes from "./Blockicon.css";


const blockicon = (props) => (
    <div className={props.display? classes.border: classes.disabled}>
        <Fontawesome  
        name={props.nameIcon}
        size='4x'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        onClick={props.clicked}/>
    </div>
);

export default blockicon;

