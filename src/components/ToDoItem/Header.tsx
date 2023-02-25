import React from 'react';
import { HeaderProps } from './types';
import upArrow from '../../assets/icons/expandUpArrow.svg';
import editIcon from '../../assets/icons/edit.svg';
import Checkbox from '../Inputs/Checkbox';

export default function Header({title, expanded, handleExpandClick, canExpand=false, complete, handleStatusClick}:HeaderProps){

    return(
        <div className='header'>
            <Checkbox checked={complete} handleClick={handleStatusClick}/>
            <div className='task-title-container'><h1 style={complete?{textDecoration: 'line-through'}:{}}>{title}</h1></div>
            {canExpand?
                <img data-testid='expand-button' className={`expand-icon ${expanded?'rotate':''}`} src={upArrow} onClick={handleExpandClick}/>
                :
                <div className='expand-icon'/>
            }
            <img className='edit-icon' src={editIcon} />
        </div>
    )
}