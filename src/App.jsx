import './App.css';
import Footer from './components/Footer';
import Trainer from './components/Trainer';
import Converter from './components/Converter';
import trainers from './components/data/trainers.json';

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <Converter />
        </section>
        <section>
          <h2>Trainers</h2>
          {
          trainers.map(({ name, age, specialism }) => <Trainer key={`${name}-${specialism}`} name={name} age={age} specialism={specialism} />)
          }
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
