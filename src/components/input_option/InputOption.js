import React from 'react';
import './InputOption.css'

const InputOption = ({Icon, title, color}) => {
    return (
        <div className='inputOption'>
            <Icon style={{color: color}}/>
            <span>{title}</span>
        </div>
    );
};

export default InputOption;