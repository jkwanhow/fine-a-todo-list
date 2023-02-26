import React from 'react';

export default function PopupCard({children}:{children:JSX.Element|JSX.Element[]}){

    return(
        <div className='popup-card'>
            {children}
        </div>
    )
}