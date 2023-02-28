import PopupCard from './PopupCard';
import TextInput from '../../Inputs/TextInput';
import TextAreaInput from '../../Inputs/TextAreaInput';

import { TaskContentProps } from '../types';

export default function CreateTaskContent({title, details, handleSubmit, handleTextChange}:TaskContentProps){

    return(
        <PopupCard>
            <div>
                <h2>Task Name:</h2>
                <TextInput value={title} handleChange={(value) => {handleTextChange(value, 'title')}}/>
                {!title?<h5 className='note need-title'>Task needs a title, at least</h5>:null}
            </div>
            <div>
                <h2>Task Details:</h2>
                <TextAreaInput value={details} handleChange={(value) => {handleTextChange(value, 'details')}}/>
            </div>
            <button className='submit-button' disabled={!title} onClick={handleSubmit}>Create Task</button>
        </PopupCard>
    )
}