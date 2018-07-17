import React from 'react';

const homepage = (props) => (
    <div>
        <h1>Hieroglyphic Login Form</h1>
        <p>During the ancient times, SYMBOLS were first created before LETTERS.</p>
        <p>( PS: This image was taken during my trip in UK. )</p>
        <img src={ require('../assets/images/IMG_7185.jpg')} width="50%" height="100%" alt="UK_ancient_board"/>

        <h1>You liked the idea?</h1>
        <p>This might be a start of something, to change the way people logged into websites. Feel free to fork the project and add your animations or play with it.</p>
    </div>
);

export default homepage;