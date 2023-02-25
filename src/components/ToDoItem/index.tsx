import React, {useState} from 'react'
import Header from "./Header"
import Details from './Details';
const tempDescription = 'this is a temporary description for now will delete later';

export default function({}){
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => { setExpanded(!expanded); }

    return(
    <div className='todo-row-container'>
        <Header title='example title' expanded={expanded} handleExpandClick={toggleExpand}/>
        {expanded?
        <Details details={tempDescription} />
        :
        null
        }
    </div>
    )
}