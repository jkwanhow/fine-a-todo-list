import React from 'react';
import { CheckboxProps } from './types';

export default function({checked}:CheckboxProps){
    
    return(
        <label className='checkbox-container'>
            <input type='checkbox' className='row-checkbox' checked={checked}/>
            <div className='checkmark'></div>
        </label>
    )
}