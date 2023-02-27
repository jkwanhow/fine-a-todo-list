import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import Tasks from '..';
import { TaskProps } from '../Task/types';

const testTasks1:TaskProps[] = [{id: 0, title: 'example', details: 'nice', complete:false},
 {id: 1, title: 'aaa', details: '', complete:false}];

describe('tests for tasks component that holds the task rows', () => {
    test('delte this when component is ready to be tested', () => {
        expect(1).toBe(1);
    })
    /*
    it('should render the tasks, hence have the correct number of rows', () => {
        const {getAllByRole} = render(<Tasks {...testTasks1} />);
        const listItemElements = getAllByRole('listitem');

        expect(listItemElements.length).toBe(testTasks1.length);
    })
    */
})


// Have to rework task to allow for input props of task. Finish this test after you move the central container
// away from App