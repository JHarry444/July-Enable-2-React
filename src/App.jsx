import './App.css';
import Footer from './components/Footer';
import Converter from './components/Converter';
import FilteredList from './components/FilteredList';

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <Converter />
        </section>
        <section>
          <h2>Trainers</h2>
          <FilteredList />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
