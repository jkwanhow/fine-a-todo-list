import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import Task from '..';

describe('Task Row Component', () => {

    it('should recieve the a title and display the title', () => {
        const title = 'exampleTitle124321'
        const example1Props = {title, details: '', complete:true, id: 0};

        const {getByRole} = render(<Task {...example1Props} />)
        const h1Element = getByRole('heading');

        expect(h1Element.textContent).toBe(title);

    })

    it('should be able to expand and show details', () => {
        const details = 'long description example 123123321'
        const example2Props = {title:'dumby title', details, complete:true, id: 1};
        
        const {getByTestId} = render(<Task {...example2Props} />)
        const detailsElementPreClick = screen.queryByTestId('details-text')

        expect(detailsElementPreClick).toBeNull();

        const expandButton = getByTestId('expand-button');
        fireEvent.click(expandButton);

        //When expand button is clicked show details
        const detailsElementPostClick = screen.queryByTestId('details-text');
        if (detailsElementPostClick){
            expect(detailsElementPostClick.textContent).toBe(details);
        }else{
            throw new Error('failed, details component did not render');
        }

    })

    it('should not have an expand button if there are no details', () => {
        render(<Task title='no details Item' details='' complete={true} id={2}/>);

        const expandButton = screen.queryByTestId('expand-button');

        expect(expandButton).toBeNull();
    })
    
})