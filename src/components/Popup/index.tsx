import React, {useState, useEffect} from 'react';
import { createPortal } from "react-dom";
import CreateTaskContent from './PopupContent/CreateTaskContent';
import { usePopup, usePopupDispatch } from '../../contexts/PopupContext';


export default function({}){
    const popupDetails = usePopup();
    const popupDispatch = usePopupDispatch();
    const handleClick = (e:any) => {
        e.stopPropagation();
        if (e.currentTarget != e.target) return;
        popupDispatch({
            type: 'close'
        })
    }

    return(
        <>
        {popupDetails.open?
        createPortal(
            <div className='popup-background' onClick={handleClick}>
                <CreateTaskContent />
            </div>,
            document.body
        )
        :
        null
        }
        </>
    )
}