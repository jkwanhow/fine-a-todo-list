import React, {useState} from 'react';
import {MemoedTestComponent} from './MemoedTestComponents';

export default function MemoTest({}){

    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }
    const incrementOther = () => {
        setOtherCount(otherCount+1);
    }
    const reduce = () => {
        setCount(count-1);
    }
    const reduceOther = () => {
        setOtherCount(otherCount-1);
    }
    return(
        <div>
            <div>{otherCount}</div>
            <MemoedTestComponent count={count}/>
            changing states here rerenders child
            <button onClick={increment}>+</button>
            <button onClick={reduce}>-</button>
            <div>
            changing the state here doesnt rerender child
            <button onClick={incrementOther}>+</button>
            <button onClick={reduceOther}>-</button>
            </div>
        </div>
    )
}