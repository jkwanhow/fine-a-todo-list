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

    it('should be able to expand and show details', () => {
        const details = 'long description example 123123321'
        const example2Props = {title:'dumby title', details};

        const {getAllByTestId, getByTestId} = render(<ToDoItem {...example2Props} />)
        //cannnot find id, look how to show the element doesnt exist after dinner
        expect(getAllByTestId('details-text').length).toBe(0);

        const h1Element = getByTestId('expand-button');
        fireEvent.click(h1Element);


        expect(getByTestId('details-text').textContent).toBe(details);

    })
})