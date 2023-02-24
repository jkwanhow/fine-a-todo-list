import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Example from '../Example';

describe('Example Component used to test initial testing', () => {

    it('should render exactly one button', () => {
        const {getAllByRole} = render(<Example/>);
        
        // Act
        const buttons = getAllByRole('button');

        // Assert
        expect(buttons.length).toBe(1);
    })

    it('should increment the value when button clicked', async () => {
        const {getByRole, getByTestId} = render(<Example />);

        // Act
        const initialClicks = Number(getByTestId('number-of-clicks').textContent);
        const button = getByRole('button');
        fireEvent.click(button);
        const postButtonPressClicks = Number(getByTestId('number-of-clicks').textContent);
        
        // Assert number of clicks after should be greater than number of clicks before the button
        // press by one
        expect(postButtonPressClicks - initialClicks).toBe(1);
    })
})