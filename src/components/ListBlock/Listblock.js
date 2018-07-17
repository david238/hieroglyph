import React from 'react';
import Blockicon from '../Blockicon/Blockicon';

const ListBlock = (props) => (
    <div>
        {
            props.iconStack.map( index => 
                <Blockicon 
                nameIcon={index.name}
                key={index.key}
                display={index.display}
                clicked={() => props.clicked(index.key)}/>
            )
        }
    </div>
)

export default ListBlock;