import React, {memo, useEffect} from 'react';

export const MemoedTestComponent = memo(function MemoedTestComponent({count}:{count:number}){

    console.log('in body here');
    useEffect(() => {
        console.log('this component has been (re)rendered')
    })

    return (
        <div>the count is: {count}</div>
    )
})

// The component below will rerender even if the props are the same, because the parent is 
// rerendering. Use memo prevents the mounted component from rerendering even if the parent
// rerenders, given the props of the pure memoized component is the same
/*
export function MemoedTestComponent({count}:{count:number}){

    console.log('in body here');
    useEffect(() => {
        console.log('this component has been (re)rendered')
    })

    return (
        <div>the count is: {count}</div>
    )
}
*/