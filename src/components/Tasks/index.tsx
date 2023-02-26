import React from 'react';

import ToDoItem from '../ToDoItem';
import { useTasks } from '../Contexts/TaskContext';
import { TasksProps } from "./types";

export default function({}){
    const tasks = useTasks();
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