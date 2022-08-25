import './App.css';
import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import Footer from './components/Footer';
import Converter from './components/Converter';
import FilteredList from './components/FilteredList';
import Hooks from './components/Hooks';
import DataRequests from './components/DataRequests';
import Home from './components/Home';
import Params from './components/Params';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/data">Data</Link>
          <Link to="/params/example">Params Example</Link>
          <Link to="/state">State</Link>
          <Link to="/liftingState">Lifting State</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/data" element={<DataRequests />} />
            <Route path="/params/:param" element={<Params />} />
            <Route path="/state" element={<Converter />} />
            <Route path="/liftingState" element={<FilteredList />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
