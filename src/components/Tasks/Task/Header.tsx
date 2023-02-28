import React from 'react';
import { HeaderProps } from './types';
import upArrow from '../../../assets/icons/expandUpArrow.svg';
import editIcon from '../../../assets/icons/edit.svg';
import deleteIcon from '../../../assets/icons/deleteIcon.svg';
import Checkbox from '../../Inputs/Checkbox';

export default function Header({title, expanded, handleExpandClick, canExpand=false, complete, handleStatusClick, handleDispatch}:HeaderProps){

    return(
        <div className='header'>
            <Checkbox checked={complete} handleClick={handleStatusClick}/>
            <div className='task-title-container'><h1 style={complete?{textDecoration: 'line-through'}:{}}>{title}</h1></div>
            {canExpand?
                <img data-testid='expand-button' className={`expand-icon ${expanded?'rotate':''}`} src={upArrow} onClick={handleExpandClick}/>
                :
                <div className='expand-icon'/>
            }
            <div className='right-side-icons'>
                <img className='edit-icon' src={editIcon} onClick={() => {handleDispatch('EDIT')}}/>
                <img data-testid='delete-button' className='delete-icon' src={deleteIcon} onClick={() => {handleDispatch('DELETE')}}/>
            </div>
        </div>
    )
}