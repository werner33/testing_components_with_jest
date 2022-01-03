import { render } from '@testing-library/react';
import Counter from '../Counter';

describe('the counter has a button to increment the count by one each time its clicked', () => {

    it('renders Counter', () => {
        render(<Counter />);
    });

    it('has an element to display count', () => {
        const {getByTestId} = render(<Counter />);

        expect(getByTestId('counter__display')).toBeInTheDocument();
    });

    it('has an button to increment count', () => {
        const {getByText} = render(<Counter />);

        expect(getByText('click me')).toBeInTheDocument();
    });

    it('counter increments by one when button is clicked' , () => {
        const {getByText, getByTestId} = render(<Counter />);

        getByText('click me').click();

        expect(getByTestId('counter__display')).toHaveTextContent('1')
    })

    it('counter increments by one when button is clicked' , () => {
        const {getByText, getByTestId} = render(<Counter />);
    
        getByText('click me').click();
        getByText('click me').click();
        getByText('click me').click();
    
        expect(getByTestId('counter__display')).toHaveTextContent('3')
    })

})