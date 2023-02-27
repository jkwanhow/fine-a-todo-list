import React from 'react';

import Task from './Task';
import { useTasks } from '../../contexts/TaskContext';
import { TasksProps } from "./types";

export default function({}){
    const tasks = useTasks();
    return(
    <ul className='tasks-container'>
        {tasks.map((task) => {
            return(
                <Task {...task}/>
            )
        })}

    </ul>
    )
}