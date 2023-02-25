import React from 'react';
import { CheckboxProps } from './types';

export default function({checked, handleClick}:CheckboxProps){
    
    return(
        <label className='checkbox-container'>
            <input type='checkbox' className='row-checkbox' onChange={handleClick} checked={checked}/>
            <div className='checkmark'/>
        </label>
    )
}