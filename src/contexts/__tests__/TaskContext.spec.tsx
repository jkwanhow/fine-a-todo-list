import React, {useEffect} from 'react';
import {render} from '@testing-library/react';

import { TasksProvider, useTasks, useTasksDispatch } from '../TaskContext';

const TestComponent1 = ({}) => {
    const tasks = useTasks();
    return(
        <div>
            {tasks.map((task) => {
                return(
                    <div key={task.id}>
                        <div data-testid='task-id'>
                            {task.id}
                        </div>
                        <div data-testid='task-title'>
                            {task.title}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const TestComponent2 = ({}) => {
    const dispatch = useTasksDispatch();

    useEffect(() => {
        dispatch({
            type: 'add',
            payload: {title: 'dispatchTestItem', details: '', complete: false}
        })
    }, [])

    return(
        <TestComponent1 />
    )
}

describe('Tasks Context tests', () => {

    it('should be able to read tasks', () => {
       const {getAllByTestId} = render(<TasksProvider><TestComponent1 /></TasksProvider>);
        const idElements = getAllByTestId('task-id');

        expect(idElements.length).toBe(2);
    })

    it('should be able to add a new task via dispatch', () => {
        const {getAllByTestId} = render(<TasksProvider><TestComponent2 /></TasksProvider>);
        const idElements = getAllByTestId('task-title');

        expect(idElements.length).toBe(3);
        expect(idElements[2].textContent).toBe('dispatchTestItem');

    })
})