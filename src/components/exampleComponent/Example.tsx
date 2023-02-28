import React, {useState, useEffect} from 'react';


export default function Example({}){
    const [clicks, setClicks] = useState(0);
    const handleIncrementClick = () => {
        setClicks(clicks+1);
    }
    useEffect(() => {
        console.log('testing my understanding of context');
    })

    return(
        <>
        This is a fake component to test tests are working.
        <div>Count is <h1 data-testid='number-of-clicks'>{clicks}</h1> </div>
        <button onClick={handleIncrementClick}>Increment</button>
        </>
    )
}