import React from 'react';
import { HeaderProps } from './types';
import upArrow from '../../assets/icons/expandUpArrow.svg';
import editIcon from '../../assets/icons/edit.svg';

export default function Header({title, expanded, handleExpandClick, canExpand=false}:HeaderProps){

    return(
        <div className='header'>
            <div className='task-title-container'><h1>{title}</h1></div>
            {canExpand?
                <img className={`expand-icon ${expanded?'rotate':''}`} src={upArrow} onClick={handleExpandClick}/>
                :
                <div className='expand-icon'/>
            }
            <img className='edit-icon' src={editIcon} />
        </div>
    )
}