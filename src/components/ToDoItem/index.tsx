import React, {useState} from 'react'
import Header from "./Header"

export default function({}){
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => { setExpanded(!expanded); }
    
    return(
    <div className='todo-row-container'>
        <Header title='example title' expanded={expanded} handleExpandClick={toggleExpand}/>
    </div>
    )
}