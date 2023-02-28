import React, {useContext, createContext, useReducer} from 'react';
import type { Dispatch } from 'react';

type PopupAction = {
    type: string;
    content: string;
}

interface PopupDetails{
    open: boolean, 
    content: string
}


const intitialPopup:PopupDetails = {open: false, content: 'CREATE'};


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
            return {open: true, content: action.content}
        }
        case "close": {
            return {...popupDetails, open: false}
        }
        default : {
            throw new Error(`unknown action type '${action.type}' use either close or open`)
        }
    }
}