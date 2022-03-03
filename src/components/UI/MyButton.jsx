import React from 'react';
import '../../styles/MyButton.css'

const MyButton = ({onClick,text,className}) => {
    return (
        <button className={className} onClick={onClick}> {text} </button>
    );
};

export default MyButton;