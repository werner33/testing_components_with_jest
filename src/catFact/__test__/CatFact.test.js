import {render} from '@testing-library/react';
import CatFact from '../CatFact';

describe('CatFact displays random catfact on mount and a new one on each button click', ()=> {

    it('renders CatFact component', () => { 
        render(<CatFact />);
    });
    
    it('has an area to display the text of a cat fact', () => {
        const {getByTestId} = render(<CatFact />);
        
        expect(getByTestId('catFact__textContainer')).toBeInTheDocument()
    })
    
     it('has a button to load a new cat fact', () => {
        const {getByTestId} = render(<CatFact />);
        
        expect(getByTestId('catFact__button')).toBeInTheDocument();
    });

    it('button text initializes to "Loading..." on mount', () => {
        
        const{getByText} = render(<CatFact />);

        expect(getByText('Loading...')).toBeInTheDocument();

    });

    it('has no text in textContainer on mount', () => {
        const{getByTestId} = render(<CatFact />);

        expect(getByTestId('catFact__textContainer')).toBeEmptyDOMElement()
    })

    it('changes button text to "Load Cat Fact" on successful mount', async () => {
        const{getByText, findByText, queryByText} = render(<CatFact />);

        expect(getByText('Loading...')).toBeInTheDocument();

        await findByText('Load Cat Fact');

        expect(queryByText('Loading...')).not.toBeInTheDocument();
    })

    it('displays a catfact on successful mount', async () => {
        const {getByTestId, findByText} = render(<CatFact />);

        await findByText('Load Cat Fact');

        expect(getByTestId('catFact__textContainer')).not.toBeEmptyDOMElement();
    })

    it('changes button text on button click until API responds', async () => {
       
        const{getByTestId, findByText, queryByText} = render(<CatFact />);

        await findByText('Load Cat Fact');

        let button = getByTestId('catFact__button');
        
        button.click();

        await findByText('Load Cat Fact');
        
        expect(queryByText("Loading...")).not.toBeInTheDocument();
    })

    it('changes cat fact text on button click', async () => {
        const{getByTestId, findByText, queryByText, queryByTestId} = render(<CatFact />);

        await findByText('Load Cat Fact');

        let firstCatFact = getByTestId("catFact__textContainer").innerHTML;

        let button = getByTestId('catFact__button');
        
        button.click();

        await findByText('Load Cat Fact');

        expect(queryByText(firstCatFact)).not.toBeInTheDocument();
        expect(queryByTestId("catFact__textContainer")).not.toBeEmptyDOMElement();
    })
})

