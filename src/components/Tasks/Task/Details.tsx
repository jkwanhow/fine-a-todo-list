import React from 'react';
import { DetailsProps } from './types';

export default function Details({details}:DetailsProps){

    return(
        <>
            <div className='line-seperator'/>
            <div data-testid='details-text' className='details-container'>
                {details}
            </div>
        </>
    )
}