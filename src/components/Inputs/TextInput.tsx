import React from 'react';

import { TextInputProps } from './types';

export default function TextInput({handleChange, ...props}:TextInputProps){

    return(
        <div className='text-input-container'>
            <input className='text-input' onChange={(e) => {handleChange(e.target.value)}} {...props}/>
        </div>
        )
}