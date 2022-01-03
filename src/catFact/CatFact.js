import React from 'react';

import './CatFact.scss';

function CatFact(props) {

    const [loading, setLoading] = React.useState(true);
    const [catFact, setCatFact] = React.useState('')

    React.useEffect(() => {
        loadCatFact();
    }, []);

    const loadCatFact = () => {
        setLoading(true);

        fetch('https://catfact.ninja/fact').
            then(response => response.json()).
            then((data) => {
                setCatFact(data.fact);
                setLoading(false);
            });
    }

    return (
        <div className="catFact">
            <div className="catFact__textContainer" data-testid="catFact__textContainer">
                {catFact}
            </div>
            <div className="catFact__button" data-testid="catFact__button" onClick={() => loadCatFact()}>
                {loading ? 'Loading...' : 'Load Cat Fact' }
            </div>
        </div>
    );
}

export default CatFact;