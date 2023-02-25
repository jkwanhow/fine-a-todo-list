import React, {useState} from 'react';
import { createPortal } from "react-dom";

import { PopupProps } from './types';


export default function({children, closePopup}:PopupProps){
    
    return(
        createPortal(
            <div className='popup-background' onClick={closePopup}>
                {children}
            </div>,
            document.body
        )
    )
}