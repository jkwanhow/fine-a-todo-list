import React, {useState} from 'react'

import Header from "./Header"
import Details from './Details';
import { TaskProps } from './types';


export default function({title, details, complete}:TaskProps){
    const [expanded, setExpanded] = useState(false);
    const [completed, setCompleted] = useState(complete);
    const toggleExpand = () => { setExpanded(!expanded); }
    const toggleComplete = () => {setCompleted(completed);}
    return(
    <div className='todo-row-container'>
        <Header title={title} expanded={expanded} handleExpandClick={toggleExpand} 
        canExpand={details?true:false} complete={completed} handleStatusClick={toggleComplete}/>
        {expanded?
        <Details details={details} />
        :
        null
        }
    </div>
    )
}