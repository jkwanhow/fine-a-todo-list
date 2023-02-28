import React, {useState, useEffect} from 'react';
import { createPortal } from "react-dom";
import CreateTaskContent from './PopupContent/CreateTaskContent';
import { usePopup, usePopupDispatch } from '../../contexts/PopupContext';
import { PopupContent, PopupDetails } from './types';
import DeleteTaskContent from './PopupContent/DeleteTaskWarning';

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
                {chooseContent(popupDetails)}
            </div>,
            document.body
        )
        :
        null
        }
        </>
    )
}

const chooseContent = (popupDetails:PopupDetails) => {
    switch (popupDetails.content) {
        case "CREATE": {
            return <CreateTaskContent />
        }
        case "DELETE": {
            return <DeleteTaskContent targetId={popupDetails.targetId} />
        }
        default : {
            throw new Error(`${popupDetails.content} is not a valid type of popup content`);
        }
    }
}