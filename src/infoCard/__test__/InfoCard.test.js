import { render } from '@testing-library/react';
import InfoCard from '.././InfoCard';

test('renders InfoCard', () => {
    render(<InfoCard />);
});

test('it has an element to hold the title text', () => {
    const {getByTestId} = render(<InfoCard />);
    expect(getByTestId('infoCard__title')).toBeInTheDocument();
})

test('it renders the title text passed as a prop', () => {
    const {getByText} = render(<InfoCard title="Info Card Title" />);
    expect(getByText('Info Card Title')).toBeInTheDocument();
})

test('it has an element to hold the title text', () => {
    const {getByTestId} = render(<InfoCard />);
    expect(getByTestId('infoCard__content')).toBeInTheDocument();
})

test('it renders the title text passed as a prop', () => {
    const {getByText} = render(<InfoCard title="Info Card Title" content="Some content on the card." />);
    expect(getByText('Some content on the card.')).toBeInTheDocument();
})