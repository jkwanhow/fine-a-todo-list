import React, {useContext, createContext, useReducer} from 'react';
import type { Dispatch } from 'react';

import { PopupContent, PopupDetails } from '../components/Popup/types';

type PopupAction = {
    type: string;
    content: PopupContent;
    targetId?: number,
}



const intitialPopup:PopupDetails = {open: false, content: 'CREATE', targetId: 0};


const PopupContext = createContext(intitialPopup);
const PopuipDispatchContext = createContext((() => {}) as Dispatch<any>);

export function PopupProvider({children}:{children:JSX.Element|JSX.Element[]}){

    const [popupDetails, dispatch] = useReducer(popupReducer, intitialPopup);

    return(
        <PopupContext.Provider value={popupDetails}>
            <PopuipDispatchContext.Provider value={dispatch}>
                {children}
            </PopuipDispatchContext.Provider>
        </PopupContext.Provider>
    )


}

export const usePopup = () => {
    return useContext(PopupContext);
}

export const usePopupDispatch = () => {
    return useContext(PopuipDispatchContext);
}

function popupReducer(popupDetails:PopupDetails, action:PopupAction){
    switch (action.type) {
        case "open": {
            let targetId = popupDetails.targetId;
            if (action.targetId){
                targetId = action.targetId;
            }
            return {open: true, content: action.content, targetId}
        }
        case "close": {
            return {...popupDetails, open: false, targetId: popupDetails.targetId}
        }
        default : {
            throw new Error(`unknown action type '${action.type}' use either close or open`)
        }
    }
}