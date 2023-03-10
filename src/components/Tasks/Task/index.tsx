import React, {useState} from 'react'

import Header from "./Header"
import Details from './Details';
import { TaskProps } from './types';
import { usePopupDispatch } from '../../../contexts/PopupContext';


export default function({title, details, complete, id}:TaskProps){
    const popupDispatch = usePopupDispatch();
    const [expanded, setExpanded] = useState(false);
    const [completed, setCompleted] = useState(complete);
    const toggleExpand = () => { setExpanded(!expanded); }
    const toggleComplete = () => { setCompleted(!completed);}

    const dispatchAnAction = (key:"DELETE"|"EDIT") => {
        if (key === "DELETE"){
            popupDispatch({
                type: 'open',
                content: 'DELETE',
                targetId:id
            })
        }else{
            popupDispatch({
                type: 'open',
                content: 'EDIT',
                payload: {title, details},
                targetId:id
            })
        }
    }


    return(
    <li className='todo-row-container'>
        <Header title={title} expanded={expanded} handleExpandClick={toggleExpand} 
        canExpand={details?true:false} complete={completed} handleStatusClick={toggleComplete}
        handleDispatch={dispatchAnAction}/>
        {expanded?
        <Details details={details} />
        :
        null
        }
    </li>
    )
}