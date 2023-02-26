import React from 'react';
import { TextInputProps } from './types';

export default function TextAreaInput({handleChange, ...props}:TextInputProps){

    return(
        <div className='textarea-container'>
            <textarea className='text-area' cols={50} rows={10} onChange={(e) => {handleChange(e.target.value)}} {...props}/>
        </div>
    )
}