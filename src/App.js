import './App.scss';

import InfoCard from './infoCard/InfoCard';
import Counter from './counter/Counter';
import CatFact from './catFact/CatFact';

function App() {
  return (
    <div className="App">
      <InfoCard title="Info Card" content="This is an info card with some content."/>
      <Counter />
      <CatFact />
    </div>
  );
}

export default App;
