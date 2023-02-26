import React, {useState} from 'react';
import { createPortal } from "react-dom";

import { PopupProps } from './types';


export default function({children, closePopup}:PopupProps){
    const handleClick = (e:any) => {
        e.stopPropagation();
        if (e.currentTarget != e.target) return;
        closePopup();
    }
    return(
        createPortal(
            <div className='popup-background' onClick={handleClick}>
                {children}
            </div>,
            document.body
        )
    )
}