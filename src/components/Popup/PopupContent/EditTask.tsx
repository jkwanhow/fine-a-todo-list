import React, {useState} from 'react';
import { useTasksDispatch } from '../../../contexts/TaskContext';
import { usePopupDispatch } from '../../../contexts/PopupContext';
import { CreateTaskProps } from '../types';

import CreateTaskContent from './CreateTaskContent';


export default function EditTask({targetId, currentTitle, currentDetails}:CreateTaskProps){
    const taskDispatch = useTasksDispatch();
    const popupDispatch = usePopupDispatch();

    const [title, setTitle] = useState(currentTitle);
    const [details, setDetails] = useState(currentDetails);
    const handleTextChange = (value:string, key:'title'|'details') => {
        if (key === 'title'){
            setTitle(value);
        }else{
            setDetails(value);
        }
        
    }
    const handleSubmit = () => {
        //the complete here doesnt matter since we don't overwrite it.
        taskDispatch({
            type:'edit',
            payload: {targetId, title, details, complete:false},
            id: targetId,
        });
        popupDispatch({
            type: 'close',
        })
    }

    return(
        <CreateTaskContent {...{handleSubmit, title, details, handleTextChange}}/>
    )
}