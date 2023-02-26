import React, {useState} from 'react';

import PopupCard from './PopupCard';
import TextInput from '../../Inputs/TextInput';
import TextAreaInput from '../../Inputs/TextAreaInput';
import { useTasksDispatch } from '../../../contexts/TaskContext';

export default function CreateTaskContent({closePopup}:{closePopup:()=>void}){
    const dispatch = useTasksDispatch();

    const [title, setTitle] = useState('');
    const handleTitleChange = (value:string) => {
        setTitle(value);
    }
    const [details, setDetails] = useState('');
    const handleDetailsChange = (value:string) => {
        setDetails(value);
    }

    const handleSubmit = () => {
        dispatch({
            type:'add',
            payload: {title, details, complete:false}
        });
        closePopup();
    }

    return(
        <PopupCard>
            <div>
                <h2>Task Name:</h2>
                <TextInput value={title} handleChange={handleTitleChange}/>
            </div>
            <div>
                <h2>Task Details:</h2>
                <TextAreaInput value={details} handleChange={handleDetailsChange}/>
            </div>
            <button className='submit-button' onClick={handleSubmit}>Create Task</button>
        </PopupCard>
    )
}