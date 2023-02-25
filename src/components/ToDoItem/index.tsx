import React, {useState} from 'react'

import Header from "./Header"
import Details from './Details';
import { TaskProps } from './types';


export default function({title, details}:TaskProps){
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => { setExpanded(!expanded); }
    return(
    <div className='todo-row-container'>
        <Header title={title} expanded={expanded} handleExpandClick={toggleExpand} canExpand={details?true:false}/>
        {expanded?
        <Details details={details} />
        :
        null
        }
    </div>
    )
}