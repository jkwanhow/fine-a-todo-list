import React, {useState} from 'react';

export default function Example({}){

    const [clicks, setClicks] = useState<number>(0);
    const handleIncrementClick = () => {
        setClicks(clicks+1);
    }

    return(
        <>
        This is a fake component to test tests are working.
        <div id='clickHolder'>Count is {clicks} </div>
        <button onClick={handleIncrementClick}>Increment</button>
        </>
    )
}