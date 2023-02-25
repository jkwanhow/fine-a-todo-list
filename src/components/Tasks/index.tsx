import React from 'react';

import ToDoItem from '../ToDoItem';
import { TasksProps } from "./types";

export default function({tasks}:TasksProps){

    return(
    <div className='tasks-container'>
        {tasks.map((task) => {
            return(
                <ToDoItem {...task}/>
            )
        })}

    </div>
    )
}