import React from 'react';
import { HeaderProps } from './types';
import upArrow from '../../assets/icons/expandUpArrow.svg';
import editIcon from '../../assets/icons/edit.svg';

export default function Header({title, expanded, handleExpandClick}:HeaderProps){

    return(
        <div className='header'>
            <div className='task-title-container'><h1>{title}</h1></div>
            <img className={`expand-icon ${expanded?'rotate':''}`} src={upArrow} onClick={handleExpandClick}/>
            <img className='edit-icon' src={editIcon} />
        </div>
    )
}