import React from 'react';
import { HeaderProps } from './types';

export default function Header({title}:HeaderProps){

    return(
        <div className='header'>
            <h1>{title}</h1>
        </div>
    )
}