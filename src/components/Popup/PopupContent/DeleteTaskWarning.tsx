import React from 'react';
import PopupCard from './PopupCard';
import { usePopupDispatch } from '../../../contexts/PopupContext';
import { useTasksDispatch } from '../../../contexts/TaskContext';
export default function DeleteTaskContent({targetId}:{targetId:number}){
    const popupDispatch = usePopupDispatch();
    const taskDispatch = useTasksDispatch();
    return(
        <PopupCard size='small'>
            <div>
                <h2>Are you sure you want to delete this task?</h2>
            </div>
            <div style={{display:'flex', gap: '25%', justifyContent: 'center', marginTop: '10%'}}>
           <button className='submit-button' onClick={() => {
            taskDispatch({type: 'delete', id:targetId})
            popupDispatch({type: 'close'})
           }}>Yes</button>
           <button className='submit-button' onClick={() => {popupDispatch({type: 'close'})}}>No</button>
           </div>
        </PopupCard>
    )
}