import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
// import Converter from './components/Converter';
// import FilteredList from './components/FilteredList';
import Hooks from './components/Hooks';
import DataRequests from './components/DataRequests';

function App() {
  const [hide, setHide] = useState(false);
  return (
    <div className="App">
      <main>
        <section>
          <button type="button" onClick={() => setHide((h) => !h)}>Toggle</button>
          {!hide && <Hooks />}
        </section>
        <section>
          <DataRequests />
        </section>
        <section>
          {/* <Converter /> */}
        </section>
        <section>
          <h2>Trainers</h2>
          {/* <FilteredList /> */}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
