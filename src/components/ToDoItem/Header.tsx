import React from 'react';
import { HeaderProps } from './types';
import downArrow from '../../assets/icons/expandDownArrow.svg';
import editIcon from '../../assets/icons/edit.svg';

export default function Header({title}:HeaderProps){

    return(
        <div className='header'>
            <div className='task-title-container'><h1>{title}</h1></div>
            <img className='expand-icon' src={downArrow}/>
            <img className='edit-icon' src={editIcon} />
        </div>
    )
}