import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import ToDoItem from '..';

describe('Task Row Component', () => {

    it('should recieve the a title and display the title', () => {
        const title = 'exampleTitle124321'
        const example1Props = {title, details: ''};

        const {getByRole} = render(<ToDoItem {...example1Props} />)
        const h1Element = getByRole('heading');

        expect(h1Element.textContent).toBe(title);

    })
})