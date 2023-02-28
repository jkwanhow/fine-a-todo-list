import React, {useState} from 'react';
import { useTasksDispatch } from '../../../contexts/TaskContext';
import { usePopupDispatch } from '../../../contexts/PopupContext';

import CreateTaskContent from './CreateTaskContent';


export default function CreateTask({}){
    const taskDispatch = useTasksDispatch();
    const popupDispatch = usePopupDispatch();

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const handleTextChange = (value:string, key:'title'|'details') => {
        if (key === 'title'){
            setTitle(value);
        }else{
            setDetails(value);
        }
        
    }
    const handleSubmit = () => {
        taskDispatch({
            type:'add',
            payload: {title, details, complete:false}
        });
        popupDispatch({
            type: 'close',
        })
    }

    return(
        <CreateTaskContent {...{handleSubmit, title, details, handleTextChange}}/>
    )
}