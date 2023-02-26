import React, {useState} from 'react';

import PopupCard from './PopupCard';
import TextInput from '../../Inputs/TextInput';
import { useTasksDispatch } from '../../Contexts/TaskContext';

export default function CreateTaskContent({}){
    const [title, setTitle] = useState('');
    const handleTitleChange = (value:string) => {
        setTitle(value);
    }
    const [details, setDetails] = useState('');

    return(
        <PopupCard>
            <div>
                <TextInput value={title} handleChange={handleTitleChange}/>
            </div>
        </PopupCard>
    )
}