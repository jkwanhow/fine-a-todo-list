import React from 'react';

export default function PopupCard({children, size='large'}:{children:JSX.Element|JSX.Element[], size?:'small'|'large'}){

    return(
        <div className={`popup-card ${size}`}>
            {children}
        </div>
    )
}